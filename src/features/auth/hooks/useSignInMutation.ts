import { useMutation } from '@tanstack/react-query';
import { TypeSignInSchema } from '@/src/features/auth/schemes';
import { supabase } from '@/src/shared/lib/supabase';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const useSignInMutation = () => {
  const router = useRouter();
  const { mutate: signIn, isPending: isLoadingSignIn } = useMutation({
    mutationKey: ['signIn user'],
    mutationFn: async ({ values }: { values: TypeSignInSchema }) => {
      const { data, error } = await supabase().auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;
      return data;
    },
    onSuccess() {
      toast('You have successfully signed in!');
      router.push('/profile');
    },
    onError(error: any) {
      toast.error(error.message);
    },
  });

  return { signIn, isLoadingSignIn };
};
