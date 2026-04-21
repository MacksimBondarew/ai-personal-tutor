import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const useLogoutMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoadingLogout } = useMutation({
    mutationKey: ['logout user'],
    mutationFn: async () => {
      const { error } = await supabase().auth.signOut();

      if (error) throw error;
    },

    onSuccess: () => {
      queryClient.clear();

      toast('You have been logged out');
      router.push('/sign-in');
    },

    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  return { logout, isLoadingLogout };
};
