import { Avatar, AvatarImage, Button } from '@/src/shared/components/ui';
import { LogOutIcon } from 'lucide-react';
import React from 'react';
import { User } from '@supabase/supabase-js';
import { ProfileType } from '@/src/shared/types';

export function ProfileHeader({
  user,
  profile,
}: {
  user: User | null | undefined;
  profile: ProfileType;
}) {
  return (
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
  );
}
