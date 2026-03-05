'use client';

import { UploadCard } from '@/src/features/study-materials/components/upload';
import { DocumentsList } from '@/src/features/study-materials/components/documents/DocumentsList';
import { StudyMaterialsInstructions } from '@/src/features/study-materials/components/StudyMaterialsInstructions';

export default function UploadPage() {
  return (
    <div className='min-h-screen bg-white px-6 py-10'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-6'>
          <StudyMaterialsInstructions />
          <UploadCard />
          <DocumentsList />
        </div>
      </div>
    </div>
  );
}
