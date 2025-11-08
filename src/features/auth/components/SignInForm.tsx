'use client';

import React from 'react';
import { AuthWrapper } from '@/src/features/auth/components';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema, TypeSignInSchema } from '@/src/features/auth/schemes';
import { Input } from '@/src/shared/components/ui/input';
import { toast } from 'sonner';
import {
  Button,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/src/shared/components/ui';

export const SignInForm = () => {
  const form = useForm<TypeSignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });
  const onSubmit = (data: TypeSignInSchema) => {
    toast('You have successfully logged in!');
    console.log(data);
  };
  return (
    <AuthWrapper>
      <div>
        <h2 className={'font-medium text-3xl mb-1.5'}>Welcome back!</h2>
        <p className={'font-medium text-sm mb-14'}>
          Enter your Credentials to access your account
        </p>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className={'mb-10'}>
            <Controller
              name={'email'}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    type={'email'}
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder={'Please enter a valid email'}
                    autoComplete={'off'}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name={'name'}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Name</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder={'Please enter a valid email'}
                    autoComplete={'off'}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name={'password'}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder={'Please enter a valid email'}
                    autoComplete={'off'}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <Button type={'submit'}>Submit</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};
