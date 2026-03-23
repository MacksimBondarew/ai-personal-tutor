export function ResultActions({ onBackAction }: { onBackAction: () => void }) {
  return (
    <div className='mt-8 flex gap-3'>
      <button
        onClick={onBackAction}
        className='px-5 py-3 cursor-pointer rounded-xl bg-gray-900 text-white hover:bg-gray-800'
      >
        Back to Home
      </button>

      <button
        onClick={() => window.location.reload()}
        className='px-5 cursor-pointer py-3 rounded-xl border hover:bg-gray-50'
      >
        Try Again
      </button>
    </div>
  );
}
