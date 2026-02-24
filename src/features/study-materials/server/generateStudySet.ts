import { getSupabase } from '@/src/shared/lib/supabase';
import { json } from '@/src/shared/lib';
import {
  getUserOrThrow,
  getUserDocumentOrThrow,
  generateQuizFromTextOrThrow,
  downloadPdfOrThrow,
  createStudySetWithItemsOrThrow,
  markDocumentReady,
  extractPdfTextOrThrow,
} from '@/src/features/study-materials/server';

export const generateStudySet = async (documentId: string) => {
  const supabase = await getSupabase();

  const user = await getUserOrThrow(supabase);

  const doc = await getUserDocumentOrThrow(supabase, {
    documentId: documentId,
    userId: user.id,
  });

  const file = await downloadPdfOrThrow(supabase, doc.storage_path);

  const text = await extractPdfTextOrThrow(file);

  const quiz = await generateQuizFromTextOrThrow(text);

  const set = await createStudySetWithItemsOrThrow(supabase, {
    documentId: documentId,
    userId: user.id,
    title: doc.title,
    questions: quiz.questions,
  });

  await markDocumentReady(supabase, {
    documentId: documentId,
    userId: user.id,
    lastStudySetId: set.id,
  });

  return json({ studySetId: set.id });
};
