import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/src/shared/lib';

type Props = {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick?: () => void;
  mobile?: boolean;
};

export function NavLinkItem({
  href,
  label,
  icon: Icon,
  isActive,
  onClick,
  mobile = false,
}: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'inline-flex items-center font-medium transition-all duration-200',
        mobile
          ? 'gap-3 rounded-2xl px-4 py-3 text-sm'
          : 'gap-2 rounded-2xl px-4 py-2.5 text-sm',
        isActive
          ? 'bg-slate-900 text-white shadow-sm'
          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
      )}
    >
      <Icon className='h-4 w-4' />
      {label}
    </Link>
  );
}
