import { generateStudySet } from '@/src/features/study-materials/server/generateStudySet';

export async function POST(req: Request) {
  const documentId = await req.json();
  return generateStudySet(documentId);
}
