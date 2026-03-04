'use client';

import { useGetDashboardInformation } from '@/src/features/study-materials/hooks';
import { useGetUser, useGetAttempts } from '@/src/features/user/hooks';
import {
  HeaderDashboard,
  StatCard,
  AttemptsList,
} from '@/src/features/user/components/dashboard';
import { statsList } from '@/src/features/user/data';

export function DashboardPage() {
  const { data: user } = useGetUser();
  const { data: dashboardInformation } = useGetDashboardInformation(user?.id);
  const { data: attempts = [] } = useGetAttempts(user?.id);

  const streak = dashboardInformation?.dailyStreaks;
  const progress = dashboardInformation?.progressSummary;

  return (
    <div className='container mx-auto px-4 py-10'>
      <HeaderDashboard />
      <div className='grid gap-6 lg:grid-cols-[1fr_280px] items-stretch'>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
          {statsList({ streak, progress }).map((item) => (
            <StatCard key={item.label} label={item.label} value={item.value} />
          ))}
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
