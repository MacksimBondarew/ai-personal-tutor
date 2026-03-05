'use client';

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
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-medium text-gray-900'>Upload PDF</h2>

        <button
          type='button'
          onClick={onPickAction}
          className='px-3 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50'
          disabled={isLoadingUpload}
        >
          {isLoadingUpload ? 'Uploading…' : 'Choose file'}
        </button>
      </div>

      <p className='text-sm text-gray-500'>
        Choose a PDF file from your device to upload. After uploading, the file
        will be processed and prepared for further actions.
      </p>
    </div>
  );
}
