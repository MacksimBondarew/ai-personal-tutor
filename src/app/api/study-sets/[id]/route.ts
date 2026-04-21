import { generateQuiz } from '@/src/features/quiz/server/generateQuiz';

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  return generateQuiz(id);
}
