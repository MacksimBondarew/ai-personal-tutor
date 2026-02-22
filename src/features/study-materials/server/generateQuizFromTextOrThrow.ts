import OpenAI from 'openai';
import { extractJson } from '@/src/shared/lib';
import { buildQuizPrompt } from './prompt';

export async function generateQuizFromTextOrThrow(text: string) {
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
        content: buildQuizPrompt(text),
      },
    ],
  });

  const raw = ai.output_text ?? '';
  const jsonStr = extractJson(raw);
  if (!jsonStr) {
    throw new Error('OpenAI did not return JSON');
  }

  const quiz = JSON.parse(jsonStr);

  if (!Array.isArray(quiz.questions) || quiz.questions.length === 0) {
    throw new Error('No questions generated');
  }

  for (const q of quiz.questions) {
    if (
      typeof q.question !== 'string' ||
      !Array.isArray(q.options) ||
      q.options.length !== 4 ||
      typeof q.correct_answer !== 'string'
    ) {
      throw new Error('Invalid quiz shape returned by OpenAI');
    }
  }

  return quiz;
}
