'use client';

import React from 'react';
import { Spinner } from '@/src/shared/components/ui/spinner';
import { ProfileView } from '@/src/features/user/components';
import { useGetUser, useProfile } from '@/src/features/user/hooks';

export function ProfilePage() {
  const { data: user, isLoading: isLoadingUser } = useGetUser();
  const { data: profile, isLoading: isLoadingProfile } = useProfile(user?.id);
  return isLoadingProfile || isLoadingUser ? (
    <Spinner className='w-14 h-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
  ) : (
    <ProfileView user={user} profile={profile} />
  );
}
