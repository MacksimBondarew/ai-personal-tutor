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
    <li className='w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 sm:px-5'>
      <div className='grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4'>
        <div className='min-w-0 overflow-hidden'>
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

        <div className='flex items-center justify-end gap-3'>
          <div className='flex justify-center sm:w-[80px]'>
            <DocumentStatus status={document.status} />
          </div>

          {isGenerateAction ? (
            <Button
              className='justify-center sm:w-[124px]'
              variant='link'
              disabled={isLoadingGenerateStudySet}
              onClick={async () => await generateStudySet(document.id)}
            >
              {isLoadingGenerateStudySet ? 'Generating…' : 'Generate quiz'}
            </Button>
          ) : (
            <Button
              className='justify-center gap-1 group sm:w-[124px]'
              variant='link'
              onClick={() => router.push(`/quiz/${document.last_study_set_id}`)}
            >
              Open quiz
              <span className='transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-130'>
                →
              </span>
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
