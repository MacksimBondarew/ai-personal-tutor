'use client';

import { useGetDashboardInformation } from '@/src/features/study-materials/hooks';
import { useGetUser } from '@/src/features/user/hooks';
import { useGetAttempts } from '@/src/features/user/hooks/useGetAttempts';
import { StatCard } from '@/src/features/user/components/dashboard';
import { AttemptsList } from '@/src/features/user/components/dashboard/AttemptsList';

export function DashboardPage() {
  const { data: user } = useGetUser();
  const { data: dashboardInformation } = useGetDashboardInformation(user?.id);
  const { data: attempts = [] } = useGetAttempts(user?.id);

  const streak = dashboardInformation?.dailyStreaks;
  const progress = dashboardInformation?.progressSummary;

  return (
    <div className='container mx-auto px-4 py-10'>
      <div className='mb-8 flex items-end justify-between gap-4'>
        <div>
          <h2 className='text-2xl font-semibold text-gray-900'>Progress</h2>
          <p className='text-sm text-gray-500 mt-1'>
            Your learning stats and recent activity
          </p>
        </div>
      </div>
      <div className='grid gap-6 lg:grid-cols-[1fr_280px] items-stretch'>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
          <StatCard
            label='Current streak'
            value={streak?.current_streak ?? 0}
            sub='days in a row'
          />
          <StatCard
            label='Best streak'
            value={streak?.best_streak ?? 0}
            sub='personal record'
          />

          <StatCard
            label='Total sets'
            value={progress?.total_sets ?? 0}
            sub='created by you'
          />
          <StatCard
            label='Average score'
            value={
              progress?.avg_score != null
                ? `${Math.round(Number(progress.avg_score))}%`
                : '0%'
            }
            sub='across all attempts'
          />

          <StatCard
            label='Best score'
            value={
              progress?.best_score != null
                ? `${Math.round(Number(progress.best_score))}%`
                : '—'
            }
            sub='highest result'
          />
          <StatCard
            label='Total attempts'
            value={progress?.total_attempts ?? 0}
            sub='quizzes taken'
          />
        </div>
        <div>
          <StatCard
            className='h-full items-end'
            label='Last activity date'
            value={streak?.last_activity_date ?? 0}
            sub='last day'
          />
        </div>
      </div>
      <AttemptsList attempts={attempts} />
    </div>
  );
}
