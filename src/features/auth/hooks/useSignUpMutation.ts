import { useMutation } from '@tanstack/react-query';
import { TypeSignUpSchema } from '@/src/features/auth/schemes';
import { supabase } from '@/src/shared/lib/supabase';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { randomAvatar } from '@/src/shared/data';

export const useSignUpMutation = () => {
  const router = useRouter();
  const { mutate: signUp, isPending: isLoadingSignUp } = useMutation({
    mutationKey: ['signUp user'],
    mutationFn: async ({ values }: { values: TypeSignUpSchema }) => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const { data, error } = await supabase().auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            name: values.name,
            avatar: randomAvatar(),
            timezone: timezone,
          },
        },
      });

      if (error) throw error;

      return data;
    },
    onSuccess() {
      toast('You have successfully signed up!');
      router.push('/profile');
    },
    onError(error: any) {
      toast.error(error.message);
    },
  });

  return { signUp, isLoadingSignUp };
};
