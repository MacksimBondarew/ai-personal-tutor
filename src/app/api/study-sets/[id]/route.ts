import { generateQuiz } from '@/src/features/quiz/server/generateQuiz';

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  return generateQuiz(id);
}
