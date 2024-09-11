'use client';

import { useCallback } from 'react';
import { flatten } from 'flat';
import { Language } from '../../navigation/types/config';

import { TranslateFn } from '../types/types';

import enDictionary from '../locales/en.json';
import frDictionary from '../locales/fr.json';
import nlDictionary from '../locales/nl.json';

import { regex } from '../utils/regex';
import { useIntlStore } from './use-intl-store';

const mapLanguageToDictionary: Record<Language, any> = {
  en: enDictionary,
  fr: frDictionary,
  nl: nlDictionary,
};

export function useIntl() {
  const { language } = useIntlStore();
  const translate = useCallback<TranslateFn>((key, params) => {
    const translations = flatten<
      Record<string, string>,
      Record<string, string>
      // @ts-ignore
    >(mapLanguageToDictionary[language] ?? enDictionary);
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
  }, []);

  return { translate };
}
