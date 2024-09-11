import {
  availableCountry,
  Country,
  Locale,
} from '../../navigation/types/config';

export function mapLocaleToCountry(locale: Locale): Country {
  const parts = locale.split(`-`);
  const country = parts[1] as Country;
  if (availableCountry.includes(country)) {
    return country;
  }
  return `US`;
}
