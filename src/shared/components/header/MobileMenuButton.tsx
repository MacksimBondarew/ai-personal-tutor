import { Menu, X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export function MobileMenuButton({ isOpen, onToggle }: Props) {
  return (
    <button
      type='button'
      className='inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden'
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
    </button>
  );
}
