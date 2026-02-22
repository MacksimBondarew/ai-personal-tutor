import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';
import { Document } from '@/src/shared/types';

export const useDocuments = () => {
  return useQuery({
    queryKey: ['documents'],
    queryFn: async (): Promise<Document[]> => {
      const { data, error } = await supabase()
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });
};
