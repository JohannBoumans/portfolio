import { Text } from '../../../components/server/text/Text';

export function RealisationStepOneGridLineFirstComponent() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Text as="h2" size="9xl" additionalStyle="font-bold" colorScheme="red">
        1.
      </Text>
    </div>
  );
}

export function RealisationStepOneGridLineSecondComponent() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-4"
        colorScheme="red"
      >
        Analyse des besoins
      </Text>
      <ul className="list-disc list-inside">
        {stepOneFeatures.map((feature, key) => (
          <Text as="li" key={key} size="lg" additionalStyle="list-item mb-2">
            {feature}
          </Text>
        ))}
      </ul>
    </div>
  );
}

const stepOneFeatures = [
  `Analyse de vos besoins et objectifs.`,
  `Proposition de solutions adaptées à votre activité (vitrine ou e-commerce).`,
  `Définition du cahier des charges.`,
];
