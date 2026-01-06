import type { User } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';

export const useGetUser = () => {
  return useQuery<User | null>({
    queryKey: ['user'],
    queryFn: async () => {
      const { data, error } = await supabase().auth.getUser();
      if (error) throw error;
      return data.user;
    },
    retry: false,
  });
};
