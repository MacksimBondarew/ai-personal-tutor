'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderLogo } from './HeaderLogo';
import { DesktopNav } from './DesktopNav';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header className='sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-20 items-center justify-between'>
            <HeaderLogo />
            <DesktopNav pathname={pathname} />
            <MobileMenuButton isOpen={isOpen} onToggle={toggleMenu} />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} pathname={pathname} onClose={closeMenu} />
    </>
  );
}
