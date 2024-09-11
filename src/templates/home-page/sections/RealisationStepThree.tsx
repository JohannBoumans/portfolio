import { Text } from '../../../components/server/text/Text';

export function RealisationStepThreeGridLineFirstComponent() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Text as="h2" size="9xl" additionalStyle="font-bold" colorScheme="red">
        3.
      </Text>
    </div>
  );
}

export function RealisationStepThreeGridLineSecondComponent() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-4"
        colorScheme="red"
      >
        Développement et intégration
      </Text>
      <ul className="list-disc list-inside">
        {stepThreeFeatures.map((feature, key) => (
          <Text as="li" key={key} size="lg" additionalStyle="list-item mb-2">
            {feature}
          </Text>
        ))}
      </ul>
    </div>
  );
}

const stepThreeFeatures = [
  `Développement du site web (vitrine ou e-commerce) en utilisant des technologies adaptées aux besoins du client`,
  `Intégration d'un backoffice pour la gestion de contenu simplifiée et autonome.`,
];
