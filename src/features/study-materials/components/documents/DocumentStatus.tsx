export function DocumentStatus({ status }: { status: string }) {
  return (
    <span className='text-xs flex items-center justify-center px-2 py-1 rounded-full w-18 border font-bold text-gray-600 justify-self-center'>
      {status}
    </span>
  );
}
