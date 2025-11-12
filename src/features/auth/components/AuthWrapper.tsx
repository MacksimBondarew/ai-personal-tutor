import authImage from '@/src/public/monstera-auth.jpg';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import { cn } from '@/src/shared/lib/utils';

export const AuthWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn(className, 'flex')}>
      <div className={'flex h-screen justify-center items-center w-screen'}>
        {children}
      </div>
      <Image
        src={authImage}
        alt={'authImage'}
        width={400}
        height={400}
        className={'hidden xl:block w-full h-screen object-cover'}
        dir='ltr'
      />
    </div>
  );
};
