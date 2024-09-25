'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { animatePageOut } from '../utils/animation';

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    animatePageOut();
  }, [pathname]);

  return <div>{children}</div>;
}
