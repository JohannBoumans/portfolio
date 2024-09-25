import { ComponentWrapper } from '../../../../../components/server/component-wrapper/ComponentWrapper';
import { PageProps } from '../../../../../common/navigation/types/page';
import ProjectsPage from '../../../../../templates/project-page/ProjectsPage';

export async function generateMetadata() {
  // return _generateMetadata(`Home`);
  return {
    title: `Page`,
    description: `Page description`,
  };
}

export default async function ProjectsPageRoot(props: PageProps) {
  return <ComponentWrapper component={ProjectsPage} props={props} />;
}
