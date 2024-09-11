import {
  availableLocale,
  defaultCountry,
  defaultLanguage,
  defaultLocale,
  Locale,
} from '../../navigation/types/config';

export function mapUrlLocaleToLocale(urlLocale: string | undefined): Locale {
  if (!urlLocale) {
    return defaultLocale;
  }
  const parts = urlLocale.split(`-`);
  if (parts.length < 2) {
    return defaultLocale;
  }
  const language = parts[0] ?? defaultLanguage;
  const country = parts[1] ?? defaultCountry;
  const locale = `${language}-${country.toUpperCase()}` as Locale;
  if (availableLocale.includes(locale)) {
    return locale;
  }
  return defaultLocale;
}
