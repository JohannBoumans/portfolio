'use client';

import { ReactNode, useMemo, useState } from 'react';
import { Locale } from '../config';
import {
  IntlStoreContextProvider,
  IntlStoreContextType,
} from '../context/intl-store-context';
import { mapLocaleToCountry } from '../utils/map-locale-to-country';
import { mapLocaleToLanguage } from '../utils/map-locale-to-language';
import { mapLocaleToUrlLocale } from '../utils/map-locale-to-url-locale';

type Props = {
  children: ReactNode;
  defaultLocale: Locale;
};

export function IntlProvider(props: Props) {
  const { children, defaultLocale } = props;
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  function switchLocale(locale: Locale) {
    setLocale(locale);
  }
  const contextValue = useMemo<IntlStoreContextType>(
    () => ({
      country: mapLocaleToCountry(locale),
      language: mapLocaleToLanguage(locale),
      locale,
      urlLocale: mapLocaleToUrlLocale(locale),
      switchLocale,
    }),
    [locale],
  );
  return (
    <IntlStoreContextProvider value={contextValue}>
      {children}
    </IntlStoreContextProvider>
  );
}
