import type { SupabaseClient } from '@supabase/supabase-js';

export async function getUserDocumentOrThrow(
  supabase: SupabaseClient,
  args: { documentId: string; userId: string },
) {
  const { data: doc, error } = await supabase
    .from('documents')
    .select('*')
    .eq('id', args.documentId)
    .eq('user_id', args.userId)
    .single();

  if (error || !doc) {
    throw new Error(error?.message ?? 'Document not found');
  }

  return doc as {
    id: string;
    user_id: string;
    title: string;
    storage_path: string;
  };
}
