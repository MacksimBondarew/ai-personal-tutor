import { useDocuments } from '@/src/features/study-materials/hooks';
import { DocumentItem } from '@/src/features/study-materials/components/documents/DocumentItem';
import { DocumentsListEmpty } from '@/src/features/study-materials/components/documents';

export function DocumentsList() {
  const { data, isLoading } = useDocuments();

  return isLoading ? (
    <div className='text-sm text-gray-600'>Loading documents…</div>
  ) : !data?.length ? (
    <DocumentsListEmpty />
  ) : (
    <ul>
      {data.map((doc) => (
        <DocumentItem key={doc.id} document={doc} />
      ))}
    </ul>
  );
}
