import { cva } from 'class-variance-authority';

const variants = {
  size: {
    xs: [`text-xs`],
    sm: [`text-sm`],
    md: [`text-md`],
    lg: [`text-lg`],
    xl: [`text-xl`],
    '2xl': [`text-2xl`],
    '3xl': [`text-3xl`],
    '4xl': [`text-2xl lg:text-4xl`],
    '5xl': [`text-3xl lg:text-5xl`],
    '6xl': [`text-4xl lg:text-6xl`],
    '7xl': [`text-7xl`],
    '8xl': [`text-8xl`],
    '9xl': [`text-9xl`],
  },
  colorScheme: {
    default: `text-white`,
    primary: `text-primary`,
    secondary: `text-secondary`,
    red: `text-red`,
    error: `text-danger`,
    green: `text-green-500`,
  },
};

export const textStyle = cva(``, {
  variants,
  defaultVariants: {
    size: `md`,
  },
});
