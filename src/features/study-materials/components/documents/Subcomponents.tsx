export function DocumentsListHeader() {
  return (
    <h2 className='text-lg font-medium text-gray-900 mb-4'>My documents</h2>
  );
}

export function DocumentsListEmpty() {
  return (
    <div className='text-sm text-gray-600'>
      No documents yet. Upload your first PDF.
    </div>
  );
}

type DocumentStatusProps = {
  status: string;
};

export function DocumentStatus({ status }: DocumentStatusProps) {
  return (
    <span className='text-xs px-2 py-1 rounded-full border text-gray-600'>
      {status}
    </span>
  );
}
