'use client';

export function QuizResult(props: {
  title: string;
  score: number;
  total: number;
  onBackAction: () => void;
}) {
  const { title, score, total, onBackAction } = props;

  return (
    <div className='min-h-screen bg-white px-6 py-10'>
      <div className='max-w-2xl mx-auto space-y-4'>
        <h1 className='text-2xl font-semibold text-gray-900'>{title}</h1>

        <div className='rounded-2xl border border-gray-100 p-6 shadow-sm'>
          <div className='text-lg font-medium text-gray-900'>Result</div>
          <div className='mt-2 text-gray-700'>
            Score: <span className='font-semibold'>{score}</span> / {total}
          </div>
        </div>

        <button
          className='px-4 py-2 rounded-lg border hover:bg-gray-50'
          onClick={onBackAction}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
