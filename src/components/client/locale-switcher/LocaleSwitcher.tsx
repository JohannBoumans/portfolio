'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useIntlStore } from '../../../common/intl/hooks/use-intl-store';
import { Switch } from '../switch/Switch';
import { Text } from '../../server/text/Text';
import { mapLocaleToUrlLocale } from '../../../common/intl/utils/map-locale-to-url-locale';
import { useRouter } from '../../../common/navigation/hooks/use-router';
import { animatePageIn } from '../../../utils/animation';

export function LocaleSwitcher() {
  const { switchLocale } = useIntlStore();
  const router = useRouter();
  const pathname = usePathname();
  const defaultLocale = pathname.split(`/`).slice(1);
  const defaultChecked = defaultLocale?.[0] === `en-gb`;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  function onChange() {
    setIsChecked(!isChecked);
    const newLocale = mapStateToNewLocale(isChecked);
    const parts = pathname
      .split(`/`)
      .filter((p) => p.length > 0)
      .slice(1);

    const urlLocale = mapLocaleToUrlLocale(newLocale);
    const newPathname = `/${urlLocale}/${parts.join(`/`)}`;
    switchLocale(newLocale);
    animatePageIn(newPathname, router, true);
  }

  return (
    <div className="flex items-center gap-2">
      <Text>FR</Text>
      <Switch isChecked={isChecked} onChange={onChange} />
      <Text>EN</Text>
    </div>
  );
}

function mapStateToNewLocale(isChecked: boolean) {
  if (isChecked) return `fr-BE`;
  return `en-GB`;
}
