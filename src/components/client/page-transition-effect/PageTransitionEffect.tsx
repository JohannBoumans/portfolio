'use client';

import { ReactNode } from 'react';
import { m } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export function PageTransitionEffect2({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  function handleExitAnimation() {
    window.scrollTo(0, 0);
  }

  return (
    // <AnimatePresence
    //   initial={false}
    //   mode="wait"
    //   onExitComplete={handleExitAnimation}
    // >
    <m.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ ease: `easeInOut`, duration: 3 }}
    >
      {children}
    </m.div>
    // </AnimatePresence>
  );
}
