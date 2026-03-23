import { navItems } from './nav-items';
import { NavLinkItem } from './NavLinkItem';

export function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className='hidden items-center gap-2 md:flex'>
      {navItems.map((item) => (
        <NavLinkItem
          key={item.href}
          href={item.href}
          label={item.label}
          icon={item.icon}
          isActive={pathname === item.href}
        />
      ))}
    </nav>
  );
}
