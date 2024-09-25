import { PageProps } from '../../../common/navigation/types/page';
import { availableLocale } from '../../../common/navigation/types/config';
import HomePage from '../../../templates/home-page/HomePage';
import { ComponentWrapper } from '../../../components/server/component-wrapper/ComponentWrapper';

export async function generateMetadata() {
  // return _generateMetadata(`Home`);
  return {
    title: `Page`,
    description: `Page description`,
  };
}

export async function generateStaticParams() {
  return availableLocale.map((locale) => ({ locale: locale.toLowerCase() }));
}

export default function HomePageRoot(props: PageProps) {
  return <ComponentWrapper component={HomePage} props={props} />;
}
