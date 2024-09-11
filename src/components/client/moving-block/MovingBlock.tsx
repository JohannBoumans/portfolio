'use client';

import { ReactNode, useEffect } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  additionalStyle?: string;
  children: ReactNode;
  xOffset: number;
  yOffset: number;
};

export function MovingBlock(props: Props) {
  const { additionalStyle, children, xOffset, yOffset } = props;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    x.set(xOffset);
    y.set(yOffset);
  }, [xOffset, yOffset, x, y]);

  return (
    <m.div
      style={{
        x: xSpring,
        y: ySpring,
      }}
      className={additionalStyle}
    >
      {children}
    </m.div>
  );
}
