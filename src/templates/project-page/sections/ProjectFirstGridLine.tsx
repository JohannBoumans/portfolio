import { Text } from '../../../components/server/text/Text';
import { getIntl } from '../../../common/intl/utils/get-intl';
import { Language } from '../../../common/navigation/types/config';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';
import { Button } from '../../../components/server/button/Button';
import { Link } from '../../../common/navigation/components/Link';

type Props = {
  language: Language;
  slug: string | null;
};

export async function ProjectFirstGridLineFirstComponent(props: Props) {
  const { language, slug } = props;
  const { translate } = await getIntl(language);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Text as="h1" size="5xl" additionalStyle="font-bold mb-2">
        {translate(`project_page.projects.${slug}.name`)}
      </Text>
      <Link to={translate(`project_page.projects.${slug}.link.path`)}>
        <Button rightIcon="arrow-right">
          {translate(`project_page.projects.${slug}.link.label`)}
        </Button>
      </Link>
    </div>
  );
}

export function ProjectFirstGridLineSecondComponent() {
  return <TopographySvg additionalStyle="w-[1800px] h-[1800px]" />;
}
