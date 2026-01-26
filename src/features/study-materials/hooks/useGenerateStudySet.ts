import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useGenerateStudySet = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (materialId: string) => {
      const res = await fetch('/api/study-materials/generate-study-set', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ materialId }),
      });

      if (!res.ok) throw new Error('Generation failed');
      return res.json();
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['documents'] });
    },
  });
};
