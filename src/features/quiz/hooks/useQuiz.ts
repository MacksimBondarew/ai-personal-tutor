'use client';

import { useMemo, useState } from 'react';

type Item = { id: string; options: string[]; correct_answer: string };

export function useQuiz(items?: Item[]) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  const select = (itemId: string, option: string) =>
    setAnswers((p) => ({ ...p, [itemId]: option }));

  const next = () => {
    if (!items || items.length === 0) return;
    if (index < items.length - 1) setIndex((i) => i + 1);
    else setFinished(true);
  };

  const score = useMemo(() => {
    if (!items) return 0;
    return items.reduce((acc, it) => {
      const picked = answers[it.id];
      return acc + (picked === it.correct_answer ? 1 : 0);
    }, 0);
  }, [items, answers]);

  return { index, answers, finished, select, next, score };
}
