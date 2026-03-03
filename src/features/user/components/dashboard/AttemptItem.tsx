import { AttemptProps } from '@/src/shared/types/attempt.type';

function AttemptItem({
  title,
  score,
  date,
  correct,
  total,
  duration,
}: AttemptProps) {
  return (
    <li className='rounded-2xl border border-gray-200 bg-white p-4 shadow-sm mb-3'>
      <div className='grid items-center grid-cols-5 gap-2 text-center'>
        <div className='text-left'>
          <p className='text-sm font-medium text-gray-900 truncate'>{title}</p>
          <p className='text-xs text-gray-500 mt-1'>
            {new Date(date).toISOString().split('T')[0]}
          </p>
        </div>
        <span className='text-sm font-semibold text-gray-900'>{score}</span>
        <span className='text-sm font-semibold text-gray-900'>{correct}</span>
        <span className='text-sm font-semibold text-gray-900'>{total}</span>
        <span className='text-sm font-semibold text-gray-900'>{duration}</span>
      </div>
    </li>
  );
}

export { AttemptItem };
