'use client';

import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const AppHeader = () => {
  const routes = [
    {
      label: 'Dashboard',
      href: '/app/dashboard',
    },
    {
      label: 'Account',
      href: '/app/account',
    },
  ];

  const activePath = usePathname();

  return (
    <header className='flex justify-between py-2 border-b border-white/30 items-center'>
      <Logo />
      <nav>
        <ul className='flex gap-10'>
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                href={route.href}
                className={cn(
                  'text-slate-200 hover:text-white px-1 py-4 focus:text-white transition-all',
                  {
                    'text-white font-semibold border-b-2 border-white':
                      route.href === activePath,
                  }
                )}
              >
                {' '}
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
