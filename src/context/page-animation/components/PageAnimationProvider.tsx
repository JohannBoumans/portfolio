'use client';

import { ReactNode, useCallback, useMemo, useState } from 'react';
import {
  PageAnimationContextType,
  PageAnimationState,
  PageAnimationStoreContextProvider,
} from '../store/store';

type Props = {
  children: ReactNode;
};

export function PageAnimationProvider(props: Props) {
  const { children } = props;
  const [pageAnimationState, setPageAnimationState] =
    useState<PageAnimationState>(`initial`);

  const setPageAnimation = useCallback((state: PageAnimationState) => {
    setPageAnimationState(state);
  }, []);

  const memoizedContext = useMemo<PageAnimationContextType>(
    () => ({
      state: pageAnimationState,
      setIsAnimating: setPageAnimation,
    }),
    [pageAnimationState, setPageAnimation],
  );

  return (
    //@ts-ignore
    <PageAnimationStoreContextProvider value={memoizedContext}>
      {children}
    </PageAnimationStoreContextProvider>
  );
}
