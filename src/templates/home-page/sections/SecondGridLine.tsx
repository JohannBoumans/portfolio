import { Text } from '../../../components/server/text/Text';
import { ParticleAnimation } from '../../../components/client/particles/Particles';

export function SecondGridLineFirstComponent() {
  return (
    <div>
      <Text as="h1" size="7xl" additionalStyle="font-bold">
        Développeur
      </Text>
      <Text as="h1" size="7xl" additionalStyle="font-bold">
        Frontend
      </Text>
    </div>
  );
}

export function SecondGridLineSecondComponent() {
  return <ParticleAnimation height={271} />;
}
