import { Text } from '../../../components/server/text/Text';
import {
  Project,
  Props as ProjectType,
} from '../../../components/client/project/Project';
import { getIntl } from '../../../common/intl/utils/get-intl';
import { Language } from '../../../common/navigation/types/config';

type Props = {
  language: Language;
};

const projectsToDisplay = [`hedda`, `gleamm`, `guilmin`, `aboutgreen`];

export async function SixthGridLineFirstComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);

  const projects: ProjectType[] = projectsToDisplay.map((slug) => ({
    title: translate(`project_page.projects.${slug}.name`),
    image: {
      src: translate(`project_page.projects.${slug}.images.first`),
      alt: `${translate(`project_page.projects.${slug}.name`)} website screen capture`,
    },
    year: translate(`project_page.projects.${slug}.year`),
    path: `/projects/${slug}`,
  }));

  return (
    <div>
      {projects.map((project, key) => (
        <Project
          key={key}
          title={project.title}
          year={project.year}
          image={project.image}
          path={project.path}
        />
      ))}
    </div>
  );
}

export async function SixthGridLineSecondComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text
        as="h3"
        size="2xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        {translate(`home_page.projects.heading`)}
      </Text>
      <Text size="lg" additionalStyle="font-bold">
        {translate(`home_page.projects.text`)}
      </Text>
    </div>
  );
}
