import { DocumentStatus } from '@/src/features/study-materials/components/documents/Subcomponents';

type DocumentItemProps = {
  document: {
    id: string;
    title: string;
    created_at: string;
    status: string;
  };
};

export function DocumentItem({ document }: DocumentItemProps) {
  return (
    <div className='flex items-start justify-between gap-4'>
      <div>
        <div className='font-medium text-gray-900'>{document.title}</div>
        <div className='text-xs text-gray-500'>
          {new Date(document.created_at).toLocaleString()}
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <DocumentStatus status={document.status} />
      </div>
    </div>
  );
}
