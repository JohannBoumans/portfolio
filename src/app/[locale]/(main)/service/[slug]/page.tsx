import { ComponentWrapper } from '../../../../../components/server/component-wrapper/ComponentWrapper';
import { PageProps } from '../../../../../common/navigation/types/page';
import ServicePage from '../../../../../templates/service-page/ServicePage';

export async function generateMetadata() {
  // return _generateMetadata(`Home`);
  return {
    title: `Page`,
    description: `Page description`,
  };
}

export default async function ServicesPageRoot(props: PageProps) {
  return <ComponentWrapper component={ServicePage} props={props} />;
}
