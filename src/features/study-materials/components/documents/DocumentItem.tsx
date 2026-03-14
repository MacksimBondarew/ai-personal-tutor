'use client';

import { useRouter } from 'next/navigation';
import { useGenerateStudySet } from '@/src/features/study-materials/hooks/useGenerateStudySet';
import { DocumentStatus } from '@/src/features/study-materials/components/documents';
import { Document } from '@/src/shared/types';
import { Button } from '@/src/shared/components/ui';

export function DocumentItem({ document }: { document: Document }) {
  const router = useRouter();
  const { generateStudySet, isLoadingGenerateStudySet } = useGenerateStudySet();

  const isGenerateAction =
    document.status === 'uploaded' || document.status === 'failed';

  return (
    <li className='rounded-2xl w-full border border-gray-200 bg-white px-4 py-4 sm:px-5'>
      <div className='flex items-center justify-between gap-4'>
        <div className='min-w-0 flex-1'>
          <div className='truncate text-base font-semibold text-slate-900'>
            {document.title}
          </div>
          <div className='mt-1 text-xs text-slate-500'>
            {new Date(document.created_at).toLocaleString([], {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>

        <div className='flex shrink-0 items-center justify-end gap-3'>
          <div className='w-[80px] flex justify-center'>
            <DocumentStatus status={document.status} />
          </div>

          {isGenerateAction ? (
            <Button
              className='w-[124px] justify-center'
              disabled={isLoadingGenerateStudySet}
              onClick={async () => await generateStudySet(document.id)}
            >
              {isLoadingGenerateStudySet ? 'Generating…' : 'Generate quiz'}
            </Button>
          ) : (
            <Button
              className='w-[124px] justify-center'
              onClick={() => router.push(`/quiz/${document.last_study_set_id}`)}
            >
              Open quiz
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
