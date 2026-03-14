'use client';

import { Button } from '@/src/shared/components/ui';

type UploadCardHeaderProps = {
  isLoadingUpload: boolean;
  onPickAction: () => void;
};

export function UploadCardHeader({
  isLoadingUpload,
  onPickAction,
}: UploadCardHeaderProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-wrap gap-2 items-center justify-between'>
        <h2 className='text-lg font-medium text-gray-900'>Upload PDF</h2>

        <Button
          type='button'
          onClick={onPickAction}
          isLoading={isLoadingUpload}
          className='max-w-[200px]'
        >
          Choose file
        </Button>
      </div>

      <p className='text-sm text-gray-500'>
        Choose a PDF file from your device to upload. After uploading, the file
        will be processed and prepared for further actions.
      </p>
    </div>
  );
}
