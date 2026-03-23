'use client';

import { useState } from 'react';
import { EditableProfileField } from '@/src/shared/types';
import { useProfileMutation } from '@/src/features/user/hooks';
import { FieldDisplay } from './FieldDisplay';
import { FieldEditor } from './FieldEditor';

export function ProfileField({
  title,
  field,
  value,
  emptyText,
}: {
  title: string;
  field: EditableProfileField;
  value: string | null;
  emptyText: string;
}) {
  const { updateProfileField } = useProfileMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value ?? '');

  const handleSave = () => {
    updateProfileField({ field, value: text });
    setIsEditing(false);
  };

  return (
    <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6'>
      <h2 className='mb-3 text-xl font-semibold text-slate-900'>{title}</h2>

      {isEditing ? (
        <FieldEditor
          text={text}
          setText={setText}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <FieldDisplay
          value={value}
          emptyText={emptyText}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  );
}
