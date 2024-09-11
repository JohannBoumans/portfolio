import { Text } from '../../../components/server/text/Text';
import {
  Project,
  Props as ProjectType,
} from '../../../components/client/project/Project';

const projects: ProjectType[] = [
  {
    title: `Hedda`,
    image: {
      src: `/images/hedda/hedda-1.png`,
      alt: `Hedda website screen capture`,
    },
    path: `/projects/hedda`,
  },
  {
    title: `Gleamm`,
    image: {
      src: `/images/gleamm/gleamm-1.png`,
      alt: `Gleamm website screen capture`,
    },
    path: `/projects/gleamm`,
  },
  {
    title: `About Green`,
    image: {
      src: `/images/aboutgreen/aboutgreen-2.png`,
      alt: `AboutGreen website screen capture`,
    },
    path: `/projects/aboutgreen`,
  },
];

export function SixthGridLineFirstComponent() {
  return (
    <div>
      {projects.map((project, key) => (
        <Project
          key={key}
          title={project.title}
          image={project.image}
          path={project.path}
        />
      ))}
    </div>
  );
}

export function SixthGridLineSecondComponent() {
  return (
    <div>
      <Text size="2xl" additionalStyle="font-bold mb-2" colorScheme="red">
        Projets
      </Text>
      <Text size="lg" additionalStyle="font-bold">
        Développeur front-end passionné, je m'engage à relever chaque défi avec
        persévérance pour créer des solutions qui répondent aux attentes des
      </Text>
    </div>
  );
}
