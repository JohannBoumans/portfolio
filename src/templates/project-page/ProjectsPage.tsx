import { PageWrapper } from '../page-wrapper/PageWrapper';
import { TemplatePageProps } from '../../common/navigation/types/page';
import { GridLine } from '../../components/client/grid-line/GridLine';
import {
  ProjectFirstGridLineFirstComponent,
  ProjectFirstGridLineSecondComponent,
} from './sections/ProjectFirstGridLine';
import { ProjectSecondGridLineFirstComponent } from './sections/ProjectSecondGridLine';
import { ProjectThirdGridLineFirstComponent } from './sections/ProjectThirdGridLine';

export default async function ProjectsPage(props: TemplatePageProps) {
  const { country, language, locale, slug } = props;
  return (
    <PageWrapper language={language}>
      {/*<TrackPageView pageName={Analytics.Pages.homePage} />*/}
      <GridLine
        isInverted
        firstComponent={
          <ProjectFirstGridLineFirstComponent language={language} slug={slug} />
        }
        secondComponent={<ProjectFirstGridLineSecondComponent />}
        additionalStyle={{
          second: `!p-0 overflow-hidden relative cell-transparent`,
        }}
      />
      <GridLine
        firstComponent={
          <ProjectSecondGridLineFirstComponent
            language={language}
            slug={slug}
          />
        }
        additionalStyle={{ first: `!p-[1px] !pb-0 !overflow-hidden` }}
      />
      <GridLine
        firstComponent={
          <ProjectThirdGridLineFirstComponent language={language} slug={slug} />
        }
      />
    </PageWrapper>
  );
}
