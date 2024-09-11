export function getHref(
  urlLocale: string,
  to: string,
  persistentSearchParams?: string,
) {
  const href = `/${urlLocale}` + to;
  if (persistentSearchParams && persistentSearchParams.length > 0) {
    return href + `?${persistentSearchParams}`;
  }
  return href;
}
