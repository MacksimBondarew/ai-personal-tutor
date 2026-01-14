'use client';

import React from 'react';
import { Pencil, Check } from 'lucide-react';
import { EditableProfileField, ProfileFieldUpdate } from '@/src/shared/types';

export function ProfileField({
  title,
  field,
  emptyText,
  value,
  onSubmit,
}: {
  title: string;
  field: EditableProfileField;
  emptyText: string;
  value: string | null;
  onSubmit: (payload: ProfileFieldUpdate) => void;
}) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [text, setText] = React.useState(value ?? '');

  React.useEffect(() => {
    setText(value ?? '');
  }, [value]);

  return (
    <div className='rounded-2xl border border-gray-100 p-6 shadow-sm flex justify-between items-start'>
      <div className='w-full'>
        <h2 className='text-lg font-medium text-gray-900 mb-2'>{title}</h2>

        {!isEditing ? (
          <p className='text-gray-600'>
            {value && value.trim() ? value : emptyText}
          </p>
        ) : (
          <input
            className='w-full border rounded-lg px-3 py-2'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}
      </div>

      {!isEditing ? (
        <button
          type='button'
          className={'cursor-pointer'}
          onClick={() => setIsEditing(true)}
        >
          <Pencil className='w-5 h-5' />
        </button>
      ) : (
        <button
          type='button'
          className={'cursor-pointer'}
          onClick={() => {
            onSubmit({ field, value: text });
            setIsEditing(false);
          }}
        >
          <Check className='w-5 h-5' />
        </button>
      )}
    </div>
  );
}
