import { DocumentStatus } from '@/src/features/study-materials/components/documents/Subcomponents';

type DocumentItemProps = {
  document: {
    id: string;
    title: string;
    created_at: string;
    status: string;
  };
  onGenerate: (documentId: string) => void;
  isGenerating?: boolean;
};

export function DocumentItem({
  document,
  onGenerate,
  isGenerating,
}: DocumentItemProps) {
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
        <button
          type='button'
          className='text-sm px-3 py-1 rounded border hover:bg-gray-50 disabled:opacity-50'
          onClick={() => onGenerate(document.id)}
          disabled={isGenerating || document.status === 'processing'}
        >
          {isGenerating ? 'Generating…' : 'Generate quiz'}
        </button>
      </div>
    </div>
  );
}
