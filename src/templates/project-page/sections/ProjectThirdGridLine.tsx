import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';
import { Text } from '../../../components/server/text/Text';

type Props = {
  language: Language;
  slug: string | null;
};

export async function ProjectThirdGridLineFirstComponent(props: Props) {
  const { language, slug } = props;
  const { translate } = await getIntl(language);

  const description = [
    translate(`project_page.projects.${slug}.description.text.first`),
    translate(`project_page.projects.${slug}.description.text.second`),
    translate(`project_page.projects.${slug}.description.text.third`),
    translate(`project_page.projects.${slug}.description.text.fourth`),
  ];

  return (
    <div>
      <Text
        as="h1"
        size="5xl"
        colorScheme="red"
        additionalStyle="font-bold mb-8"
      >
        {translate(`project_page.projects.${slug}.description.heading`)}
      </Text>
      <div>
        {description.map((item, key) => (
          <Text key={key} size="lg" additionalStyle="mb-4 font-semibold">
            {item}
          </Text>
        ))}
      </div>
    </div>
  );
}
