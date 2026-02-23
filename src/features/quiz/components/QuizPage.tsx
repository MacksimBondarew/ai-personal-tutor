'use client';

import { useParams, useRouter } from 'next/navigation';
import { useStudySet } from '@/src/features/study-materials/hooks/useStudySet';
import { QuizResult } from './QuizResult';
import { QuizQuestionCard } from './QuizQuestionCard';
import { useQuiz } from '@/src/features/quiz/hooks/useQuiz';

export default function QuizPage() {
  const { studySetId } = useParams<{ studySetId: string }>();
  const router = useRouter();
  const { data } = useStudySet(studySetId);

  const quiz = useQuiz(data?.items);

  if (!data) return null;

  const { set, items } = data;

  if (quiz.finished) {
    return (
      <QuizResult
        title={set.title}
        score={quiz.score}
        total={items.length}
        onBackAction={() => router.push('/home')}
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
