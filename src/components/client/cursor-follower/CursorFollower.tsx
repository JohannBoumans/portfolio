'use client';

import { useEffect, useState } from 'react';
import { m, useMotionValue, useTransform } from 'framer-motion';
import clsx from 'clsx';

const circleSize = 600;

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  // const springConfig = { stiffness: 50, dumping: 10, duration: 1000 };
  //
  // const springX = useSpring(mouseX, springConfig);
  // const springY = useSpring(mouseY, springConfig);

  const x = useTransform(mouseX, (value) => `${value - circleSize / 2}px`);
  const y = useTransform(mouseY, (value) => `${value - circleSize / 2}px`);

  useEffect(() => {
    const moveCursor = (e: any) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener(`mousemove`, moveCursor);
    setIsVisible(true);

    return () => {
      window.removeEventListener(`mousemove`, moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {isVisible && (
        <m.div
          transition={{ type: `spring`, duration: 0.5 }}
          className={clsx(
            // `fixed top-0 left-0 bg-[#b6fe85] rounded-full pointer-events-none z-[-1]`,
            `fixed top-0 left-0 bg-[#fe9474] rounded-full pointer-events-none z-[-2]`,
            // `fixed top-0 left-0 bg-[#ff4912] rounded-full pointer-events-none z-[-1]`,
            // `fixed top-0 left-0 bg-[rgba(255,215,0,1)] rounded-full pointer-events-none z-[-1]`,
          )}
          style={{
            x,
            y,
            width: circleSize,
            height: circleSize,
            filter: `blur(100px)`,
          }}
        />
      )}
    </>
  );
}
