import { Text } from '../../../components/server/text/Text';

export function RealisationStepFourGridLineFirstComponent() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Text as="h2" size="9xl" additionalStyle="font-bold" colorScheme="red">
        4.
      </Text>
    </div>
  );
}

export function RealisationStepFourGridLineSecondComponent() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-4"
        colorScheme="red"
      >
        Lancement et maintenance
      </Text>
      <ul className="list-disc list-inside">
        {stepFourFeatures.map((feature, key) => (
          <Text as="li" key={key} size="lg" additionalStyle="list-item mb-2">
            {feature}
          </Text>
        ))}
      </ul>
    </div>
  );
}

const stepFourFeatures = [
  `Mise en ligne du site et suivi des performances.`,
  `Formation à la gestion du contenu si besoin.`,
  `Proposition de services de maintenance et d'évolution du site en fonction des besoins futurs.`,
];
