'use client';

import React from 'react';
import { Spinner } from '@/src/shared/components/ui/spinner';
import { ProfileHeader } from '@/src/features/user/components/profileHeader';
import { ProfileField } from '@/src/features/user/components/ProfileField';
import { useGetUser, useProfile } from '@/src/features/user/hooks';
import { useProfileMutation } from '@/src/features/user/hooks/useProfileMutation';

import type {
  EditableProfileField,
  ProfileFieldUpdate,
  ProfileType,
} from '@/src/shared/types';
import { profileFields } from '@/src/features/user/data';

export function ProfilePage() {
  const { data: user, isLoading: isLoadingUser } = useGetUser();
  const { data: profile, isLoading: isLoadingProfile } = useProfile(user?.id);

  const { updateProfileField } = useProfileMutation();

  const onSubmit = React.useCallback(
    ({ field, value }: ProfileFieldUpdate) => {
      updateProfileField({ field, value });
    },
    [updateProfileField],
  );

  if (isLoadingUser || isLoadingProfile) {
    return (
      <Spinner className='w-14 h-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
    );
  }

  const getFieldValue = (p: ProfileType, field: EditableProfileField) => {
    const v = p[field];
    return typeof v === 'string' ? v : (v ?? null);
  };

  return (
    <div className='min-h-screen bg-white px-6 py-10'>
      <div className='max-w-4xl mx-auto space-y-7'>
        <ProfileHeader user={user} profile={profile} />

        {/* ✅ Поля профілю */}
        <div className='space-y-4'>
          {profileFields.map((block) => (
            <ProfileField
              key={block.field}
              title={block.title}
              field={block.field}
              emptyText={block.emptyText}
              value={getFieldValue(profile, block.field)}
              onSubmit={onSubmit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
