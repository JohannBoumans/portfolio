'use client';

import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter as useNextRouter } from 'next/navigation';
import { getHref } from '../utils/get-href';
import { useIntlStore } from '../../intl/hooks/use-intl-store';
import { usePersistSearchParams } from './use-persist-search-params';

export function useRouter() {
  const nextRouter = useNextRouter();
  const { urlLocale } = useIntlStore();
  const persistentSearchParams = usePersistSearchParams();

  function push(to: string, options?: NavigateOptions) {
    nextRouter.push(getHref(urlLocale, to, persistentSearchParams), options);
  }

  return {
    ...nextRouter,
    push,
  };
}
