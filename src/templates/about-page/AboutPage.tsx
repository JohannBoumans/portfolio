import { PageWrapper } from '../page-wrapper/PageWrapper';
import { TemplatePageProps } from '../../common/navigation/types/page';
import { GridLine } from '../../components/client/grid-line/GridLine';
import { SecondGridLineSecondComponent } from '../home-page/sections/SecondGridLine';
import {
  ThirdGridLineFirstComponent,
  ThirdGridLineSecondComponent,
} from '../home-page/sections/ThirdGridLine';
import {
  FourthGridLineFirstComponent,
  FourthGridLineSecondComponent,
} from '../home-page/sections/FourthGridLine';
import {
  FifthGridLineFirstComponent,
  FifthGridLineSecondComponent,
} from '../home-page/sections/FifthGridLine';
import {
  SixthGridLineFirstComponent,
  SixthGridLineSecondComponent,
} from '../home-page/sections/SixthGridLine';
import {
  ServicesTitleGridLineFirstComponent,
  ServicesTitleGridLineSecondComponent,
} from '../home-page/sections/ServicesTitleGridLine';
import {
  ServicesGridLineFirstComponent,
  ServicesGridLineSecondComponent,
  ServicesGridLineThirdComponent,
} from '../home-page/sections/ServicesGridLine';
import {
  RealisationStepGridLineFirstComponent,
  RealisationStepGridLineSecondComponent,
} from '../home-page/sections/RealisationStep';
import {
  RealisationStepOneGridLineFirstComponent,
  RealisationStepOneGridLineSecondComponent,
} from '../home-page/sections/RealisationStepOne';
import {
  RealisationStepTwoGridLineFirstComponent,
  RealisationStepTwoGridLineSecondComponent,
} from '../home-page/sections/RealisationStepTwo';
import {
  RealisationStepThreeGridLineFirstComponent,
  RealisationStepThreeGridLineSecondComponent,
} from '../home-page/sections/RealisationStepThree';
import {
  RealisationStepFourGridLineFirstComponent,
  RealisationStepFourGridLineSecondComponent,
} from '../home-page/sections/RealisationStepFour';
import { ContactHeading } from '../home-page/sections/form/ContactHeading';
import { ContactForm } from '../home-page/sections/form/ContactForm';
import { Text } from '../../components/server/text/Text';

export default async function AboutPage(props: TemplatePageProps) {
  const { country, language, locale } = props;
  return (
    <PageWrapper language={language}>
      {/*<TrackPageView pageName={Analytics.Pages.homePage} />*/}
      <GridLine
        firstComponent={<Text>ABOUT PAGE</Text>}
        secondComponent={<SecondGridLineSecondComponent />}
        additionalStyle={{
          second: `!p-0 overflow-hidden relative`,
        }}
      />
      <GridLine
        firstComponent={<ThirdGridLineFirstComponent />}
        secondComponent={<ThirdGridLineSecondComponent />}
        additionalStyle={{
          first: `!p-0 overflow-hidden relative`,
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
        additionalStyle={{ first: `flex justify-center items-center` }}
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepTwoGridLineFirstComponent />}
        secondComponent={<RealisationStepTwoGridLineSecondComponent />}
        additionalStyle={{ first: `flex justify-center items-center` }}
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepThreeGridLineFirstComponent />}
        secondComponent={<RealisationStepThreeGridLineSecondComponent />}
        additionalStyle={{ first: `flex justify-center items-center` }}
      />
      <GridLine
        isInverted
        firstComponent={<RealisationStepFourGridLineFirstComponent />}
        secondComponent={<RealisationStepFourGridLineSecondComponent />}
        additionalStyle={{ first: `flex justify-center items-center` }}
      />
      <GridLine
        isInverted
        firstComponent={<ContactHeading />}
        secondComponent={<ContactForm />}
      />
    </PageWrapper>
  );
}
