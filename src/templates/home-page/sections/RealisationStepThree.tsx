import { Text } from '../../../components/server/text/Text';
import { getIntl } from '../../../common/intl/utils/get-intl';
import { Language } from '../../../common/navigation/types/config';

export function RealisationStepThreeGridLineFirstComponent() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Text as="h2" size="9xl" additionalStyle="font-bold" colorScheme="red">
        3.
      </Text>
    </div>
  );
}

type Props = {
  language: Language;
};

export async function RealisationStepThreeGridLineSecondComponent(
  props: Props,
) {
  const { language } = props;
  const { translate } = await getIntl(language);

  const stepThreeFeatures = [
    translate(`home_page.realisation_steps.step_three.first_feature`),
    translate(`home_page.realisation_steps.step_three.second_feature`),
  ];
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-4"
        colorScheme="red"
      >
        {translate(`home_page.realisation_steps.step_three.heading`)}
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
