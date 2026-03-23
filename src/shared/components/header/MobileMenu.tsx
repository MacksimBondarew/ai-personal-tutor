import { navItems } from './nav-items';
import { NavLinkItem } from './NavLinkItem';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileMenu({ isOpen, pathname, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[100] md:hidden'>
      <div className='absolute inset-0 bg-black/40' onClick={onClose} />

      <div className='absolute right-0 top-0 flex h-full w-72 flex-col bg-white p-6 shadow-xl'>
        <div className='mb-6 flex items-center justify-between'>
          <span className='text-base font-semibold text-slate-900'>Menu</span>

          <button
            type='button'
            onClick={onClose}
            className='rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900'
            aria-label='Close menu'
          >
            <X className='h-5 w-5' />
          </button>
        </div>

        <nav className='flex flex-col gap-2'>
          {navItems.map((item) => (
            <NavLinkItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.href}
              onClick={onClose}
              mobile
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
