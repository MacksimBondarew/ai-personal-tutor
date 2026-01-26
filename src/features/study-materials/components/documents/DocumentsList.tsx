import {
  useDocuments,
  useGenerateStudySet,
} from '@/src/features/study-materials/hooks';
import { DocumentsListEmpty } from '@/src/features/study-materials/components/documents/Subcomponents';
import { DocumentItem } from '@/src/features/study-materials/components/documents/DocumentItem';

export function DocumentsList() {
  const { data, isLoading, error } = useDocuments();
  const { mutate: generate, isPending } = useGenerateStudySet();

  if (isLoading) {
    return <div className='text-sm text-gray-600'>Loading documents…</div>;
  }

  if (error) {
    return <div className='text-sm text-red-600'>Failed to load documents</div>;
  }

  if (!data?.length) {
    return <DocumentsListEmpty />;
  }

  return (
    <div>
      {data.map((doc) => (
        <DocumentItem
          key={doc.id}
          document={doc}
          onGenerate={(id) => generate(id)}
          isGenerating={isPending}
        />
      ))}
    </div>
  );
}
