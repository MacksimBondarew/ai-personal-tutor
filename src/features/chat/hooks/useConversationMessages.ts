import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';
import { Message } from '@/src/shared/types';

export const useConversationMessages = (conversationId: string) => {
  return useQuery({
    queryKey: ['conversation-messages', conversationId],
    queryFn: async (): Promise<Message[]> => {
      const { data, error } = await supabase()
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      return data ?? [];
    },
    enabled: Boolean(conversationId),
  });
};
