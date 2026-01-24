'use client';

import React from 'react';

type UploadCardHeaderProps = {
  isPending: boolean;
  onPick: () => void;
};

export function UploadCardHeader({ isPending, onPick }: UploadCardHeaderProps) {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-lg font-medium text-gray-900'>Upload PDF</h2>
      <button
        type='button'
        onClick={onPick}
        className='px-3 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50'
        disabled={isPending}
      >
        {isPending ? 'Uploading…' : 'Choose file'}
      </button>
    </div>
  );
}
