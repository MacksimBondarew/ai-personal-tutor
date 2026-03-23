export function ResultStats({
  score,
  total,
  percentage,
}: {
  score: number;
  total: number;
  percentage: number;
}) {
  return (
    <div className='mt-6 grid gap-4 sm:grid-cols-2'>
      <div className='rounded-2xl bg-gray-50 p-5'>
        <p className='text-sm text-gray-500'>Correct Answers</p>
        <div className='mt-2 flex items-end gap-2'>
          <span className='text-4xl font-bold text-gray-900'>{score}</span>
          <span className='text-gray-500'>/ {total}</span>
        </div>
      </div>

      <div className='rounded-2xl bg-gray-50 p-5'>
        <p className='text-sm text-gray-500'>Score</p>
        <div className='mt-2 text-4xl font-bold text-gray-900'>
          {percentage}%
        </div>
      </div>
    </div>
  );
}
