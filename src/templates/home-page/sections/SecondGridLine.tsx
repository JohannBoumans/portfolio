'use client';

import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';
import { Language } from '../../../common/navigation/types/config';
import { useTypingText } from '../../../hooks/use-typing-text/useTypingText';
import { Text } from '../../../components/server/text/Text';
import { useIntl } from '../../../common/intl/hooks/use-intl';

type Props = {
  language: Language;
};

export function SecondGridLineFirstComponent(props: Props) {
  const { language } = props;
  const { translate } = useIntl();
  const { text } = useTypingText(
    [
      translate(`home_page.primary_heading.second`),
      translate(`home_page.primary_heading.third`),
    ],
    100,
    10,
  );
  return (
    <div>
      <Text as="h1" size="6xl" additionalStyle="font-bold">
        {translate(`home_page.primary_heading.first`)}
      </Text>
      <Text
        as="h1"
        // size="6xl"
        additionalStyle="font-bold !text-3xl sm:!text-4xl lg:!text-6xl"
      >
        {text}
      </Text>
    </div>
  );
}

export function SecondGridLineSecondComponent() {
  return (
    <TopographySvg variant="two" additionalStyle="!w-[2800px] !h-[2800px]" />
  );
}
