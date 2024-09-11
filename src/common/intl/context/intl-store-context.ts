import { createContext } from 'react';
import {
  Country,
  defaultCountry,
  defaultLanguage,
  defaultLocale,
  Language,
  Locale,
} from '../../navigation/types/config';

export type IntlStoreContextType = {
  country: Country;
  language: Language;
  locale: Locale;
  urlLocale: string;
  switchLocale: (locale: Locale) => void;
};

export const IntlStoreContext = createContext<IntlStoreContextType>({
  country: defaultCountry,
  language: defaultLanguage,
  locale: defaultLocale,
  urlLocale: defaultLocale.toLowerCase(),
  switchLocale: () => undefined,
});

export const IntlStoreContextProvider = IntlStoreContext.Provider;
