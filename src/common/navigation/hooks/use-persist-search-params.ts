'use client';

import { useSearchParams } from 'next/navigation';

const notRequiredParams = [``];

export function usePersistSearchParams() {
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams);
  for (const param of notRequiredParams) {
    if (urlSearchParams.has(param)) {
      urlSearchParams.delete(param);
    }
  }
  return urlSearchParams.toString();
}
