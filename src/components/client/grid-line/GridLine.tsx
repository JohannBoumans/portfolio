'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';
import { AdditionalStyle } from '../../../style/types/additional-style';
import { GridLineAnatomy } from './_/anatomy';
import { GridCell } from './components/grid-cell/GridCell';

type Props = {
  isInverted?: boolean;
  additionalStyle?: AdditionalStyle<GridLineAnatomy>;
  hasThreeColumns?: boolean;
  firstComponent?: ReactNode;
  secondComponent?: ReactNode;
  thirdComponent?: ReactNode;
};

export function GridLine(props: Props) {
  const {
    additionalStyle,
    hasThreeColumns = false,
    isInverted = false,
    firstComponent,
    secondComponent,
    thirdComponent,
  } = props;

  return (
    <div
      className={clsx(
        `w-full h-auto flex items-stretch justify-center bg-clip-padding overflow-hidden`,
        additionalStyle?.root,
      )}
    >
      <GridCell additionalStyle="min-h-full max-w-[50px] 2xl:max-w-full w-full" />
      <div className="w-full 2xl:min-w-[1280px] h-full">
        <div className="h-full grid grid-cols-3 overflow-hidden">
          <GridCell
            additionalStyle={clsx(
              mapIsInvertedToColumnSize(
                isInverted,
                secondComponent,
                hasThreeColumns,
              ),
              additionalStyle?.first,
            )}
          >
            {firstComponent}
          </GridCell>
          {secondComponent && (
            <GridCell
              additionalStyle={clsx(
                mapIsInvertedToColumnSize(
                  !isInverted,
                  secondComponent,
                  hasThreeColumns,
                ),
                additionalStyle?.second,
              )}
            >
              {secondComponent}
            </GridCell>
          )}
          {hasThreeColumns && (
            <GridCell additionalStyle="col-span-1">{thirdComponent}</GridCell>
          )}
        </div>
      </div>
      <GridCell additionalStyle="min-h-full max-w-[50px] 2xl:max-w-full w-full" />
    </div>
  );
}

function mapIsInvertedToColumnSize(
  isInverted: boolean,
  secondComponent: ReactNode,
  hasThreeColumns: boolean,
) {
  if (!secondComponent) {
    return `col-span-3`;
  }
  if (hasThreeColumns) {
    // return `col-span-1 border-r-[1px] border-white/[0.3] bg-clip-padding`;
    return `col-span-1`;
  }
  if (isInverted) {
    return `col-span-1`;
  }
  return `col-span-2`;
}
