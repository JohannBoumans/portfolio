import { ReactNode } from 'react';
import { Country, Language, Locale } from './config';

type AdditionalParams = Record<string, string>;

export type PageParams<P extends AdditionalParams = AdditionalParams> = P & {
  locale: string | undefined;
};

export type PageProps<P extends AdditionalParams = AdditionalParams> = {
  params: PageParams<P>;
  searchParams: SearchParams;
};

export type LayoutProps<P extends AdditionalParams = AdditionalParams> = {
  children: ReactNode;
  params: PageParams<P>;
};

export type TemplateLayoutProps = {
  children: ReactNode;
  language: Language;
  locale: Locale;
};

export type TemplatePageProps = {
  country: Country;
  language: Language;
  locale: Locale;
  slug: string | null;
  searchParams: SearchParams;
};

export type SearchParams = Record<string, string>;
