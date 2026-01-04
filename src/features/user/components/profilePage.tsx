'use client';
import ProfileImage from '@/src/public/monstera-profile.png';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useGetUser } from '@/src/features/user/hooks';
import { Button, Card, CardContent } from '@/src/shared/components/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputsGroup } from '@/src/shared/components/InputsGroup';
import React, { useEffect } from 'react';
import { ProfileInputs } from '@/src/features/user/data';
import { ProfileSchema, TypeProfileSchema } from '@/src/features/user/schemes';

export function ProfilePage() {
  const { data: user, isLoading: isLoadingGetUser } = useGetUser();
  const form = useForm<TypeProfileSchema>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  });

  useEffect(() => {
    if (!user) return;
    form.reset({
      email: user.email ?? '',
      name: user.user_metadata?.name ?? '',
    });
  }, [user, form]);
  return (
    <div
      className={
        'relative min-h-screen flex items-center justify-center overflow-hidden'
      }
    >
      <img
        src={ProfileImage.src}
        alt='background'
        className='absolute inset-0 h-full w-full object-cover -z-10'
      />
      <div className='absolute inset-0 bg-black/35 backdrop-blur-[2px]' />
      <Card
        className={
          'bg-white relative flex flex-wrap items-center w-1/5 max-w-md rounded-3xl pt-8 pb-3 px-2 gap-0'
        }
      >
        <Avatar className={'flex w-1/4 justify-center mb-4'}>
          <AvatarImage
            className={'rounded-full'}
            src={user?.user_metadata.avatar?.src}
          />
        </Avatar>
        <CardContent className={'w-full'}>
          <form>
            <InputsGroup inputs={ProfileInputs} form={form} />
            <div className={'flex flex-wrap gap-2'}>
              <Button isLoading={isLoadingGetUser} type={'submit'}>
                Submit
              </Button>
              <Button
                className={'bg-red-800 hover:bg-red-500'}
                isLoading={isLoadingGetUser}
              >
                Logout
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
