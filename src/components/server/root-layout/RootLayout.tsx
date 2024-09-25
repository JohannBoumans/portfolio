'use client';

import { PropsWithChildren } from 'react';
import { Language } from '../../../common/navigation/types/config';
import { mapUrlLocaleToLocale } from '../../../common/intl/utils/map-url-locale-to-locale';
import Providers from '../../client/providers/Providers';
import { PageProps } from '../../../common/navigation/types/page';
import { CursorFollower } from '../../client/cursor-follower/CursorFollower';
import { GrainEffect } from '../../client/grain-effect/GrainEffect';

type Props = PropsWithChildren &
  PageProps & {
    language: Language;
  };

export function RootLayout(props: Props) {
  const { children, params } = props;

  const { locale } = params;

  return (
    <Providers locale={mapUrlLocaleToLocale(locale)}>
      {/*<MeshGradient3 />*/}
      {/*<ParticleAnimation />*/}
      {/*<BackgroundWave />*/}
      <GrainEffect />
      {/*<Navigation />*/}
      <CursorFollower />
      {children}
      {/*<BlockCookiesBanner language={language} />*/}
    </Providers>
  );
}
