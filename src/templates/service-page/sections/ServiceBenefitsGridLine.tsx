import { getIntl } from '../../../common/intl/utils/get-intl';
import { Text } from '../../../components/server/text/Text';
import { Language } from '../../../common/navigation/types/config';
import { ServiceBenefit } from '../../../components/client/service-benefit/ServiceBenefit';
import { Icons } from '../../../components/server/icon/Icon';

type Props = {
  slug: string | null;
  language: Language;
};

export async function ServiceBenefitsGridLineFirstComponent(props: Props) {
  const { language, slug } = props;
  const { translate } = await getIntl(language);

  const benefits = [
    {
      icon: translate(`service_page.${slug}.benefits.first.icon`) as Icons,
      heading: translate(`service_page.${slug}.benefits.first.heading`),
      text: translate(`service_page.${slug}.benefits.first.text`),
    },
    {
      icon: translate(`service_page.${slug}.benefits.second.icon`) as Icons,
      heading: translate(`service_page.${slug}.benefits.second.heading`),
      text: translate(`service_page.${slug}.benefits.second.text`),
    },
    {
      icon: translate(`service_page.${slug}.benefits.third.icon`) as Icons,
      heading: translate(`service_page.${slug}.benefits.third.heading`),
      text: translate(`service_page.${slug}.benefits.third.text`),
    },
    {
      icon: translate(`service_page.${slug}.benefits.fourth.icon`) as Icons,
      heading: translate(`service_page.${slug}.benefits.fourth.heading`),
      text: translate(`service_page.${slug}.benefits.fourth.text`),
    },
    {
      icon: translate(`service_page.${slug}.benefits.fifth.icon`) as Icons,
      heading: translate(`service_page.${slug}.benefits.fifth.heading`),
      text: translate(`service_page.${slug}.benefits.fifth.text`),
    },
    {
      icon: translate(`service_page.${slug}.benefits.sixth.icon`) as Icons,
      heading: translate(`service_page.${slug}.benefits.sixth.heading`),
      text: translate(`service_page.${slug}.benefits.sixth.text`),
    },
  ];

  return (
    <div>
      <Text
        as="h2"
        size="4xl"
        additionalStyle="font-bold mb-10"
        colorScheme="red"
      >
        {translate(`service_page.${slug}.benefits.heading`)}
      </Text>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, key) => (
          <ServiceBenefit key={key} {...benefit} />
        ))}
      </ul>
    </div>
  );
}
