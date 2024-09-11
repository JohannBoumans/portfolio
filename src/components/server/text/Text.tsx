import type { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { textStyle } from './_/style';
import { As } from './_/types';

type Props = VariantProps<typeof textStyle> & {
  children: ReactNode;
  as?: As;
  noOfLines?: 0 | 1 | 2 | 3 | 4;
  isStrikethrough?: boolean;
  additionalStyle?: string;
};

export function Text(props: Props) {
  const {
    additionalStyle,
    colorScheme = `default`,
    children,
    size,
    as: Component = `p`,
    noOfLines,
    isStrikethrough,
  } = props;
  return (
    <Component
      className={textStyle({
        colorScheme,
        size,
        className: clsx(
          additionalStyle,
          noOfLines === 0
            ? mapNoOfLinesToClassName[noOfLines]
            : `line-clamp-none`,
          `relative`,
          `z-0`,
        ),
      })}
    >
      {children}
      {isStrikethrough && (
        <div
          className=" absolute left-0 top-[50%] w-full bg-black"
          style={{ height: 2, opacity: 0.25 }}
        />
      )}
    </Component>
  );
}

const mapNoOfLinesToClassName: Record<number | string, string> = {
  0: `line-clamp-none`,
  1: `line-clamp-1`,
  2: `line-clamp-2`,
  3: `line-clamp-3`,
  4: `line-clamp-4`,
};
