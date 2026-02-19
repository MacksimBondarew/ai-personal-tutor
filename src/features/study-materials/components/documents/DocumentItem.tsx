'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useGenerateStudySet } from '@/src/features/study-materials/hooks/useGenerateStudySet';
import { DocumentStatus } from '@/src/features/study-materials/components/documents/Subcomponents';

type Document = {
  id: string;
  title: string;
  created_at: string;
  status: 'uploaded' | 'processing' | 'ready' | 'failed';
  last_study_set_id?: string | null;
};

type Props = { document: Document };

export function DocumentItem({ document }: Props) {
  const router = useRouter();
  const { mutateAsync, isPending } = useGenerateStudySet();

  const canGenerate =
    document.status === 'uploaded' || document.status === 'failed';
  const isProcessing = document.status === 'processing';

  const onGenerate = async () => {
    const res = await mutateAsync(document.id);
    router.push(`/quiz/${res.studySetId}`);
  };

  const onOpenQuiz = () => {
    router.push(`/quiz/${document.last_study_set_id}`);
  };

  return (
    <div className='flex items-start justify-between gap-4'>
      <div>
        <div className='font-medium text-gray-900'>{document.title}</div>
        <div className='text-xs text-gray-500'>
          {new Date(document.created_at).toLocaleString()}
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <DocumentStatus status={document.status} />

        {canGenerate ? (
          <button
            className='text-sm px-3 py-1 rounded border hover:bg-gray-50 disabled:opacity-50'
            disabled={isPending}
            onClick={onGenerate}
          >
            {isPending ? 'Generating…' : 'Generate quiz'}
          </button>
        ) : null}

        {isProcessing ? (
          <button
            className='text-sm px-3 py-1 rounded border opacity-60 cursor-not-allowed'
            disabled
          >
            Generating…
          </button>
        ) : null}

        {document.status === 'ready' ? (
          <button
            className='text-sm px-3 py-1 rounded border hover:bg-gray-50'
            onClick={onOpenQuiz}
          >
            Open quiz
          </button>
        ) : null}
      </div>
    </div>
  );
}
