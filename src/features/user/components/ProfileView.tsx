'use client';

import { ProfileHeader } from '@/src/features/user/components/profileHeader/ProfileHeader';
import { ProfileField } from '@/src/features/user/components/profileField/ProfileField';
import { profileFields } from '@/src/features/user/data';
import { getProfileFieldValue } from '@/src/shared/lib';
import type { ProfileType } from '@/src/shared/types';

export function ProfileView({
  user,
  profile,
}: {
  user: any;
  profile: ProfileType;
}) {
  return (
    <div className='min-h-screen bg-slate-50 px-4 py-6 sm:px-6 sm:py-8'>
      <div className='mx-auto max-w-4xl space-y-5'>
        <ProfileHeader user={user} profile={profile} />

        <div className='space-y-4'>
          {profileFields.map((block) => (
            <ProfileField
              key={block.field}
              title={block.title}
              field={block.field}
              emptyText={block.emptyText}
              value={getProfileFieldValue(profile, block.field)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
