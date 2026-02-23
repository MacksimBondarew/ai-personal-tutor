'use client';

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
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold text-gray-900'>{title}</h1>
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
              onClick={onNextAction}
              disabled={!picked}
              className='px-4 py-2 rounded-lg border hover:bg-gray-50 disabled:opacity-50'
            >
              {isLast ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
