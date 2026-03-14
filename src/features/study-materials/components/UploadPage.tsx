'use client';

import { UploadCard } from '@/src/features/study-materials/components/upload';
import { DocumentsList } from '@/src/features/study-materials/components/documents/DocumentsList';
import { StudyMaterialsInstructions } from '@/src/features/study-materials/components/StudyMaterialsInstructions';

export default function UploadPage() {
  return (
    <div className='min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-10'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-[320px_minmax(0,1fr)]'>
          <div className='flex md:flex-col gap-6'>
            <StudyMaterialsInstructions />
            <UploadCard />
          </div>
          <DocumentsList />
        </div>
      </div>
    </div>
  );
}
