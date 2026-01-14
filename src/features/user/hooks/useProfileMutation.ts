// hooks/useProfileMutation.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';
import { toast } from 'sonner';
import { ProfileFieldUpdate } from '@/src/shared/types';

export const useProfileMutation = () => {
  const qc = useQueryClient();

  const { mutate: updateProfileField, isPending } = useMutation({
    mutationKey: ['update-profile-field'],
    mutationFn: async ({ field, value }: ProfileFieldUpdate) => {
      const { data: userData, error: userError } =
        await supabase().auth.getUser();
      const user = userData.user;
      if (userError || !user) throw new Error('User not authenticated');

      const normalized =
        (field === 'bio' || field === 'study_goal') && value.trim() === ''
          ? null
          : value.trim();

      const patch: Record<string, string | null> = {
        [field]: normalized,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase()
        .from('profiles')
        .update(patch)
        .eq('id', user.id);

      if (error) throw error;

      return { field, value: normalized };
    },
    onSuccess: async () => {
      toast.success('Saved');
      await qc.invalidateQueries({ queryKey: ['profile'] });
    },
    onError: (e: any) => toast.error(e?.message ?? 'Update failed'),
  });

  return { updateProfileField, isLoadingUpdateProfile: isPending };
};
