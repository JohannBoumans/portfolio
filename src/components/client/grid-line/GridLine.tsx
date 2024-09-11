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

  // const { state, setIsAnimating } = usePageAnimationStore();
  //
  // useEffect(() => {
  //   if (state === `entering`) {
  //     wait(duration * 1000).then(() => {
  //       setIsAnimating(`exited`);
  //     });
  //   }
  // }, [state]);
  //
  // function handleExitCompleteAnimation() {
  //   // if (state === `entering`) {
  //   console.log(`EXIT ??`);
  //   // setIsAnimating(`exited`);
  //   // }
  // }
  //
  // console.log(state, `CHILD STATUS`);
  //
  // // useEffect(() => {
  // //   if (state === `entering`) {
  // //     setIsAnimating(`animate-enter`);
  // //   } else if (state === `exited`) {
  // //     setIsAnimating(`animate-exit`);
  // //   }
  // // }, [state]);
  //
  // const handleAnimationEnd = () => {
  //   if (state === `entering`) {
  //     setIsAnimating(`initial`);
  //   }
  // };

  // ${state === `initial` ? `scale-x-0 origin-left` : ``}
  // ${state === `entering` ? `scale-x-1 origin-left` : ``}
  // ${state === `exited` ? `scale-x-0 origin-right` : ``}

  return (
    <div
      className={clsx(
        `w-full h-auto flex items-stretch justify-center bg-clip-padding`,
        additionalStyle?.root,
      )}
    >
      {/*<div className="min-h-full w-full max-w-[50px] 2xl:max-w-full cell2">*/}
      {/*  /!*<BlockAnimationTransition />*!/*/}
      {/*  /!*<TransitionElement />*!/*/}
      {/*</div>*/}
      <GridCell additionalStyle="min-h-full max-w-[50px] 2xl:max-w-full" />
      <div className="w-full 2xl:min-w-[1280px] h-full">
        <div className="h-full grid grid-cols-3">
          <GridCell
            additionalStyle={clsx(
              mapIsInvertedToColumnSize(isInverted, hasThreeColumns),
              additionalStyle?.first,
            )}
          >
            {firstComponent}
          </GridCell>
          {/*<div*/}
          {/*  className={clsx(*/}
          {/*    `border-r-[1px] border-white/[0.3] p-4 bg-clip-padding bg-[#061423] overflow-hidden relative`,*/}
          {/*    mapIsInvertedToColumnSize(isInverted, hasThreeColumns),*/}
          {/*    additionalStyle?.first,*/}
          {/*  )}*/}
          {/*>*/}
          {/*  {firstComponent}*/}
          {/*  /!*<BlockAnimationTransition />*!/*/}
          {/*  /!*<TransitionElement />*!/*/}
          {/*</div>*/}
          <GridCell
            additionalStyle={clsx(
              mapIsInvertedToColumnSize(!isInverted, hasThreeColumns),
              additionalStyle?.second,
            )}
          >
            {secondComponent}
          </GridCell>
          {/*<div*/}
          {/*  className={clsx(*/}
          {/*    `p-4 bg-[#061423] overflow-hidden relative`,*/}
          {/*    mapIsInvertedToColumnSize(!isInverted, hasThreeColumns),*/}
          {/*    additionalStyle?.second,*/}
          {/*  )}*/}
          {/*>*/}
          {/*  {secondComponent}*/}
          {/*  /!*<BlockAnimationTransition />*!/*/}
          {/*  /!*<TransitionElement />*!/*/}
          {/*</div>*/}
          {hasThreeColumns && (
            <GridCell additionalStyle="col-span-1">{secondComponent}</GridCell>
            // <div
            //   className={clsx(
            //     `p-4 col-span-1 bg-[#061423] overflow-hidden relative`,
            //     additionalStyle?.third,
            //   )}
            // >
            //   {thirdComponent}
            //   {/*<BlockAnimationTransition />*/}
            //   {/*<TransitionElement />*/}
            // </div>
          )}
        </div>
      </div>
      <GridCell additionalStyle="min-h-full max-w-[50px] 2xl:max-w-full" />
      {/*<div className="bg-[#061423] min-h-full w-full max-w-[50px] 2xl:max-w-full relative overflow-hidden">*/}
      {/*  /!*<BlockAnimationTransition />*!/*/}
      {/*  /!*<TransitionElement />*!/*/}
      {/*</div>*/}
    </div>
  );
}

function mapIsInvertedToColumnSize(
  isInverted: boolean,
  hasThreeColumns: boolean,
) {
  if (hasThreeColumns) {
    // return `col-span-1 border-r-[1px] border-white/[0.3] bg-clip-padding`;
    return `col-span-1`;
  }
  if (isInverted) {
    return `col-span-1`;
  }
  return `col-span-2`;
}

// 'use client';
//
// import { ReactNode } from 'react';
// import clsx from 'clsx';
// import { AdditionalStyle } from '../../../style/types/additional-style';
// import { TransitionElement } from '../transition-element/TransitionElement';
// import { GridLineAnatomy } from './_/anatomy';
//
// type Props = {
//   isInverted?: boolean;
//   additionalStyle?: AdditionalStyle<GridLineAnatomy>;
//   hasThreeColumns?: boolean;
//   firstComponent?: ReactNode;
//   secondComponent?: ReactNode;
//   thirdComponent?: ReactNode;
// };
//
// export function GridLine(props: Props) {
//   const {
//     additionalStyle,
//     hasThreeColumns = false,
//     isInverted = false,
//     firstComponent,
//     secondComponent,
//     thirdComponent,
//   } = props;
//
//   // const { state, setIsAnimating } = usePageAnimationStore();
//   //
//   // useEffect(() => {
//   //   if (state === `entering`) {
//   //     wait(duration * 1000).then(() => {
//   //       setIsAnimating(`exited`);
//   //     });
//   //   }
//   // }, [state]);
//   //
//   // function handleExitCompleteAnimation() {
//   //   // if (state === `entering`) {
//   //   console.log(`EXIT ??`);
//   //   // setIsAnimating(`exited`);
//   //   // }
//   // }
//   //
//   // console.log(state, `CHILD STATUS`);
//   //
//   // // useEffect(() => {
//   // //   if (state === `entering`) {
//   // //     setIsAnimating(`animate-enter`);
//   // //   } else if (state === `exited`) {
//   // //     setIsAnimating(`animate-exit`);
//   // //   }
//   // // }, [state]);
//   //
//   // const handleAnimationEnd = () => {
//   //   if (state === `entering`) {
//   //     setIsAnimating(`initial`);
//   //   }
//   // };
//
//   // ${state === `initial` ? `scale-x-0 origin-left` : ``}
//   // ${state === `entering` ? `scale-x-1 origin-left` : ``}
//   // ${state === `exited` ? `scale-x-0 origin-right` : ``}
//
//   return (
//     <div
//       className={clsx(
//         `w-full border-b-[1px] h-auto border-b-white/[0.3] last:border-b-0 box-border flex items-stretch justify-center bg-clip-padding`,
//         additionalStyle?.root,
//       )}
//     >
//       <div className="bg-[#061423] min-h-full w-full max-w-[50px] 2xl:max-w-full relative overflow-hidden">
//         {/*<BlockAnimationTransition />*/}
//         <TransitionElement />
//       </div>
//       <div className="w-full 2xl:min-w-[1280px] h-full">
//         <div className="h-full grid grid-cols-3 border-x-[1px] border-white/[0.3] bg-clip-padding">
//           <div
//             className={clsx(
//               `border-r-[1px] border-white/[0.3] p-4 bg-clip-padding bg-[#061423] overflow-hidden relative`,
//               mapIsInvertedToColumnSize(isInverted, hasThreeColumns),
//               additionalStyle?.first,
//             )}
//           >
//             {firstComponent}
//             {/*<BlockAnimationTransition />*/}
//             <TransitionElement />
//           </div>
//           <div
//             className={clsx(
//               `p-4 bg-[#061423] overflow-hidden relative`,
//               mapIsInvertedToColumnSize(!isInverted, hasThreeColumns),
//               additionalStyle?.second,
//             )}
//           >
//             {secondComponent}
//             {/*<BlockAnimationTransition />*/}
//             <TransitionElement />
//           </div>
//           {hasThreeColumns && (
//             <div
//               className={clsx(
//                 `p-4 col-span-1 bg-[#061423] overflow-hidden relative`,
//                 additionalStyle?.third,
//               )}
//             >
//               {thirdComponent}
//               {/*<BlockAnimationTransition />*/}
//               <TransitionElement />
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="bg-[#061423] min-h-full w-full max-w-[50px] 2xl:max-w-full relative overflow-hidden">
//         {/*<BlockAnimationTransition />*/}
//         <TransitionElement />
//       </div>
//     </div>
//   );
// }
//
// function mapIsInvertedToColumnSize(
//   isInverted: boolean,
//   hasThreeColumns: boolean,
// ) {
//   if (hasThreeColumns) {
//     return `col-span-1 border-r-[1px] border-white/[0.3] bg-clip-padding`;
//   }
//   if (isInverted) {
//     return `col-span-1`;
//   }
//   return `col-span-2`;
// }
