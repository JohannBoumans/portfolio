import { Text } from '../../../components/server/text/Text';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';
import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';

type Props = {
  language: Language;
};

export async function ServicesTitleGridLineFirstComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text as="h2" size="4xl" additionalStyle="font-bold" colorScheme="red">
        {translate(`home_page.services.heading`)}
      </Text>
    </div>
  );
}

export function ServicesTitleGridLineSecondComponent() {
  // return <ParticleAnimation height={176} />;
  return (
    <TopographySvg variant="three" additionalStyle="!w-[2600px] !h-[2600px]" />
  );
}
