'use client';

import React from 'react';
import { useGetUser } from '@/src/features/user/hooks';

export function ProfilePage() {
  const { data: user } = useGetUser();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timezone);
  console.log(user);
  return (
    <div className='min-h-screen bg-white px-6 py-10'>
      <div className='max-w-4xl mx-auto space-y-10'>
        {/* Header */}
        <div className='flex items-center gap-6'>
          <div className='w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-2xl font-semibold text-green-700'>
            A
          </div>

          <div>
            <h1 className='text-2xl font-semibold text-gray-900'>Alex</h1>
            <p className='text-sm text-gray-500'>
              Beginner · Learning with AI Tutor
            </p>
          </div>
        </div>

        {/* Goal Card */}
        <div className='rounded-2xl border border-gray-100 p-6 shadow-sm'>
          <h2 className='text-lg font-medium text-gray-900 mb-2'>
            Learning Goal
          </h2>
          <p className='text-gray-600'>
            Become confident in programming fundamentals with daily practice.
          </p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          <Stat title='Lessons Completed' value='24' />
          <Stat title='Current Streak' value='6 days' />
          <Stat title='Level' value='Beginner' />
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className='rounded-xl border border-gray-100 p-5 text-center'>
      <p className='text-sm text-gray-500'>{title}</p>
      <p className='text-xl font-semibold text-green-700 mt-1'>{value}</p>
    </div>
  );
}
