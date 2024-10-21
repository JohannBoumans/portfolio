import { Text } from '../../../components/server/text/Text';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';
import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';

type Props = {
  language: Language;
};

export async function AboutFirstGridLineFirstComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text as="h1" size="5xl" additionalStyle="font-bold">
        {translate(`about_page.heading`)}
      </Text>
    </div>
  );
}

export function AboutFirstGridLineSecondComponent() {
  return (
    <TopographySvg variant="two" additionalStyle="!w-[2800px] !h-[2800px]" />
  );
  // return (
  //   <div className="relative">
  //     <Image
  //       src="/images/about-1.png"
  //       alt="Picture of a person coding"
  //       width={1440}
  //       height={900}
  //       additionalStyle="w-full h-auto"
  //     />
  //     <div
  //       className="absolute top-0 left-0 z-10 w-full h-full"
  //       style={{
  //         background: `linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 97%)`,
  //       }}
  //     />
  //   </div>
  // );
}
