import { Text } from '../../../components/server/text/Text';
import { ParticleAnimation } from '../../../components/client/particles/Particles';

export function ServicesTitleGridLineFirstComponent() {
  return (
    <div>
      <Text as="h2" size="4xl" additionalStyle="font-bold" colorScheme="red">
        Mes services
      </Text>
    </div>
  );
}

export function ServicesTitleGridLineSecondComponent() {
  return <ParticleAnimation height={176} />;
}
