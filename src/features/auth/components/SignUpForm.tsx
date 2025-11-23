'use client';

import React from 'react';
import {
  AuthGroup,
  AuthWrapper,
  FormFooter,
} from '@/src/features/auth/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, TypeSignUpSchema } from '@/src/features/auth/schemes';
import { Button } from '@/src/shared/components/ui';
import { useSignUpMutation } from '@/src/features/auth/hooks';
import { SignUpInputs } from '@/src/features/auth/data';

export const SignUpForm = () => {
  const form = useForm<TypeSignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });
  const { signUp, isLoadingSignUp } = useSignUpMutation();
  const onSubmit = async (data: TypeSignUpSchema) => {
    signUp({ values: data });
  };
  return (
    <AuthWrapper className={'flex-row-reverse'}>
      <div className={'sm:w-[330px]'}>
        <h2 className={'font-medium text-4xl mb-14'}>Get Started Now</h2>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AuthGroup inputs={SignUpInputs} form={form} />
          <Button isLoading={isLoadingSignUp} type={'submit'}>
            Submit
          </Button>
        </form>
        <FormFooter
          text={'Have an account?'}
          linkText={'Sign In'}
          href={'/sign-in'}
        />
      </div>
    </AuthWrapper>
  );
};
