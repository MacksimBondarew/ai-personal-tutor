import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const useAttemptResultMutation = () => {
  const router = useRouter();
  const { mutate: attemptResult, isPending: isLoadingAtemmptResult } =
    useMutation({
      mutationKey: ['register attempt'],
      mutationFn: async ({
        studySetId,
        correct,
        total,
        startedAt,
        finishedAt,
      }: {
        studySetId: string;
        correct: number;
        total: number;
        startedAt: number | null;
        finishedAt: number | null;
      }) => {
        const { data: userData } = await supabase().auth.getUser();
        const user = userData.user;
        if (!user) throw new Error('Not authenticated');
        if (!startedAt || !finishedAt) throw new Error('Not started');
        const duration = Math.floor((finishedAt - startedAt) / 1000);
        console.log(startedAt);
        const { error } = await supabase()
          .from('quiz_attempts')
          .insert({
            study_set_id: studySetId,
            user_id: user.id,
            started_at: new Date(startedAt).toISOString(),
            finished_at: new Date(finishedAt).toISOString(),
            score: (correct / total) * 100,
            correct_count: correct,
            total_count: total,
            duration_seconds: duration,
          });
        console.log(error);
      },
      onSuccess() {
        toast('You have successfully finished quiz!');
        router.push('/home');
      },
      onError(error: any) {
        toast.error(error.message);
      },
    });

  return { attemptResult, isLoadingAtemmptResult };
};
