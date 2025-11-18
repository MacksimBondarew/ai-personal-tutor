import {
  Field,
  FieldError,
  FieldLabel,
  Input,
} from '@/src/shared/components/ui';
import {
  Controller,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import React from 'react';

export const CustomInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  form,
  name,
  label,
}: {
  form: UseFormReturn<TFieldValues>;
  name: TName;
  label: string;
}) => {
  return (
    <Controller<TFieldValues, TName>
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>
          <Input
            type={name}
            {...field}
            aria-invalid={fieldState.invalid}
            placeholder={`Please enter a valid ${name}`}
            autoComplete={'off'}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
