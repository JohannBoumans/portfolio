import { flatten } from 'flat';
import { defaultLanguage, Language } from '../../navigation/types/config';
import { TranslateFn } from '../types/types';
import { regex } from './regex';

export async function getIntl(language: Language = defaultLanguage) {
  const dictionaries: Record<Language, any> = {
    en: await import(`../locales/en.json`),
    fr: await import(`../locales/fr.json`),
    nl: await import(`../locales/nl.json`),
  };
  const translate: TranslateFn = (key, params) => {
    const translations = flatten<
      typeof dictionaries.en.default,
      typeof dictionaries.en.default
    >(dictionaries[language].default);
    // @ts-ignore
    const translation = translations[key] as string;
    if (!translation) {
      return key;
    }
    if (translation.match(regex)?.length && params) {
      return translation.replaceAll(regex, (_, variableName) => {
        return params[variableName];
      });
    }
    return translation;
  };

  return { translate };
}
