import { Text } from '../../../components/server/text/Text';
import { ParticleAnimation } from '../../../components/client/particles/Particles';

export function RealisationStepGridLineFirstComponent() {
  return (
    <div>
      <Text as="h2" size="3xl" additionalStyle="font-bold" colorScheme="red">
        Quelles sont les différentes étapes de conception ?
      </Text>
    </div>
  );
}

export function RealisationStepGridLineSecondComponent() {
  return (
    <div>
      <ParticleAnimation height={176} />
    </div>
  );
}
