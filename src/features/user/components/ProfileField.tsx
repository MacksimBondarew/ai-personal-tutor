'use client';

import { useState } from 'react';
import { Pencil, Check } from 'lucide-react';
import { EditableProfileField } from '@/src/shared/types';
import { useProfileMutation } from '@/src/features/user/hooks';

export function ProfileField({
  title,
  field,
  value,
}: {
  title: string;
  field: EditableProfileField;
  emptyText: string;
  value: string | null;
}) {
  const { updateProfileField } = useProfileMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value ?? '');

  const handleSave = () => {
    updateProfileField({ field, value: text });
    setIsEditing(false);
  };

  return (
    <div className='rounded-2xl border border-gray-100 p-6 shadow-sm flex justify-between items-start'>
      <div className='w-full'>
        <h2 className='text-lg font-medium text-gray-900 mb-2'>{title}</h2>

        {isEditing ? (
          <input
            className='w-full border rounded-lg px-3 py-2'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <p className='text-gray-600'>{value}</p>
        )}
      </div>

      <button
        type='button'
        className='cursor-pointer'
        onClick={isEditing ? handleSave : () => setIsEditing(true)}
      >
        {isEditing ? (
          <Check className='w-5 h-5' />
        ) : (
          <Pencil className='w-5 h-5' />
        )}
      </button>
    </div>
  );
}
