import { ConversationRecord } from '@/src/shared/types';

type Params = {
  supabase: Awaited<
    ReturnType<typeof import('@/src/shared/lib/supabase').getSupabase>
  >;
  conversationId: string;
  userId: string;
};

export async function getConversationForUserOrThrow({
  supabase,
  conversationId,
  userId,
}: Params): Promise<ConversationRecord> {
  const { data: conversation, error } = await supabase
    .from('conversations')
    .select('id, user_id, document_id')
    .eq('id', conversationId)
    .single();

  if (error) throw error;

  if (!conversation || conversation.user_id !== userId) {
    throw new Error('Forbidden');
  }

  return conversation;
}
