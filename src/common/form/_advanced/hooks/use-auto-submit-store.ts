'use client';

import { useContext } from 'react';
import {
  AutoSubmitStoreContext,
  AutoSubmitStoreContextType,
} from '../context/auto-submit-store-context';

export function useAutoSubmitStore(): AutoSubmitStoreContextType {
  const autoSubmitStoreContext = useContext(AutoSubmitStoreContext);
  if (!autoSubmitStoreContext) {
    throw new Error(
      `Could not find AutoSubmitStoreContext. Make sure AutoSubmitStoreContext is present in the ancestors.`,
    );
  }
  return autoSubmitStoreContext;
}
