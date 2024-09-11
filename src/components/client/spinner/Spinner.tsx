'use client';

import { VariantProps } from 'class-variance-authority';
import { m } from 'framer-motion';
import { spinnerCircleStyle, spinnerRootStyle } from './_/style';

type Props = VariantProps<typeof spinnerCircleStyle> & {
  additionalStyle?: string;
};

export function Spinner(props: Props) {
  const { additionalStyle, colorScheme, size } = props;

  return (
    <div className={spinnerRootStyle({ size, className: additionalStyle })}>
      <m.span
        className={spinnerCircleStyle({ size, colorScheme })}
        animate={{ rotate: 360 }}
        transition={{
          loop: Number.POSITIVE_INFINITY,
          repeat: Number.POSITIVE_INFINITY,
          ease: `linear`,
          duration: 1,
        }}
      />
    </div>
  );
}
