'use client';

import { useContext } from 'react';
import {
  IntlStoreContext,
  IntlStoreContextType,
} from '../context/intl-store-context';

export function useIntlStore() {
  const { country, language, locale, switchLocale, urlLocale } =
    useContext<IntlStoreContextType>(IntlStoreContext);
  return { country, language, locale, switchLocale, urlLocale };
}
