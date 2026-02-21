'use client';

import React from 'react';
import { ProfileHeader, ProfileField } from '@/src/features/user/components';
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
    <div className='min-h-screen bg-white px-6 py-10'>
      <div className='max-w-4xl mx-auto space-y-7'>
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
