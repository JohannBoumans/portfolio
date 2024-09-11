'use client';

import { usePathname, useSearchParams } from 'next/navigation';

export function useRouterSearchParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function appendParam(key: string, value: string) {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set(key, value);
    window.history.replaceState(
      null,
      ``,
      pathname + `?` + urlSearchParams.toString(),
    );
  }

  function appendParams(
    params: Record<string, string>,
    allowedParams: string[] = [],
  ) {
    const urlSearchParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (
        (allowedParams.length > 0 && !allowedParams.includes(key)) ||
        !value
      ) {
        return;
      }
      urlSearchParams.set(key, value);
    });
    window.history.replaceState(
      null,
      ``,
      pathname + `?` + urlSearchParams.toString(),
    );
  }

  function hasParam(key: string) {
    return searchParams.has(key);
  }

  function hasParams(keys: Record<string, string>) {
    return Object.keys(keys).every((key) => searchParams.has(key));
  }

  return { appendParam, appendParams, hasParam, hasParams };
}
