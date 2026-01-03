'use client';
import { useEffect } from 'react';
import { useGetUser } from '@/src/features/user/hooks';

const ProfileHeader = () => {
  useEffect(() => {
    const user = useGetUser();
    console.log(user);
  }, []);
  return <div>Profile Header</div>;
};

export { ProfileHeader };
