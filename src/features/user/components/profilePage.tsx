'use client';

import React from 'react';
import { Avatar, AvatarImage, Button } from '@/src/shared/components/ui';
import { useGetUser, useProfile } from '@/src/features/user/hooks';
import { LogOutIcon } from 'lucide-react';

export function ProfilePage() {
  const { data: user } = useGetUser();
  const { data: profile } = useProfile(user?.id);
  console.log(profile);
  return (
    <div className='min-h-screen bg-white px-6 py-10'>
      <div className='max-w-4xl mx-auto space-y-7'>
        {/* Header */}
        <div className={'flex justify-between items-center'}>
          <div className='flex items-center gap-6'>
            <Avatar className={'h-16 w-16'}>
              <AvatarImage src={user?.user_metadata?.avatar?.src} />
            </Avatar>

            <div>
              <h1 className='text-2xl font-semibold text-gray-900'>
                {profile?.name}
              </h1>
              <p className='text-sm text-gray-500'>
                {profile?.level} · Learning with AI Tutor
              </p>
            </div>
          </div>
          <Button
            variant='outline'
            className='inline-flex items-center space-x-2 hover:bg-red-600 hover:text-white'
          >
            <LogOutIcon className='h-4 w-4' />
            <span>Logout</span>
          </Button>
        </div>
        <div className='rounded-2xl border border-gray-100 p-6 shadow-sm'>
          <h2 className='text-lg font-medium text-gray-900 mb-2'>My bio</h2>
          <p className='text-gray-600'>
            {!profile?.bio ? 'Please enter your bio' : profile?.bio}
          </p>
        </div>
        <div className='rounded-2xl border border-gray-100 p-6 shadow-sm'>
          <h2 className='text-lg font-medium text-gray-900 mb-2'>
            Learning Goal
          </h2>
          <p className='text-gray-600'>
            {!profile?.goal ? 'Please enter your goal' : profile?.goal}
          </p>
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
