'use client';

import { mapUrlLocaleToLocale } from '../../../../common/intl/utils/map-url-locale-to-locale';
import { mapLocaleToLanguage } from '../../../../common/intl/utils/map-locale-to-language';
import { MainLayout } from '../../../../components/server/main-layout/MainLayout';
import {
  LayoutProps,
  TemplateLayoutProps,
} from '../../../../common/navigation/types/page';

export default function SkillsLayoutRoot(props: LayoutProps) {
  const { children, params } = props;
  const { locale: urlLocale } = params;
  const locale = mapUrlLocaleToLocale(urlLocale);
  const templateLayoutProps = {
    children,
    language: mapLocaleToLanguage(locale),
    locale,
  } satisfies TemplateLayoutProps;
  return <MainLayout {...templateLayoutProps}>{children}</MainLayout>;
}
