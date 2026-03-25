import { MessageRole } from '@/src/shared/types';

type Params = {
  supabase: Awaited<
    ReturnType<typeof import('@/src/shared/lib/supabase').getSupabase>
  >;
  conversationId: string;
  userId: string;
  role: MessageRole;
  content: string;
};

export async function createMessageOrThrow({
  supabase,
  conversationId,
  userId,
  role,
  content,
}: Params) {
  const { data, error } = await supabase
    .from('messages')
    .insert({
      conversation_id: conversationId,
      user_id: userId,
      role,
      content,
    })
    .select('*')
    .single();

  if (error) throw error;

  return data;
}
