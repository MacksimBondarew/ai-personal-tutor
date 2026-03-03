import { AttemptItem } from '@/src/features/user/components/dashboard/AttemptItem';
import { AttemptArray } from '@/src/shared/types/attempt.type';
import { attemptsList } from '@/src/features/user/data';

export function AttemptsList({ attempts }: { attempts: AttemptArray }) {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-medium text-gray-900'>Last attempts</h3>

        <button className='text-sm text-gray-600 hover:text-gray-900 transition'>
          View all
        </button>
      </div>
      <ul className='grid grid-cols-5 text-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm mb-3'>
        {attemptsList.map((attemptItem: string) => (
          <li key={attemptItem}>{attemptItem}</li>
        ))}
      </ul>

      <ul>
        {attempts
          .slice()
          .reverse()
          .map((attempt) => (
            <AttemptItem
              key={attempt.id}
              title={attempt.title}
              score={attempt.score}
              date={attempt.finished_at}
              correct={attempt.correct_count}
              duration={attempt.duration_seconds}
              total={attempt.total_count}
            />
          ))}
      </ul>
    </div>
  );
}
