'use client';

import { FieldGroup } from '@/src/shared/components/ui';
import { CustomInput } from '@/src/shared/components/index';
import React from 'react';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

export const InputsGroup = <TFieldValues extends FieldValues>({
  inputs,
  form,
}: {
  inputs: { name: FieldPath<TFieldValues>; label: string }[];
  form: UseFormReturn<TFieldValues>;
}) => {
  return (
    <FieldGroup className={'mb-10'}>
      {inputs.map(({ name, label }, index) => (
        <CustomInput key={index} form={form} name={name} label={label} />
      ))}
    </FieldGroup>
  );
};
