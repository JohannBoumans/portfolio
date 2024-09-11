import { cva } from 'class-variance-authority';
import clsx from 'clsx';

export const inputStyle = cva(
  clsx(
    `text-[13px]`,
    `leading-[16px]`,
    `bg-transparent`,
    `border-[1px]`,
    `border-gray-200`,
    `px-4`,
    `font-medium`,
    `w-full`,
    `text-white`,
    `duration-200`,
    `outline-0`,
    `hover:border-red`,
    `focus:border-red`,
    `rounded-[4px]`,
  ),
);

export const invalidClassName = `!shadow-[0px_0px_0px_3px_rgba(245,_101,_101,_0.10)] !border-danger`;
