import { UploadCardHeader } from '@/src/features/study-materials/components/upload/UploadCardHeader';
import { UploadCardDescription } from '@/src/features/study-materials/components/upload/UploadCardDescription';
import { UploadCardInput } from '@/src/features/study-materials/components/upload/UploadCardInput';
import { useUploadPdf } from '@/src/features/study-materials/hooks';
import React from 'react';

export function UploadCard() {
  const fileRef = React.useRef<HTMLInputElement | null>(null);
  const { mutate: uploadPdf, isPending } = useUploadPdf();

  const onPick = () => fileRef.current?.click();

  const onFile = (file: File | null) => {
    if (!file) return;
    if (file.type !== 'application/pdf') return alert('Please upload a PDF');
    uploadPdf({ file });
  };

  return (
    <div className='rounded-2xl border border-gray-100 p-6 shadow-sm space-y-3'>
      <UploadCardHeader isPending={isPending} onPick={onPick} />
      <UploadCardDescription />
      <UploadCardInput inputRef={fileRef} onFile={onFile} />
    </div>
  );
}
