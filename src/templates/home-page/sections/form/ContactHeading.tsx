import { Text } from '../../../../components/server/text/Text';

export function ContactHeading() {
  return (
    <div>
      <Text
        as="h2"
        size="3xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        Envie de réaliser votre projet ?
      </Text>
      <Text as="h2" size="lg" additionalStyle="font-bold">
        Décrivez moi votre projet, je vous répondrais dans les plus brefs délais
        !
      </Text>
    </div>
  );
}
