import { cva } from 'class-variance-authority';
import { ButtonColorScheme, ButtonSize, ButtonVariant } from './types';

export type A<
  ColorScheme extends string,
  Size extends string,
  Variant extends string,
> = {
  colorScheme: Record<ColorScheme, string[]>;
  size: Record<Size, string[]>;
  variant: Record<Variant, string[]>;
};

export type B<
  ColorScheme extends string,
  Size extends string,
  Variant extends string,
> = {
  colorScheme: ColorScheme | undefined;
  size: Size | undefined;
  variant: Variant | undefined;
};

const variants = (
  props: B<ButtonColorScheme, ButtonSize, ButtonVariant>,
  defaultVariants: B<ButtonColorScheme, ButtonSize, ButtonVariant>,
): A<ButtonColorScheme, ButtonSize, ButtonVariant> => {
  const colorScheme = props.colorScheme ?? defaultVariants.colorScheme;
  return {
    colorScheme: {
      transparent: [],
    },
    size: {
      sm: [
        `text-[12px]`,
        `leading-[16px]`,
        `rounded-full`,
        `min-w-[64px]`,
        `h-[28px]`,
        `px-2`,
      ],
      md: [
        `text-[14px]`,
        `leading-[18px]`,
        `rounded-full`,
        `min-w-[128px]`,
        `h-10`,
        `px-4`,
      ],
      lg: [
        `text-[14px]`,
        `leading-[18px]`,
        `rounded-full`,
        `min-w-[128px]`,
        `h-12`,
        `px-4`,
      ],
    },
    variant: {
      solid: (function () {
        if (colorScheme === `transparent`) {
          return [
            `bg-transparent`,
            `text-white`,
            `border-[1.5px]`,
            `border-white`,
            `hover:border-red`,
            `hover:text-red`,
            `focus:border-red`,
            `focus:shadow-[0_0_0_2.5px_rgba(102,102,102,0.25)]`,
            `active:border-red`,
            `active:shadow-[0_0_0_2.5px_rgba(102,102,102,0.25)]`,
            `disabled:opacity-50`,
          ];
        }
        return [];
      })(),
    },
  };
};

const defaultVariants: B<ButtonColorScheme, ButtonSize, ButtonVariant> = {
  colorScheme: `transparent`,
  variant: `solid`,
  size: `md`,
};

export const buttonStyle = (
  v: B<ButtonColorScheme, ButtonSize, ButtonVariant>,
) => {
  return cva(
    `flex justify-center items-center font-medium text-center duration-200 gap-2 outline-none`,
    {
      variants: variants(v, defaultVariants),
      defaultVariants,
    },
  );
};
