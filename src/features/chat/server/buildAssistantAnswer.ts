import { getUserDocumentOrThrow } from '@/src/features/study-materials/server/getUserDocumentOrThrow';
import { downloadPdfOrThrow } from '@/src/features/study-materials/server/downloadPdfOrThrow';
import { generateAnswerFromPdfOrThrow } from '@/src/features/chat/server/generateAnswerFromPdfOrThrow';

const FALLBACK_MESSAGE =
  'Sorry, I could not process this PDF right now. Please try again.';

type Params = {
  supabase: Awaited<
    ReturnType<typeof import('@/src/shared/lib/supabase').getSupabase>
  >;
  documentId: string;
  userId: string;
  question: string;
};

export async function buildAssistantAnswer({
  supabase,
  documentId,
  userId,
  question,
}: Params) {
  try {
    const document = await getUserDocumentOrThrow(supabase, {
      documentId,
      userId,
    });

    const file = await downloadPdfOrThrow(supabase, document.storage_path);

    return await generateAnswerFromPdfOrThrow({
      file,
      question,
    });
  } catch {
    return FALLBACK_MESSAGE;
  }
}
