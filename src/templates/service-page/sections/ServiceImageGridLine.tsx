import { getIntl } from '../../../common/intl/utils/get-intl';
import { Language } from '../../../common/navigation/types/config';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';
import { Image } from '../../../components/client/image/Image';

type Props = {
  slug: string | null;
  language: Language;
};

export function ServiceImageGridLineFirstComponent() {
  return <TopographySvg additionalStyle="w-[2200px] h-[2200px] pr-1" />;
}

export async function ServiceImageGridLineSecondComponent(props: Props) {
  const { language, slug } = props;
  const { translate } = await getIntl(language);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src={translate(`service_page.${slug}.image`)}
        alt="Service illustration"
        width={1000}
        height={1000}
        additionalStyle="w-[300px] h-[300px]"
      />
    </div>
  );
}
