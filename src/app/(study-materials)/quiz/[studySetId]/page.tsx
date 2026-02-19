'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useStudySet } from '@/src/features/study-materials/hooks/useStudySet';

export default function QuizPage() {
  const { studySetId } = useParams<{ studySetId: string }>();
  const router = useRouter();
  const { data, isLoading, error } = useStudySet(studySetId);

  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [finished, setFinished] = React.useState(false);

  if (isLoading)
    return <div className='p-6 text-sm text-gray-600'>Loading quiz…</div>;
  if (error)
    return (
      <div className='p-6 text-sm text-red-600'>{(error as any).message}</div>
    );
  if (!data) return null;

  const { set, items } = data;
  const item = items[index];

  const select = (itemId: string, option: string) =>
    setAnswers((p) => ({ ...p, [itemId]: option }));

  const next = () => {
    if (index < items.length - 1) setIndex((i) => i + 1);
    else setFinished(true);
  };

  const score = items.reduce((acc, it) => {
    const picked = answers[it.id];
    return acc + (picked === it.correct_answer ? 1 : 0);
  }, 0);

  if (finished) {
    return (
      <div className='min-h-screen bg-white px-6 py-10'>
        <div className='max-w-2xl mx-auto space-y-4'>
          <h1 className='text-2xl font-semibold text-gray-900'>{set.title}</h1>
          <div className='rounded-2xl border border-gray-100 p-6 shadow-sm'>
            <div className='text-lg font-medium text-gray-900'>Result</div>
            <div className='mt-2 text-gray-700'>
              Score: <span className='font-semibold'>{score}</span> /{' '}
              {items.length}
            </div>
          </div>

          <button
            className='px-4 py-2 rounded-lg border hover:bg-gray-50'
            onClick={() => router.push('/home')}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const picked = answers[item.id];

  return (
    <div className='min-h-screen bg-white px-6 py-10'>
      <div className='max-w-2xl mx-auto space-y-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold text-gray-900'>{set.title}</h1>
          <div className='text-sm text-gray-500'>
            {index + 1} / {items.length}
          </div>
        </div>

        <div className='rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4'>
          <div className='text-gray-900 font-medium'>{item.question}</div>

          <div className='space-y-2'>
            {item.options.map((opt) => (
              <button
                key={opt}
                type='button'
                onClick={() => select(item.id, opt)}
                className={[
                  'w-full text-left px-4 py-3 rounded-xl border',
                  picked === opt
                    ? 'border-gray-900'
                    : 'border-gray-200 hover:bg-gray-50',
                ].join(' ')}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className='flex justify-end'>
            <button
              type='button'
              onClick={next}
              disabled={!picked}
              className='px-4 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50'
            >
              {index === items.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
