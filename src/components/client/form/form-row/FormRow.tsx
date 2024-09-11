import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  additionalStyle?: string;
  children: ReactNode;
  columns?: 1 | 2 | 3;
  noGap?: boolean;
};

export function FormRow(props: Props) {
  const { additionalStyle, children, columns = 2, noGap = false } = props;
  return (
    <div
      className={clsx(
        `grid`,
        mapColumnsToClassName[columns],
        mapNoGapToClassName[`${noGap}`],
        additionalStyle,
      )}
    >
      {children}
    </div>
  );
}

const mapColumnsToClassName: Record<number, string> = {
  1: `grid-cols-1`,
  2: `grid-cols-1 sm:grid-cols-2`,
  3: `grid-cols-3`,
};

const mapNoGapToClassName: Record<string, string> = {
  true: ``,
  false: `gap-2`,
};
