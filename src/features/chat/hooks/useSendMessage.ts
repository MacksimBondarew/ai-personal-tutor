import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSendMessage = (conversationId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync: sendMessage, isPending: isSendingMessage } = useMutation(
    {
      mutationFn: async (content: string) => {
        const response = await fetch('/api/chat/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ conversationId, content }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? 'Failed to send message');
        }

        return data;
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['conversation-messages', conversationId],
        });
      },
      onError(error: unknown) {
        const message =
          error instanceof Error ? error.message : 'Failed to send message';
        toast.error(message);
      },
    },
  );

  return { sendMessage, isSendingMessage };
};
