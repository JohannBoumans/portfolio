import { Text } from '../../../components/server/text/Text';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';
import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';

type Props = {
  language: Language;
};

export async function RealisationStepGridLineFirstComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text as="h2" size="3xl" additionalStyle="font-bold" colorScheme="red">
        {translate(`home_page.realisation_steps.heading`)}
      </Text>
    </div>
  );
}

export function RealisationStepGridLineSecondComponent() {
  return <TopographySvg additionalStyle="w-[4200px] h-[4200px]" />;
}
