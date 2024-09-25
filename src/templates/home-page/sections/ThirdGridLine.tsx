import { Text } from '../../../components/server/text/Text';
import { Button } from '../../../components/server/button/Button';
import { Link } from '../../../common/navigation/components/Link';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';
import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';

export function ThirdGridLineFirstComponent() {
  return <TopographySvg />;
}

type Props = {
  language: Language;
};

export async function ThirdGridLineSecondComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        {translate(`home_page.about.heading`)}
      </Text>
      <Text size="lg" additionalStyle="font-bold mb-4">
        {translate(`home_page.about.text`)}
      </Text>
      <Link to="/about">
        <Button
          rightIcon="arrow-right"
          // additionalStyle={{ rightIcon: `rotate-45` }}
        >
          {translate(`home_page.about.button`)}
        </Button>
      </Link>
    </div>
  );
}
