import authImage from '@/src/public/monstera-auth.jpg';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

export const AuthWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className={'grid grid-cols-2'}>
      <div className={'flex justify-center items-center'}>{children}</div>
      <Image
        src={authImage}
        alt={'authImage'}
        width={400}
        height={400}
        className={'w-full h-screen object-cover rounded-s-4xl'}
        dir='ltr'
      />
    </div>
  );
};
