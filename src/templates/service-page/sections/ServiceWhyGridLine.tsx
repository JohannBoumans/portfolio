import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';
import { Text } from '../../../components/server/text/Text';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';

type Props = {
  slug: string | null;
  language: Language;
};

export async function ServiceWhyGridLineFirstComponent(props: Props) {
  const { language, slug } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text
        as="h2"
        size="4xl"
        additionalStyle="font-bold mb-4"
        colorScheme="red"
      >
        {translate(`service_page.${slug}.why.heading`)}
      </Text>
      <Text size="xl" additionalStyle="font-bold mb-2" colorScheme="default">
        {translate(`service_page.${slug}.why.text.first`)}
      </Text>
      <Text size="xl" additionalStyle="font-bold" colorScheme="default">
        {translate(`service_page.${slug}.why.text.second`)}
      </Text>
    </div>
  );
}

export function ServiceWhyGridLineSecondComponent() {
  return <TopographySvg additionalStyle="w-[2200px] h-[2200px] pr-1" />;
}
