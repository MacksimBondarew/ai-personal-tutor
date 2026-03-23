export function ResultMessage({ percentage }: { percentage: number }) {
  const getMessage = () => {
    if (percentage === 100) return 'Perfect score. Amazing job!';
    if (percentage >= 80) return 'Great result. You’re very close!';
    if (percentage >= 60) return 'Good job. Keep improving.';
    if (percentage >= 40) return 'Decent start. Try again.';
    return 'Don’t worry. Practice makes perfect!';
  };

  return (
    <div className='mt-6 rounded-2xl bg-gray-50 p-5'>
      <p className='text-sm text-gray-500'>Feedback</p>
      <p className='mt-2 text-gray-800'>{getMessage()}</p>
    </div>
  );
}
