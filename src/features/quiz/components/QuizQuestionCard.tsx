'use client';

import { Button } from '@/src/shared/components/ui';

export function QuizQuestionCard(props: {
  title: string;
  index: number;
  total: number;
  question: string;
  options: string[];
  picked?: string;
  onPickAction: (opt: string) => void;
  onNextAction: () => void;
  isLast: boolean;
}) {
  const {
    title,
    index,
    total,
    question,
    options,
    picked,
    onPickAction,
    onNextAction,
    isLast,
  } = props;

  return (
    <div className='min-h-screen bg-white px-6 py-10'>
      <div className='max-w-2xl mx-auto space-y-6'>
        <div className='grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2'>
          <h1 className='text-xl font-semibold text-gray-900 truncate'>
            {title}
          </h1>
          <div className='text-sm text-gray-500'>
            {index + 1} / {total}
          </div>
        </div>

        <div className='rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4'>
          <div className='text-gray-900 font-medium'>{question}</div>

          <div className='space-y-2'>
            {options.map((opt) => (
              <button
                key={opt}
                type='button'
                onClick={() => onPickAction(opt)}
                className={[
                  'w-full text-left px-4 py-3 rounded-xl border cursor-pointer hover:scale-101 transition-all',
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
            <Button
              type='button'
              onClick={onNextAction}
              disabled={!picked}
              variant='link'
              className={'hover:bg-black hover:text-white'}
            >
              {isLast ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
