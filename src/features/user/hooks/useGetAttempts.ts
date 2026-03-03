import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';

export const useGetAttempts = (userId?: string) =>
  useQuery({
    queryKey: ['attempts', userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data, error } = await supabase()
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;
      return data ?? [];
    },
  });
