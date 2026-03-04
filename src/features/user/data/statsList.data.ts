export function statsList({
  streak,
  progress,
}: {
  streak: {
    current_streak: number;
    best_streak: number;
  };
  progress: {
    total_sets: number;
    avg_score: number;
    best_score: number;
    total_attempts: number;
  };
}) {
  return [
    {
      label: 'Current streak',
      value: streak?.current_streak ?? 0,
      sub: 'days in a row',
    },
    {
      label: 'Best streak',
      value: streak?.best_streak ?? 0,
      sub: 'personal record',
    },
    {
      label: 'Total sets',
      value: progress?.total_sets ?? 0,
      sub: 'created by you',
    },
    {
      label: 'Average score',
      value:
        progress?.avg_score != null
          ? `${Math.round(Number(progress.avg_score))}%`
          : '0%',
      sub: 'across all attempts',
    },
    {
      label: 'Best score',
      value:
        progress?.best_score != null
          ? `${Math.round(Number(progress.best_score))}%`
          : '—',
      sub: 'highest result',
    },
    {
      label: 'Total attempts',
      value: progress?.total_attempts ?? 0,
      sub: 'quizzes taken',
    },
  ];
}
