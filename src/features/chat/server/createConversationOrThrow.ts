type Params = {
  supabase: Awaited<
    ReturnType<typeof import('@/src/shared/lib/supabase').getSupabase>
  >;
  documentId: string;
  userId: string;
};

export async function createConversationOrThrow({
  supabase,
  documentId,
  userId,
}: Params) {
  const { data, error } = await supabase
    .from('conversations')
    .insert({
      document_id: documentId,
      user_id: userId,
    })
    .select('id')
    .single();

  if (error) throw error;

  return data;
}
