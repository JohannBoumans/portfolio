import { cva } from 'class-variance-authority';
import clsx from 'clsx';

export const inputContainerStyle = cva(`flex items-center relative w-full`);

export const labelStyle = cva(
  clsx(
    `text-[13px]`,
    `leading-[16px]`,
    `text-secondary`,
    `pointer-events-none`,
    `font-medium`,
    `absolute`,
    `left-0`,
    `top-0`,
    `ml-4`,
    `mt-4`,
    `origin-top-left`,
    `duration-100`,
  ),
);
