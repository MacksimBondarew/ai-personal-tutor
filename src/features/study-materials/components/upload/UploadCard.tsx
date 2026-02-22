import { useRef } from 'react';
import { UploadCardHeader } from '@/src/features/study-materials/components/upload/UploadCardHeader';
import { UploadCardDescription } from '@/src/features/study-materials/components/upload/UploadCardDescription';
import { UploadCardInput } from '@/src/features/study-materials/components/upload/UploadCardInput';
import { useUpload } from '@/src/features/study-materials/hooks';

export function UploadCard() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { uploadPdf, isLoadingUpload } = useUpload();

  const onPick = () => fileRef.current?.click();
  const onFile = (file: File | null) => {
    if (!file) return;
    if (file.type !== 'application/pdf') return alert('Please upload a PDF');
    uploadPdf(file);
  };

  return (
    <div className='rounded-2xl border border-gray-100 p-6 shadow-sm space-y-3'>
      <UploadCardHeader
        isLoadingUpload={isLoadingUpload}
        onPickAction={onPick}
      />
      <UploadCardDescription />
      <UploadCardInput inputRef={fileRef} onFile={onFile} />
    </div>
  );
}
