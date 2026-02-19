import { useQuery } from '@tanstack/react-query';

export const useStudySet = (id: string) =>
  useQuery({
    queryKey: ['study-set', id],
    queryFn: async () => {
      const res = await fetch(`/api/study-sets/${id}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? 'Failed to load study set');
      return json as {
        set: { id: string; title: string; type: string; created_at: string };
        items: Array<{
          id: string;
          question: string;
          options: string[];
          correct_answer: string;
          explanation: string | null;
        }>;
      };
    },
    enabled: !!id,
  });
