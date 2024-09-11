import { mapLocaleToLanguage } from '../../intl/utils/map-locale-to-language';
import { mapLocaleToCountry } from '../../intl/utils/map-locale-to-country';

/**
 * Be careful, if you add a language, make sure to add translations
 */
export const countryLanguageMap: Record<string, string[]> = {
  FR: [`fr`],
  GB: [`en`],
  NL: [`nl`],
};

/**
 * Locale - IETF BCP 47
 * en: ISO 639 - Language code
 * US: ISO 3166-1 - Country code
 */
export type Locale = (typeof availableLocale)[number];
export const availableLocale = Object.entries(countryLanguageMap).reduce<
  string[]
>((acc, [country, languages]) => {
  return [
    ...acc,
    ...languages.map(
      (language) => `${language as Language}-${country as Country}`,
    ),
  ];
}, []);
export const defaultLocale: Locale = `fr-BE`;

/**
 * Country - ISO 3166-1
 */

export type Country = (typeof availableCountry)[number];
export const availableCountry = Object.keys(countryLanguageMap).map<string>(
  (country) => country,
);
export const defaultCountry: Country = mapLocaleToCountry(defaultLocale);

/**
 * Language - ISO 639-1
 */
export type Language = string;
export const defaultLanguage: Language = mapLocaleToLanguage(defaultLocale);
