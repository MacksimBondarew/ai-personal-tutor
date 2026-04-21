import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/src/shared/components/ui';
import { Sparkles } from 'lucide-react';

export function UserInfo({ user, profile }: any) {
  const initials = profile?.name?.slice(0, 2)?.toUpperCase() || 'U';

  return (
    <div className='flex items-center gap-4 sm:gap-5'>
      <Avatar className='h-16 w-16 sm:h-20 sm:w-20'>
        <AvatarImage src={user?.user_metadata?.avatar?.src} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className='min-w-0'>
        <h1 className='truncate text-2xl font-bold text-slate-900'>
          {profile?.name}
        </h1>

        <div className='mt-1 flex flex-wrap items-center gap-2'>
          <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-sm text-blue-700'>
            <Sparkles className='h-3 w-3' />
            {profile?.level}
          </span>

          <span className='text-sm text-slate-500'>Learning with AI Tutor</span>
        </div>
      </div>
    </div>
  );
}
