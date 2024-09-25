import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';
import { Image } from '../../../components/client/image/Image';
import { Carousel } from '../../../components/client/carousel/Carousel';

type Props = {
  language: Language;
  slug: string | null;
};

const projectsImages: { [key: string]: string[] } = {
  hedda: [
    `/images/hedda/hedda-1.png`,
    `/images/hedda/hedda-2.png`,
    `/images/hedda/hedda-3.png`,
    `/images/hedda/hedda-4.png`,
    `/images/hedda/hedda-5.png`,
    `/images/hedda/hedda-6.png`,
    `/images/hedda/hedda-7.png`,
    `/images/hedda/hedda-8.png`,
    `/images/hedda/hedda-9.png`,
  ],
  guilmin: [
    `/images/guilmin/guilmin-1.png`,
    `/images/guilmin/guilmin-2.png`,
    `/images/guilmin/guilmin-3.png`,
    `/images/guilmin/guilmin-4.png`,
    `/images/guilmin/guilmin-5.png`,
    `/images/guilmin/guilmin-6.png`,
    `/images/guilmin/guilmin-7.png`,
  ],
  gleamm: [
    `/images/gleamm/gleamm-1.png`,
    `/images/gleamm/gleamm-2.png`,
    `/images/gleamm/gleamm-3.png`,
    `/images/gleamm/gleamm-4.png`,
  ],
  aboutgreen: [
    `/images/aboutgreen/aboutgreen-1.png`,
    `/images/aboutgreen/aboutgreen-2.png`,
    `/images/aboutgreen/aboutgreen-3.png`,
    `/images/aboutgreen/aboutgreen-4.png`,
    `/images/aboutgreen/aboutgreen-5.png`,
    `/images/aboutgreen/aboutgreen-6.png`,
    `/images/aboutgreen/aboutgreen-7.png`,
    `/images/aboutgreen/aboutgreen-8.png`,
  ],
};

export async function ProjectSecondGridLineFirstComponent(props: Props) {
  const { language, slug } = props;
  const { translate } = await getIntl(language);

  const projectName = translate(`project_page.projects.${slug}.name`);
  const images = slug ? projectsImages[slug] : [];

  const slides = images.map((image, key) => (
    <div key={key}>
      <Image
        src={image}
        alt={`${projectName} website image`}
        width={3000}
        height={2000}
        additionalStyle="w-full h-auto"
      />
    </div>
  ));

  return (
    <div className="2xl:min-h-[620px]">
      <Carousel slides={slides} />
    </div>
  );
}
