'use client';

import { ReactNode } from 'react';
import { Language } from '../../common/navigation/types/config';
import { GridLine } from '../../components/client/grid-line/GridLine';
import { ContactForm } from './components/form/ContactForm';
import { ContactHeading } from './components/form/ContactHeading';
import {
  HeaderGridLineFirstComponent,
  HeaderGridLineThirdComponent,
} from './components/HeaderGridLine';
import {
  FooterGridLineFirstComponent,
  FooterGridLineSecondComponent,
  FooterGridLineThirdComponent,
} from './components/FooterGridLine';

type Props = {
  children: ReactNode;
  language: Language;
};

export function PageWrapper(props: Props) {
  const { children, language } = props;
  return (
    <>
      <GridLine
        hasThreeColumns
        firstComponent={<HeaderGridLineFirstComponent />}
        secondComponent={<></>}
        thirdComponent={<HeaderGridLineThirdComponent />}
      />
      <main className="flex flex-1 flex-col">{children}</main>
      <GridLine
        isInverted
        firstComponent={<ContactHeading />}
        secondComponent={<ContactForm />}
      />
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
    </>
  );
}
