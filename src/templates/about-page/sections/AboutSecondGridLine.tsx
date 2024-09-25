import { Text } from '../../../components/server/text/Text';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';
import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';

export function AboutSecondGridLineFirstComponent() {
  return <TopographySvg additionalStyle="w-[3400px] h-[3400px]" />;
}

type Props = {
  language: Language;
};

export async function AboutSecondGridLineSecondComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text as="h1" size="xl" additionalStyle="font-semibold">
        {translate(`about_page.text.first`)}
      </Text>
    </div>
  );
}
