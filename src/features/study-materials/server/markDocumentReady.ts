import type { SupabaseClient } from '@supabase/supabase-js';

export async function markDocumentReady(
  supabase: SupabaseClient,
  args: { documentId: string; userId: string; lastStudySetId: string },
) {
  const { error } = await supabase
    .from('documents')
    .update({ status: 'ready', last_study_set_id: args.lastStudySetId })
    .eq('id', args.documentId)
    .eq('user_id', args.userId);

  if (error) throw new Error(error.message);
}
