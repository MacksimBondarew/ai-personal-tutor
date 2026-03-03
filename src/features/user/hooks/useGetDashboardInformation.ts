import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';

export const useGetDashboardInformation = (userId?: string) => {
  return useQuery({
    queryKey: ['dashboard', userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data: dailyStreaks, error: errorDailyStreaks } = await supabase()
        .from('user_daily_streaks')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();
      const { data: progressSummary, error: errorProgressSummary } =
        await supabase()
          .from('user_progress_summary')
          .select('*')
          .eq('user_id', userId)
          .maybeSingle();
      if (errorDailyStreaks) throw errorDailyStreaks;
      if (errorProgressSummary) throw errorProgressSummary;
      return { progressSummary, dailyStreaks };
    },
    retry: false,
  });
};
