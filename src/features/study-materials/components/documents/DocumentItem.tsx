'use client';

import { useRouter } from 'next/navigation';
import { useGenerateStudySet } from '@/src/features/study-materials/hooks/useGenerateStudySet';
import { DocumentStatus } from '@/src/features/study-materials/components/documents';
import { Document } from '@/src/shared/types';

export function DocumentItem({ document }: { document: Document }) {
  const router = useRouter();
  const { generateStudySet, isLoadingGenerateStudySet } = useGenerateStudySet();

  const onGenerate = async () => {
    const res = await generateStudySet(document.id);
    router.push(`/quiz/${res.studySetId}`);
  };

  return (
    <li className='flex items-start justify-between gap-4'>
      <div>
        <div className='font-medium text-gray-900'>{document.title}</div>
        <div className='text-xs text-gray-500'>
          {new Date(document.created_at).toLocaleString()}
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <DocumentStatus status={document.status} />

        {document.status === 'uploaded' || document.status === 'failed' ? (
          <button
            className='text-sm px-3 py-1 rounded border hover:bg-gray-50 disabled:opacity-50'
            disabled={isLoadingGenerateStudySet}
            onClick={onGenerate}
          >
            {isLoadingGenerateStudySet ? 'Generating…' : 'Generate quiz'}
          </button>
        ) : (
          <button
            className='text-sm px-3 py-1 rounded border hover:bg-gray-50'
            onClick={() => router.push(`/quiz/${document.last_study_set_id}`)}
          >
            Open quiz
          </button>
        )}
      </div>
    </li>
  );
}
