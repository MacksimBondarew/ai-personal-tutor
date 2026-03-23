'use client';

import { ResultStats } from './ResultStats';
import { ProgressBar } from './ProgressBar';
import { ResultMessage } from './ResultMessage';
import { ResultActions } from './ResultActions';
import { ResultHeader } from '@/src/features/quiz/components/ResultHandler';

type Props = {
  title: string;
  score: number;
  total: number;
  onBackAction: () => void;
};

export function QuizResult({ title, score, total, onBackAction }: Props) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-10'>
      <div className='mx-auto max-w-2xl'>
        <div className='rounded-3xl border bg-white p-6 shadow-sm'>
          <ResultHeader title={title} />
          <ResultStats score={score} total={total} percentage={percentage} />
          <ProgressBar percentage={percentage} />
          <ResultMessage percentage={percentage} />
          <ResultActions onBackAction={onBackAction} />
        </div>
      </div>
    </div>
  );
}
