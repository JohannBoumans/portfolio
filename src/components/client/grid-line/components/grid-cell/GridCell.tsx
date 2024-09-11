import { ReactNode } from 'react';
import clsx from 'clsx';
import './style.css';

type Props = {
  children?: ReactNode;
  additionalStyle?: string;
};

export function GridCell(props: Props) {
  const { additionalStyle, children } = props;
  return (
    <div
      className={clsx(
        `cell w-full overflow-hidden bg-clip-padding relative p-4`,
        additionalStyle,
      )}
    >
      {children}
    </div>
  );
}
