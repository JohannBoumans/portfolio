import { PageWrapper } from '../page-wrapper/PageWrapper';
import { TemplatePageProps } from '../../common/navigation/types/page';
import { GridLine } from '../../components/client/grid-line/GridLine';
import {
  SecondGridLineFirstComponent,
  SecondGridLineSecondComponent,
} from './sections/SecondGridLine';
import {
  ThirdGridLineFirstComponent,
  ThirdGridLineSecondComponent,
} from './sections/ThirdGridLine';
import {
  FourthGridLineFirstComponent,
  FourthGridLineSecondComponent,
} from './sections/FourthGridLine';
import {
  SixthGridLineFirstComponent,
  SixthGridLineSecondComponent,
} from './sections/SixthGridLine';
import {
  ServicesGridLineFirstComponent,
  ServicesGridLineSecondComponent,
  ServicesGridLineThirdComponent,
} from './sections/ServicesGridLine';
import {
  RealisationStepGridLineFirstComponent,
  RealisationStepGridLineSecondComponent,
} from './sections/RealisationStep';
import {
  RealisationStepOneGridLineFirstComponent,
  RealisationStepOneGridLineSecondComponent,
} from './sections/RealisationStepOne';
import {
  RealisationStepTwoGridLineFirstComponent,
  RealisationStepTwoGridLineSecondComponent,
} from './sections/RealisationStepTwo';
import {
  RealisationStepThreeGridLineFirstComponent,
  RealisationStepThreeGridLineSecondComponent,
} from './sections/RealisationStepThree';
import {
  RealisationStepFourGridLineFirstComponent,
  RealisationStepFourGridLineSecondComponent,
} from './sections/RealisationStepFour';
import {
  ServicesTitleGridLineFirstComponent,
  ServicesTitleGridLineSecondComponent,
} from './sections/ServicesTitleGridLine';

export default async function HomePage(props: TemplatePageProps) {
  const { country, language, locale, slug } = props;
  return (
    <PageWrapper language={language}>
      {/*<TrackPageView pageName={Analytics.Pages.homePage} />*/}
      {/*<HomeHero />*/}
      {/*<MeshGradient3 />*/}
      {/*<MeshGradient4 />*/}
      <GridLine
        firstComponent={<SecondGridLineFirstComponent language={language} />}
        secondComponent={<SecondGridLineSecondComponent />}
        additionalStyle={{
          cellContainer: `!grid grid-cols-1`,
          second: `!p-0 !overflow-hidden relative cell-transparent min-h-[120px]`,
        }}
      />
      <GridLine
        firstComponent={<ThirdGridLineFirstComponent />}
        secondComponent={<ThirdGridLineSecondComponent language={language} />}
        additionalStyle={{
          cellContainer: `!flex-col-reverse`,
          first: `!p-0 !overflow-hidden relative cell-transparent min-h-[120px]`,
        }}
      />
      <GridLine
        firstComponent={<FourthGridLineFirstComponent language={language} />}
        secondComponent={<FourthGridLineSecondComponent />}
        additionalStyle={{
          second: `!p-0 !overflow-hidden relative cell-transparent min-h-[120px]`,
        }}
      />
      <GridLine
        firstComponent={<SixthGridLineFirstComponent language={language} />}
        secondComponent={<SixthGridLineSecondComponent language={language} />}
        additionalStyle={{ first: `order-1 lg:order-2` }}
      />
      <GridLine
        isInverted
        firstComponent={
          <ServicesTitleGridLineFirstComponent language={language} />
        }
        secondComponent={<ServicesTitleGridLineSecondComponent />}
        additionalStyle={{
          first: `min-h-[176px] flex items-center order-2 lg:order-1`,
          second: `!p-0 overflow-hidden relative cell-transparent min-h-[120px]`,
        }}
      />
      <GridLine
        hasThreeColumns
        firstComponent={<ServicesGridLineFirstComponent language={language} />}
        secondComponent={
          <ServicesGridLineSecondComponent language={language} />
        }
        thirdComponent={<ServicesGridLineThirdComponent language={language} />}
      />
      <GridLine
        firstComponent={<RealisationStepGridLineSecondComponent />}
        secondComponent={
          <RealisationStepGridLineFirstComponent language={language} />
        }
        additionalStyle={{
          first: `!p-0 overflow-hidden relative cell-transparent min-h-[120px]`,
        }}
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepOneGridLineFirstComponent />}
        secondComponent={
          <RealisationStepOneGridLineSecondComponent language={language} />
        }
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepTwoGridLineFirstComponent />}
        secondComponent={
          <RealisationStepTwoGridLineSecondComponent language={language} />
        }
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepThreeGridLineFirstComponent />}
        secondComponent={
          <RealisationStepThreeGridLineSecondComponent language={language} />
        }
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepFourGridLineFirstComponent />}
        secondComponent={
          <RealisationStepFourGridLineSecondComponent language={language} />
        }
      />
    </PageWrapper>
  );
}
