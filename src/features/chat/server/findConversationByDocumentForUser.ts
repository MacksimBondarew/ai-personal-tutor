type Params = {
  supabase: Awaited<
    ReturnType<typeof import('@/src/shared/lib/supabase').getSupabase>
  >;
  documentId: string;
  userId: string;
};

export async function findConversationByDocumentForUser({
  supabase,
  documentId,
  userId,
}: Params) {
  const { data, error } = await supabase
    .from('conversations')
    .select('id')
    .eq('document_id', documentId)
    .eq('user_id', userId)
    .maybeSingle();

  if (error) throw error;

  return data;
}
