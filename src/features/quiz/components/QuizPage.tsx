'use client';

import { useParams } from 'next/navigation';
import { useStudySet } from '@/src/features/study-materials/hooks/useStudySet';
import { QuizResult } from './QuizResult';
import { QuizQuestionCard } from './QuizQuestionCard';
import { useQuiz } from '@/src/features/quiz/hooks/useQuiz';
import { useAttemptResultMutation } from '@/src/features/quiz/hooks/useAttemptResult';

export default function QuizPage() {
  const { studySetId } = useParams<{ studySetId: string }>();
  const { data } = useStudySet(studySetId);

  const quiz = useQuiz(data?.items);
  const { attemptResult } = useAttemptResultMutation();

  if (!data) return null;

  const { set, items } = data;

  if (quiz.finished) {
    return (
      <QuizResult
        title={set.title}
        score={quiz.score}
        total={items.length}
        onBackAction={() =>
          attemptResult({
            studySetId,
            correct: quiz.score,
            total: items.length,
            startedAt: quiz.startedAt,
            finishedAt: quiz.finishedAt,
          })
        }
      />
    );
  }

  const item = items[quiz.index];
  const picked = quiz.answers[item.id];

  return (
    <QuizQuestionCard
      title={set.title}
      index={quiz.index}
      total={items.length}
      question={item.question}
      options={item.options}
      picked={picked}
      onPickAction={(opt) => quiz.select(item.id, opt)}
      onNextAction={quiz.next}
      isLast={quiz.index === items.length - 1}
    />
  );
}
