import { useDocuments } from '@/src/features/study-materials/hooks';
import { DocumentItem } from '@/src/features/study-materials/components/documents/DocumentItem';
import { DocumentsListEmpty } from '@/src/features/study-materials/components/documents';
import { Spinner } from '@/src/shared/components/ui/spinner';

export function DocumentsList() {
  const { data, isLoading } = useDocuments();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center'>
        <Spinner className='w-10 h-10' />
      </div>
    );
  }

  if (!data?.length) {
    return <DocumentsListEmpty />;
  }

  return (
    <div className='md:max-h-[88vh] md:overflow-y-auto md:pr-2'>
      <ul className='flex flex-col gap-3'>
        {data.map((doc) => (
          <DocumentItem key={doc.id} document={doc} />
        ))}
      </ul>
    </div>
  );
}
