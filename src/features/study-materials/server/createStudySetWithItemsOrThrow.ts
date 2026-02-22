import type { SupabaseClient } from '@supabase/supabase-js';

type Question = {
  question: string;
  options: string[];
  correct_answer: string;
  explanation?: string | null;
};

export async function createStudySetWithItemsOrThrow(
  supabase: SupabaseClient,
  args: {
    documentId: string;
    userId: string;
    title: string;
    questions: Question[];
  },
) {
  const { data: set, error: setError } = await supabase
    .from('study_sets')
    .insert({
      document_id: args.documentId,
      user_id: args.userId,
      title: args.title,
    })
    .select()
    .single();

  if (setError || !set) {
    throw new Error(setError?.message ?? 'Failed to create set');
  }

  const rows = args.questions.map((q) => ({
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
    throw new Error(itemsError.message);
  }

  return set as { id: string };
}
