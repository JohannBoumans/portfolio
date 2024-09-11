import { ComponentWrapper } from '../../../../components/server/component-wrapper/ComponentWrapper';
import AboutPage from '../../../../templates/about-page/AboutPage';
import { PageProps } from '../../../../common/navigation/types/page';

export async function generateMetadata() {
  // return _generateMetadata(`Skills`);
  return {
    title: `About Page`,
    description: `About Page description`,
  };
}

export default async function AboutPageRoot(props: PageProps) {
  return <ComponentWrapper component={AboutPage} props={props} />;
}
