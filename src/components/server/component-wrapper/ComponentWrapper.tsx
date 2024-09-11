import { notFound } from 'next/navigation';
import { mapUrlLocaleToLocale } from '../../../common/intl/utils/map-url-locale-to-locale';
import { mapLocaleToCountry } from '../../../common/intl/utils/map-locale-to-country';
import { mapLocaleToLanguage } from '../../../common/intl/utils/map-locale-to-language';
import {
  PageProps,
  TemplatePageProps,
} from '../../../common/navigation/types/page';

type Props = {
  component: (props: any) => Promise<any>;
  props: PageProps;
};

export async function ComponentWrapper(props: Props) {
  const { component: Component, props: componentProps } = props;
  if (!Component) {
    return notFound();
  }
  const { params, searchParams } = componentProps;
  const { locale: urlLocale, slug } = params;
  const locale = mapUrlLocaleToLocale(urlLocale);
  const country = mapLocaleToCountry(locale);
  const templatePageProps = {
    country,
    language: mapLocaleToLanguage(locale),
    locale,
    slug: slug ?? null,
    searchParams,
  } satisfies TemplatePageProps;
  return (
    <>
      {/*<AnalyticsParamsProvider searchParams={getSearchParams(searchParams)} />*/}
      <Component {...templatePageProps} />
    </>
  );
}

// function getSearchParams(
//   searchParams: SearchParams = {},
// ): Record<string, string> {
//   let _ = {};
//   for (const [key, value] of Object.entries(searchParams)) {
//     _ = {
//       ..._,
//       [key]: value,
//     };
//   }
//   return _;
// }
