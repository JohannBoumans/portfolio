import { Text } from '../../../components/server/text/Text';

export function RealisationStepTwoGridLineFirstComponent() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Text as="h2" size="9xl" additionalStyle="font-bold" colorScheme="red">
        2.
      </Text>
    </div>
  );
}

export function RealisationStepTwoGridLineSecondComponent() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-4"
        colorScheme="red"
      >
        Conception et design
      </Text>
      <ul className="list-disc list-inside">
        {stepTwoFeatures.map((feature, key) => (
          <Text as="li" key={key} size="lg" additionalStyle="list-item mb-2">
            {feature}
          </Text>
        ))}
      </ul>
    </div>
  );
}

const stepTwoFeatures = [
  `Création d'une maquette personnalisée pour valider l'apparence du site.`,
  `Choix des couleurs, typographies, et mise en page en fonction de votre identité visuelle.`,
];
