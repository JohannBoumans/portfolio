'use client';

import { useEffect, useState } from 'react';
import { Switch } from '../switch/Switch';
import { Text } from '../../server/text/Text';

export function ThemeSwitcher() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem(`theme`);
    if (theme === `dark`) {
      document.documentElement.classList.add(`dark`);
    }
  }, []);

  function onChange() {
    setIsChecked(!isChecked);
    document.documentElement.classList.toggle(`dark`);
    // animatePageIn(newPathname, router, true);
  }

  return (
    <div className="flex items-center gap-2">
      <Text>DARK</Text>
      <Switch isChecked={isChecked} onChange={onChange} />
      <Text>LIGHT</Text>
    </div>
  );
}
