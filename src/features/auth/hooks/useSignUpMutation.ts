import { useMutation } from '@tanstack/react-query';
import { TypeSignUpSchema } from '@/src/features/auth/schemes';
import { supabase } from '@/src/shared/lib/supabase';
import { toast } from 'sonner';

export const useSignUpMutation = () => {
  const { mutate: signUp, isPending: isLoadingSignUp } = useMutation({
    mutationKey: ['signUp user'],
    mutationFn: async ({ values }: { values: TypeSignUpSchema }) => {
      const { data, error } = await supabase().auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            name: values.name,
            avatar: 'first test',
          },
        },
      });

      if (error) throw error;

      return data;
    },
    onSuccess() {
      toast('You have successfully signed up!');
    },
    onError(error: any) {
      toast.error(error.message);
    },
  });

  return { signUp, isLoadingSignUp };
};
