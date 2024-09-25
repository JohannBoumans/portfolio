import { Text } from '../../../components/server/text/Text';
import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';

export function RealisationStepOneGridLineFirstComponent() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Text as="h2" size="9xl" additionalStyle="font-bold" colorScheme="red">
        1.
      </Text>
    </div>
  );
}

type Props = {
  language: Language;
};

export async function RealisationStepOneGridLineSecondComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);

  const stepOneFeatures = [
    translate(`home_page.realisation_steps.step_one.first_feature`),
    translate(`home_page.realisation_steps.step_one.second_feature`),
    translate(`home_page.realisation_steps.step_one.third_feature`),
  ];

  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-4"
        colorScheme="red"
      >
        {translate(`home_page.realisation_steps.step_one.heading`)}
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
