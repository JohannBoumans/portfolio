import { cva } from 'class-variance-authority';
import { A, B } from '../../button/_/style';
import {
  ButtonIconColorScheme,
  ButtonIconSize,
  ButtonIconVariant,
} from './types';

const variants = (
  props: B<ButtonIconColorScheme, ButtonIconSize, ButtonIconVariant>,
  defaultVariants: B<ButtonIconColorScheme, ButtonIconSize, ButtonIconVariant>,
): A<ButtonIconColorScheme, ButtonIconSize, ButtonIconVariant> => {
  const colorScheme = props.colorScheme ?? defaultVariants.colorScheme;
  return {
    colorScheme: {
      gray: [],
      white: [],
    },
    size: {
      sm: [`h-6`, `w-6`],
      md: [`h-[28px]`, `w-[28px]`],
      lg: [`h-8`, `w-8`],
    },
    variant: {
      solid: (function () {
        if (colorScheme === `gray`) {
          return [
            `bg-[#F7FAFC]`,
            `focus:bg-[#E3EBF2]`,
            `border-[1px]`,
            `border-[#EDF2F7]`,
            `hover:bg-[#EDF2F7]`,
            `hover:border-[#E2E8F0]`,
            `active:border-[#D7DFEA]`,
            `active:bg-[#E3EBF2]`,
            `active:shadow-[0_0_0_2.5px_rgba(237,242,247,0.5)]`,
            `focus:bg-[#E3EBF2]`,
            `focus:border-[#D7DFEA]`,
            `focus:shadow-[0_0_0_2.5px_rgba(237,242,247,0.5)]`,
            `rounded-full`,
          ];
        }
        if (colorScheme === `white`) {
          return [
            `bg-white`,
            `hover:bg-[#F7FAFC]`,
            `focus:bg-[#EDF2F7]`,
            `focus:shadow-[0_4px_4px_0_rgba(0,0,0,0.25),0_0_0_2.5px_rgba(237,242,247,0.5)]`,
            `active:bg-[#EDF2F7]`,
            `active:shadow-[0_4px_4px_0_rgba(0,0,0,0.25),0_0_0_2.5px_rgba(237,242,247,0.5)]`,
            `shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`,
            `rounded-full`,
          ];
        }
        return [];
      })(),
      ghost: (function () {
        if (colorScheme === `gray`) {
          return [
            `hover:bg-[#F7FAFC]`,
            `focus:bg-[#EDF2F7]`,
            `focus:shadow-[0_0_0_2.5px_rgba(237,242,247,0.5)]`,
            `active:bg-[#EDF2F7]`,
            `active:shadow-[0_0_0_2.5px_rgba(237,242,247,0.5)]`,
            `rounded-[4px]`,
          ];
        }
        return [];
      })(),
    },
  };
};

const defaultVariants: B<
  ButtonIconColorScheme,
  ButtonIconSize,
  ButtonIconVariant
> = {
  colorScheme: `gray`,
  size: `md`,
  variant: `solid`,
};

export const buttonIconRootStyle = (
  v: B<ButtonIconColorScheme, ButtonIconSize, ButtonIconVariant>,
) =>
  cva(
    `duration-200 relative flex items-center justify-center outline-none disabled:opacity-50`,
    {
      variants: variants(v, defaultVariants),
      defaultVariants,
    },
  );
