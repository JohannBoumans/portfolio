import { Text } from '../../../components/server/text/Text';
import { ParticleAnimation } from '../../../components/client/particles/Particles';

export function ThirdGridLineFirstComponent() {
  return <ParticleAnimation height={238} />;
}

export function ThirdGridLineSecondComponent() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        Qui suis-je ?
      </Text>
      <Text size="lg" additionalStyle="font-bold">
        Développeur front-end passionné, je m'engage à relever chaque défi avec
        persévérance pour créer des solutions qui répondent aux attentes des
        clients, tout en cultivant mes compétences au sein de projets
        dynamiques.
      </Text>
    </div>
  );
}
