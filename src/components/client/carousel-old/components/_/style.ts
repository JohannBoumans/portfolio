import { cva } from 'class-variance-authority';

export const carouselButtonRootStyle = cva(`absolute top-[50%] z-50`, {
  variants: {
    variant: {
      left: `left-2`,
      right: `right-2`,
    },
  },
  defaultVariants: {
    variant: `left`,
  },
});
