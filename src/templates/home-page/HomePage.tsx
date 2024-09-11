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
  FifthGridLineFirstComponent,
  FifthGridLineSecondComponent,
} from './sections/FifthGridLine';
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
import { ContactForm } from './sections/form/ContactForm';
import { ContactHeading } from './sections/form/ContactHeading';

export default async function HomePage(props: TemplatePageProps) {
  const { country, language, locale } = props;
  return (
    <PageWrapper language={language}>
      {/*<TrackPageView pageName={Analytics.Pages.homePage} />*/}
      {/*<HomeHero />*/}
      {/*<MeshGradient3 />*/}
      {/*<MeshGradient4 />*/}
      <GridLine
        firstComponent={<SecondGridLineFirstComponent />}
        secondComponent={<SecondGridLineSecondComponent />}
        additionalStyle={{
          second: `!p-0 !overflow-hidden relative`,
        }}
      />
      <GridLine
        firstComponent={<ThirdGridLineFirstComponent />}
        secondComponent={<ThirdGridLineSecondComponent />}
        additionalStyle={{
          first: `!overflow-hidden relative`,
        }}
      />
      {/*<PageTransitionEffect2>*/}
      <GridLine
        firstComponent={<FourthGridLineFirstComponent />}
        secondComponent={<FourthGridLineSecondComponent />}
      />
      {/*</PageTransitionEffect2>*/}
      <GridLine
        isInverted
        firstComponent={<FifthGridLineFirstComponent />}
        secondComponent={<FifthGridLineSecondComponent />}
        additionalStyle={{ second: `min-h-[500px]` }}
      />
      <GridLine
        firstComponent={<SixthGridLineFirstComponent />}
        secondComponent={<SixthGridLineSecondComponent />}
      />
      <GridLine
        isInverted
        firstComponent={<ServicesTitleGridLineFirstComponent />}
        secondComponent={<ServicesTitleGridLineSecondComponent />}
        additionalStyle={{
          first: `min-h-[176px] flex items-center`,
          second: `!p-0 overflow-hidden relative`,
        }}
      />
      <GridLine
        hasThreeColumns
        firstComponent={<ServicesGridLineFirstComponent />}
        secondComponent={<ServicesGridLineSecondComponent />}
        thirdComponent={<ServicesGridLineThirdComponent />}
      />
      <GridLine
        firstComponent={<RealisationStepGridLineSecondComponent />}
        secondComponent={<RealisationStepGridLineFirstComponent />}
        additionalStyle={{
          first: `!p-0 overflow-hidden relative`,
        }}
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepOneGridLineFirstComponent />}
        secondComponent={<RealisationStepOneGridLineSecondComponent />}
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepTwoGridLineFirstComponent />}
        secondComponent={<RealisationStepTwoGridLineSecondComponent />}
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepThreeGridLineFirstComponent />}
        secondComponent={<RealisationStepThreeGridLineSecondComponent />}
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepFourGridLineFirstComponent />}
        secondComponent={<RealisationStepFourGridLineSecondComponent />}
      />
      <GridLine
        isInverted
        firstComponent={<ContactHeading />}
        secondComponent={<ContactForm />}
      />
    </PageWrapper>
  );
}
