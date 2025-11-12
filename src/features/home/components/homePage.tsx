'use client';

import Image from 'next/image';
import homeImage from '@/src/public/monstera-home.jpg';
import { Button } from '@/src/shared/components/ui';
import { useRouter } from 'next/navigation';

export const HomePage = () => {
  const router = useRouter();
  return (
    <div className={'grid grid-cols-2 h-screen'}>
      <div className={'flex justify-center items-center'}>
        <div className={'max-w-2/4'}>
          <h1 className={'text-5xl mb-7'}>
            Your Personal <span className={'text-green-600'}>Ai Tutor</span>
          </h1>
          <p className={'text-gray-400 mb-8'}>
            Experience personalized learning powered by advanced AI. Adaptive
            lessons, instant feedback, and 24/7 support tailored to your unique
            learning style.
          </p>
          <Button onClick={() => router.push('/sign-up')}>
            Start Learning
          </Button>
        </div>
      </div>
      <Image className={'h-screen w-full'} src={homeImage} alt={'monstera'} />
    </div>
  );
};
