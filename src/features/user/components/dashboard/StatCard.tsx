import { cn } from '@/src/shared/lib';

function StatCard({
  label,
  value,
  sub,
  className,
}: {
  label: string;
  value: React.ReactNode;
  sub?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'min-w-[220px] rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition',
        className,
      )}
    >
      <div className='flex items-start justify-between gap-3'>
        <div>
          <p className='text-xs uppercase tracking-wide text-gray-500'>
            {label}
          </p>
          <p className='text-3xl font-semibold text-gray-900 mt-2 leading-none'>
            {value}
          </p>
          {sub ? <p className='text-sm text-gray-500 mt-2'>{sub}</p> : null}
        </div>
        <span className='h-9 w-9 rounded-xl bg-gray-50 border border-gray-200' />
      </div>
    </div>
  );
}

export { StatCard };
