import { Text } from '../../../components/server/text/Text';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';
import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';

type Props = {
  language: Language;
};

export async function FourthGridLineFirstComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text size="4xl" additionalStyle="font-semibold">
        {translate(`home_page.goal.heading.first`)}
      </Text>
      <Text size="4xl" additionalStyle="font-semibold">
        {translate(`home_page.goal.heading.second`)}
      </Text>
      <Text size="4xl" additionalStyle="font-semibold mb-8">
        {translate(`home_page.goal.heading.third`)}
      </Text>
      <Text size="lg" additionalStyle="font-semibold">
        {translate(`home_page.goal.text`)}
      </Text>
    </div>
  );
}

export function FourthGridLineSecondComponent() {
  return <TopographySvg additionalStyle="w-[3400px] h-[3400px]" />;
}
