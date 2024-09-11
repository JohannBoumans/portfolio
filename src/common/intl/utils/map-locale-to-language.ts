import {
  defaultLanguage,
  Language,
  Locale,
} from '../../navigation/types/config';

export function mapLocaleToLanguage(locale: Locale | null): Language {
  switch (locale) {
    // EN
    case `en-AU`:
    case `en-CA`:
    case `en-GB`:
    case `en-US`:
      return `en`;
    // FR
    case `fr-BE`:
    case `fr-CA`:
    case `fr-CH`:
    case `fr-FR`:
    case `fr-LU`:
      return `fr`;
    // NL
    case `nl-BE`:
    case `nl-NL`:
      return `nl`;
    default:
      return defaultLanguage;
  }
}
