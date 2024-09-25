import { Locale } from '../../navigation/types/config';

export function mapLocaleToUrlLocale(locale: Locale) {
  return locale.toLowerCase();
}
