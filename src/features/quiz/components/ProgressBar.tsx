export function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className='mt-6'>
      <div className='mb-2 flex justify-between text-sm text-gray-600'>
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>

      <div className='h-3 w-full bg-gray-100 rounded-full'>
        <div
          className='h-full bg-gray-900 rounded-full transition-all'
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
