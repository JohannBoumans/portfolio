import { PageWrapper } from '../page-wrapper/PageWrapper';
import { TemplatePageProps } from '../../common/navigation/types/page';
import { GridLine } from '../../components/client/grid-line/GridLine';
import {
  ServiceWhyGridLineFirstComponent,
  ServiceWhyGridLineSecondComponent,
} from './sections/ServiceWhyGridLine';
import { ServiceBenefitsGridLineFirstComponent } from './sections/ServiceBenefitsGridLine';
import {
  ServiceImageGridLineFirstComponent,
  ServiceImageGridLineSecondComponent,
} from './sections/ServiceImageGridLine';

export default async function ServicePage(props: TemplatePageProps) {
  const { country, language, locale, slug } = props;
  return (
    <PageWrapper language={language}>
      {/*<TrackPageView pageName={Analytics.Pages.homePage} />*/}
      <GridLine
        firstComponent={
          <ServiceWhyGridLineFirstComponent slug={slug} language={language} />
        }
        secondComponent={<ServiceWhyGridLineSecondComponent />}
        additionalStyle={{
          second: `!p-0 overflow-hidden relative cell-transparent`,
        }}
      />
      <GridLine
        firstComponent={<ServiceImageGridLineFirstComponent />}
        secondComponent={
          <ServiceImageGridLineSecondComponent
            slug={slug}
            language={language}
          />
        }
        additionalStyle={{
          first: `!p-0 overflow-hidden relative cell-transparent min-h-[250px]`,
          second: `hidden lg:flex`,
        }}
      />
      <GridLine
        firstComponent={
          <ServiceBenefitsGridLineFirstComponent
            slug={slug}
            language={language}
          />
        }
        additionalStyle={{ first: `py-10` }}
      />
    </PageWrapper>
  );
}
