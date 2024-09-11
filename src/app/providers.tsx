'use client';

import { PropsWithChildren } from 'react';
import { LazyMotion } from 'framer-motion';

const framerAnimation = () =>
  import(`./framer-animation.js`).then((res) => res.default);

export function Providers(props: PropsWithChildren) {
  const { children } = props;
  return (
    <LazyMotion features={framerAnimation} strict>
      {children}
    </LazyMotion>
  );
}
