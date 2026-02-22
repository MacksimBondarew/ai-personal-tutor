export function DocumentStatus({ status }: { status: string }) {
  return (
    <span className='text-xs px-2 py-1 rounded-full border text-gray-600'>
      {status}
    </span>
  );
}
