'use client';

import React from 'react';
import {
  InputsGroup,
  AuthWrapper,
  FormFooter,
} from '@/src/features/auth/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema, TypeSignInSchema } from '@/src/features/auth/schemes';
import { Button } from '@/src/shared/components/ui';
import { useSignInMutation } from '@/src/features/auth/hooks';
import { SignInInputs } from '@/src/features/auth/data';

export const SignInForm = () => {
  const form = useForm<TypeSignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { signIn, isLoadingSignIn } = useSignInMutation();
  const onSubmit = (data: TypeSignInSchema) => {
    signIn({ values: data });
  };
  return (
    <AuthWrapper>
      <div>
        <h2 className={'font-medium text-4xl mb-1.5'}>Welcome back!</h2>
        <p className={'font-medium text-base mb-14'}>
          Enter your Credentials to access your account
        </p>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputsGroup inputs={SignInInputs} form={form} />
          <Button isLoading={isLoadingSignIn} type={'submit'}>
            Submit
          </Button>
        </form>
        <FormFooter
          text={'Don’t have an account?'}
          linkText={'Sign Up'}
          href={'/sign-up'}
        />
      </div>
    </AuthWrapper>
  );
};
