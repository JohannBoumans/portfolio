import { cva } from 'class-variance-authority';

const spinnerRootVariants = {
  size: {
    xs: [`h-[10px]`, `w-[10px]`],
    xl: [`h-[20px]`, `w-[20px]`],
  },
};

const spinnerCircleVariants = {
  colorScheme: {
    white: `border-l-white`,
    black: `border-l-black`,
  },
  size: {
    xs: [`border-[1px]`],
    xl: [`border-[3px]`],
  },
};

export const spinnerRootStyle = cva(`relative`, {
  variants: spinnerRootVariants,
  defaultVariants: {
    size: `xs`,
  },
});

export const spinnerCircleStyle = cva(
  `absolute left-0 top-0 box-border block rounded-full border-transparent h-full w-full`,
  {
    variants: spinnerCircleVariants,
    defaultVariants: {
      colorScheme: `white`,
      size: `xs`,
    },
  },
);
