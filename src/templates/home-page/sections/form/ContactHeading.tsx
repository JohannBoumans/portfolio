import { Text } from '../../../../components/server/text/Text';
import { useIntl } from '../../../../common/intl/hooks/use-intl';

export function ContactHeading() {
  const { translate } = useIntl();
  return (
    <div>
      <Text
        as="h2"
        size="3xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        {translate(`contact_section.heading`)}
      </Text>
      <Text size="lg" additionalStyle="font-bold">
        {translate(`contact_section.text`)}
      </Text>
    </div>
  );
}
