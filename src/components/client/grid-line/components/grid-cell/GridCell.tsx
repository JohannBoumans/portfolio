import { ReactNode } from 'react';
import clsx from 'clsx';
import './style.css';

type Props = {
  children?: ReactNode;
  additionalStyle?: string;
};

export function GridCell(props: Props) {
  const { additionalStyle, children } = props;
  // const { controls } = usePageAnimationStore();

  return (
    <div
      className={clsx(`cell !overflow-hidden relative p-4`, additionalStyle)}
    >
      {children}
    </div>
  );
}
