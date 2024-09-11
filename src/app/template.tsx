'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { animatePageOut } from '../utils/animation';

export default function Template({ children }: { children: ReactNode }) {
  // const controls = useAnimationControls();
  const pathname = usePathname();
  // const { state, setIsAnimating } = usePageAnimationStore();

  // const variants = {
  //   hidden: {
  //     x: `-100%`,
  //   },
  //   animate: { x: `0%` },
  //   exit: { x: `100%` },
  // };

  useEffect(() => {
    console.log(`ANIMATION ENTERS`);
    // animatePageIn();
    animatePageOut();
    // controls.start({ x: `0%` });
  }, [pathname]);

  return (
    <div>
      {/*<m.div*/}
      {/*  // key={pathname}*/}
      {/*  className="w-screen h-screen bg-red z-[999] fixed top-0 left-0"*/}
      {/*  initial="hidden"*/}
      {/*  animate={controls}*/}
      {/*  variants={variants}*/}
      {/*  transition={{ ease: `easeInOut`, duration: 1 }}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  id="transition-element"*/}
      {/*  className="w-screen h-screen bg-red z-[999] fixed top-0 left-0"*/}
      {/*/>*/}
      {/*<TransitionElement />*/}
      {children}
    </div>
  );
}

// 'use client';
//
// import { m } from 'framer-motion';
//
// export default function Template({ children }: { children: React.ReactNode }) {
//   return (
//     <m.div
//       initial={{ y: 20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: 20, opacity: 0 }}
//       transition={{ ease: `easeInOut`, duration: 0.75 }}
//     >
//       {children}
//     </m.div>
//   );
// }
