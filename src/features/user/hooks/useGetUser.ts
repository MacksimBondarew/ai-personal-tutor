import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';
import { toast } from 'sonner';

export const useGetUser = () => {
  const { mutate: getUser, isPending: isLoadingGetUser } = useMutation({
    mutationKey: ['getUser'],
    mutationFn: async () => {
      const { data: user, error } = await supabase().auth.getUser();
      if (error) throw error;
      return user;
    },
    onError(error: any) {
      toast.error(error.message);
    },
  });

  return { getUser, isLoadingGetUser };
};
