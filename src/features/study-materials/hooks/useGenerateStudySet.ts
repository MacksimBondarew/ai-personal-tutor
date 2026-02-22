import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useGenerateStudySet = () => {
  const qc = useQueryClient();

  const {
    isPending: isLoadingGenerateStudySet,
    mutateAsync: generateStudySet,
  } = useMutation({
    mutationFn: async (documentId: string) => {
      const res = await fetch('/api/study-materials/generate-study-set', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(documentId),
      });

      if (!res.ok) throw new Error('Generation failed');
      return res.json();
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['documents'] });
    },
    onError(error: any) {
      toast.error(error.message);
    },
  });
  return { isLoadingGenerateStudySet, generateStudySet };
};
