'use client';

import { useGetUser } from '@/src/features/user/hooks';

export const ProfileHeader = () => {
  const { data: user } = useGetUser();
  return <div>{user?.email ?? 'No user'}</div>;
};
