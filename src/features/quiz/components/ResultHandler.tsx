export function ResultHeader({ title }: { title: string }) {
  return (
    <div className='space-y-2'>
      <p className='text-sm text-gray-500'>Quiz Result</p>
      <h1 className='text-2xl font-bold text-gray-900 truncate'>{title}</h1>
      <p className='text-sm text-gray-600'>Here is your performance summary.</p>
    </div>
  );
}
