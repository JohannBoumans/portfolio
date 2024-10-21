import { PageWrapper } from '../page-wrapper/PageWrapper';
import { TemplatePageProps } from '../../common/navigation/types/page';
import { GridLine } from '../../components/client/grid-line/GridLine';
import {
  AboutFirstGridLineFirstComponent,
  AboutFirstGridLineSecondComponent,
} from './sections/AboutFirstGridLine';
import {
  AboutSecondGridLineFirstComponent,
  AboutSecondGridLineSecondComponent,
} from './sections/AboutSecondGridLine';
import {
  AboutThirdGridLineFirstComponent,
  AboutThirdGridLineSecondComponent,
} from './sections/AboutThirdGridLine';
import { AboutFourthGridLineSecondComponent } from './sections/AboutFourthGridLine';

export default async function AboutPage(props: TemplatePageProps) {
  const { country, language, locale } = props;
  return (
    <PageWrapper language={language}>
      {/*<TrackPageView pageName={Analytics.Pages.homePage} />*/}
      <GridLine
        isInverted
        firstComponent={
          <AboutFirstGridLineFirstComponent language={language} />
        }
        secondComponent={<AboutFirstGridLineSecondComponent />}
        additionalStyle={{
          second: `!p-0 overflow-hidden relative cell-transparent`,
        }}
      />
      <GridLine
        isInverted
        firstComponent={<AboutSecondGridLineFirstComponent />}
        secondComponent={
          <AboutSecondGridLineSecondComponent language={language} />
        }
        additionalStyle={{
          cellContainer: `!flex-col-reverse`,
          first: `!p-0 !pr-1 overflow-hidden relative cell-transparent min-h-[200px]`,
        }}
      />
      <GridLine
        isInverted
        firstComponent={
          <AboutThirdGridLineFirstComponent language={language} />
        }
        secondComponent={<AboutThirdGridLineSecondComponent />}
        additionalStyle={{ second: `hidden md:block min-h-[500px]` }}
      />
      <GridLine
        firstComponent={<AboutFourthGridLineSecondComponent />}
        additionalStyle={{
          first: `!p-0 overflow-hidden relative cell-transparent min-h-[200px]`,
        }}
      />
      {/*<GridLine*/}
      {/*  firstComponent={<AboutFourthGridLineFirstComponent />}*/}
      {/*  secondComponent={<AboutFourthGridLineSecondComponent />}*/}
      {/*  additionalStyle={{*/}
      {/*    second: `!p-0 overflow-hidden relative cell-transparent`,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<GridLine*/}
      {/*  isInverted*/}
      {/*  firstComponent={<AboutFifthGridLineFirstComponent />}*/}
      {/*  secondComponent={<AboutFifthGridLineSecondComponent />}*/}
      {/*  additionalStyle={{*/}
      {/*    first: `!p-0 overflow-hidden relative cell-transparent`,*/}
      {/*  }}*/}
      {/*/>*/}
    </PageWrapper>
  );
}
