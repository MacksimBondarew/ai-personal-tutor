import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useCreateConversation = () => {
  const router = useRouter();

  const { mutateAsync: createConversation, isPending: isCreatingConversation } =
    useMutation({
      mutationFn: async (documentId: string): Promise<string> => {
        const response = await fetch('/api/chat/conversations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ documentId }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? 'Failed to create conversation');
        }

        return data.conversationId;
      },
      onSuccess(conversationId) {
        router.push(`/chat/${conversationId}`);
      },
      onError(error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : 'Failed to create conversation';
        toast.error(message);
      },
    });

  return { createConversation, isCreatingConversation };
};
