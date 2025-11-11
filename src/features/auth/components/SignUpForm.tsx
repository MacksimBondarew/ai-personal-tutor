'use client';

import React from 'react';
import { AuthWrapper, FormFooter } from '@/src/features/auth/components';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, TypeSignUpSchema } from '@/src/features/auth/schemes';
import { Input } from '@/src/shared/components/ui/input';
import { toast } from 'sonner';
import {
  Button,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/src/shared/components/ui';

export const SignUpForm = () => {
  const form = useForm<TypeSignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });
  const onSubmit = (data: TypeSignUpSchema) => {
    toast('You have successfully logged in!');
    console.log(data);
  };
  return (
    <AuthWrapper className={'flex-row-reverse'}>
      <div className={'sm:w-[330px]'}>
        <h2 className={'font-medium text-4xl mb-14'}>Get Started Now</h2>
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
                    placeholder={'Please enter a valid name'}
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
                    type={'password'}
                    aria-invalid={fieldState.invalid}
                    placeholder={'Please enter a valid password'}
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
        <FormFooter
          text={'Have an account?'}
          linkText={'Sign In'}
          href={'/sign-in'}
        />
      </div>
    </AuthWrapper>
  );
};
