import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  additionalStyle?: string;
  children: ReactNode;
  isCentered?: boolean;
};

export function CarouselSlide(props: Props) {
  const { additionalStyle, children, isCentered } = props;
  return (
    <div
      className={clsx(
        `min-w-0`,
        isCentered ? `flex justify-center` : null,
        additionalStyle,
      )}
    >
      {children}
    </div>
  );
}
