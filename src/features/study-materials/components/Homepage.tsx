'use client';

import React from 'react';
import { UploadCard } from '@/src/features/study-materials/components/upload';
import { DocumentsList } from '@/src/features/study-materials/components/documents/DocumentsList';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white px-6 py-10'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-6'>
          <UploadCard />
          <DocumentsList />
        </div>

        <div className='rounded-2xl border border-gray-100 p-6 shadow-sm'>
          <h2 className='text-lg font-medium text-gray-900 mb-2'>Progress</h2>
          <p className='text-sm text-gray-600'>
            Next step: connect your dashboard widgets here (streak, avg score,
            last attempts).
          </p>
        </div>
      </div>
    </div>
  );
}
