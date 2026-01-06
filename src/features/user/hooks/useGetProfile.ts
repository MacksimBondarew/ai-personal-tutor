import { supabase } from '@/src/shared/lib/supabase';
import { useQuery } from '@tanstack/react-query';

export const useProfile = (userId?: string) => {
  return useQuery({
    queryKey: ['profile', userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data, error } = await supabase()
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data;
    },
  });
};
