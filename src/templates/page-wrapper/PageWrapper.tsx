'use client';

import { ReactNode } from 'react';
import { Language } from '../../common/navigation/types/config';
import { GridLine } from '../../components/client/grid-line/GridLine';
import { Link } from '../../common/navigation/components/Link';
import { HeaderGridLineFirstComponent } from './components/HeaderGridLine';
import {
  FooterGridLineFirstComponent,
  FooterGridLineSecondComponent,
  FooterGridLineThirdComponent,
} from './components/FooterGridLine';

type Props = {
  children: ReactNode;
  language: Language;
  isHeaderSticky?: boolean;
};

export function PageWrapper(props: Props) {
  const { children, language, isHeaderSticky = true } = props;
  // const router = useRouter();
  // const { dispatch } = useCustomEvent(`page-transition`);
  // const { isAnimating, setIsAnimating } = usePageAnimationStore();
  //
  // function startPageAnimation() {
  //   if (!isAnimating) {
  //     setIsAnimating("initial");
  //   }
  // }

  return (
    <>
      {/*<AnimatePresence initial={false} mode="wait">*/}
      {/*<m.div*/}
      {/*  className="absolute top-0 left-0 w-full h-full bg-red z-[999]"*/}
      {/*  initial={{ scaleX: 0, transformOrigin: `left` }}*/}
      {/*  animate={{ scaleX: 1, transformOrigin: `right` }}*/}
      {/*  exit={{ scaleX: 0, transformOrigin: `right` }}*/}
      {/*  transition={{*/}
      {/*    type: `spring`,*/}
      {/*    mass: 0.35,*/}
      {/*    stiffness: 75,*/}
      {/*    duration: 1,*/}
      {/*  }}*/}
      {/*>*/}
      {/*<m.div*/}
      {/*  initial={{ opacity: 0, y: 20 }}*/}
      {/*  animate={{ opacity: 1, y: 0 }}*/}
      {/*  exit={{ opacity: 0, y: 20 }}*/}
      {/*  transition={{*/}
      {/*    type: `spring`,*/}
      {/*    mass: 0.35,*/}
      {/*    stiffness: 75,*/}
      {/*    duration: 5,*/}
      {/*  }}*/}
      {/*>*/}
      <GridLine
        hasThreeColumns
        firstComponent={<HeaderGridLineFirstComponent />}
        secondComponent={
          <Link to="/about" additionalStyle="text-xl text-white">
            Á propos
          </Link>
        }
      />
      <main className="flex flex-1 flex-col">{children}</main>
      <GridLine
        hasThreeColumns
        firstComponent={<FooterGridLineFirstComponent />}
        secondComponent={<FooterGridLineSecondComponent />}
        thirdComponent={<FooterGridLineThirdComponent />}
        additionalStyle={{
          first: `min-h-[150px]`,
          second: `min-h-[150px]`,
          third: `min-h-[150px]`,
        }}
      />
      {/*</m.div>*/}
      {/*</m.div>*/}
      {/*</AnimatePresence>*/}
    </>
  );
}
