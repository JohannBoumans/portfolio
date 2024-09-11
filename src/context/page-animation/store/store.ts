import { createContext, useContext } from 'react';

export type PageAnimationState = `initial` | `entering` | `exited`;

export type PageAnimationContextType = {
  state: PageAnimationState;
  setIsAnimating: (state: PageAnimationState) => void;
};

const PageAnimationStoreContext = createContext<PageAnimationContextType>({
  state: `initial`,
  setIsAnimating: (state: PageAnimationState) => state,
});

export const PageAnimationStoreContextProvider =
  PageAnimationStoreContext.Provider;

export function usePageAnimationStore() {
  const pageAnimationStore = useContext(PageAnimationStoreContext);

  if (!pageAnimationStore) {
    throw new Error(
      `Could not find ToastStoreContext. Make sure ToastStoreContext is present in the ancestors.`,
    );
  }
  return pageAnimationStore;
}
