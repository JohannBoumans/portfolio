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
  const words = [
    translate(`home_page.primary_heading.first`),
    translate(`home_page.primary_heading.second`),
  ];
  const secondWords = [translate(`home_page.primary_heading.second`)];
  return (
    <div>
      <Text as="h1" size="6xl" additionalStyle="font-bold">
        {translate(`home_page.primary_heading.first`)}
      </Text>
      <Text as="h1" size="6xl" additionalStyle="font-bold">
        {text}
      </Text>
      {/*<TypingWord*/}
      {/*  words={words}*/}
      {/*  colors={[`white`, `white`]}*/}
      {/*  additionalStyle="text-7xl font-bold"*/}
      {/*/>*/}
      {/*<TypingWord*/}
      {/*  words={secondWords}*/}
      {/*  colors={[`white`]}*/}
      {/*  additionalStyle="text-7xl font-bold"*/}
      {/*/>*/}
      {/*<Text as="h1" size="7xl" additionalStyle="font-bold">*/}
      {/*  {translate(`home_page.primary_heading.first`)}*/}
      {/*</Text>*/}
      {/*<Text as="h1" size="7xl" additionalStyle="font-bold">*/}
      {/*  {translate(`home_page.primary_heading.first`)}*/}
      {/*</Text>*/}
    </div>
  );
}

export function SecondGridLineSecondComponent() {
  return <TopographySvg />;
}
