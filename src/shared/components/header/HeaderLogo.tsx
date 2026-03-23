import Link from 'next/link';

export function HeaderLogo() {
  return (
    <Link
      href='/'
      className='flex items-center gap-3 transition hover:opacity-90'
    >
      <div>
        <div className='text-sm font-medium text-slate-500'>
          Learning Platform
        </div>
        <div className='text-lg font-semibold tracking-tight text-slate-900'>
          AI Quiz Dashboard
        </div>
      </div>
    </Link>
  );
}
