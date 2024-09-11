import { ComponentWrapper } from '../../../components/server/component-wrapper/ComponentWrapper';
import HomePage from '../../../templates/home-page/HomePage';
import { PageProps } from '../../../common/navigation/types/page';

export async function generateMetadata() {
  // return _generateMetadata(`Home`);
  return {
    title: `Page`,
    description: `Page description`,
  };
}

export default async function HomePageRoot(props: PageProps) {
  return <ComponentWrapper component={HomePage} props={props} />;
}
