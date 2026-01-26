import OpenAI from 'openai';
import { getSupabase } from '@/src/shared/lib/supabase';
import { bad, json } from '@/src/shared/lib';

const extractJson = (text: string) => {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  return text.slice(start, end + 1);
};

export async function POST(req: Request) {
  try {
    const { materialId } = (await req.json()) as { materialId?: string };
    if (!materialId) return bad('materialId is required', 400);

    const supabase = await getSupabase();

    const { data: userData, error: userError } = await supabase.auth.getUser();
    const user = userData.user;
    if (userError || !user)
      return bad(userError?.message ?? 'Unauthorized', 401);

    const { data: doc, error: docError } = await supabase
      .from('documents')
      .select('*')
      .eq('id', materialId)
      .eq('user_id', user.id)
      .single();

    if (docError || !doc)
      return bad(docError?.message ?? 'Document not found', 404);

    const { data: file, error: dlError } = await supabase.storage
      .from('pdfs')
      .download(doc.storage_path);

    if (dlError || !file)
      return bad(dlError?.message ?? 'Failed to download PDF', 400);
    const text = 'PDF TEXT HERE';

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const ai = await openai.responses.create({
      model: 'gpt-4o-mini',
      input: [
        {
          role: 'system',
          content:
            'You are a JSON generator. Output ONLY valid JSON. No markdown, no backticks, no extra text.',
        },
        {
          role: 'user',
          content: `
Return JSON exactly in this shape:
{
  "questions": [
    {
      "question": "string",
      "options": ["A","B","C","D"],
      "correct_answer": "one of options",
      "explanation": "string"
    }
  ]
}

Text:
${text}
          `.trim(),
        },
      ],
    });

    const raw = ai.output_text ?? '';
    const jsonStr = extractJson(raw);
    if (!jsonStr) return bad('OpenAI did not return JSON', 500, { raw });

    const quiz = JSON.parse(jsonStr) as { questions?: any[] };
    if (!Array.isArray(quiz.questions) || quiz.questions.length === 0) {
      return bad('No questions generated', 500, { raw, parsed: quiz });
    }

    const { data: set, error: setError } = await supabase
      .from('study_sets')
      .insert({
        document_id: materialId,
        user_id: user.id,
        title: doc.title,
      })
      .select()
      .single();

    if (setError || !set)
      return bad(setError?.message ?? 'Failed to create set', 500);

    const rows = quiz.questions.map((q: any) => ({
      study_set_id: set.id,
      question: q.question,
      options: q.options,
      correct_answer: q.correct_answer,
      explanation: q.explanation ?? null,
    }));

    const { error: itemsError } = await supabase
      .from('study_set_items')
      .insert(rows);
    if (itemsError) {
      return bad(itemsError.message, 500, {
        details: itemsError.details,
        hint: itemsError.hint,
      });
    }

    const { error: updError } = await supabase
      .from('documents')
      .update({ status: 'ready' })
      .eq('id', materialId)
      .eq('user_id', user.id);

    if (updError) return bad(updError.message, 500);

    return json({ studySetId: set.id });
  } catch (e: any) {
    return bad(e?.message ?? 'Unknown error', 500, {
      stack: process.env.NODE_ENV === 'development' ? e?.stack : undefined,
    });
  }
}
