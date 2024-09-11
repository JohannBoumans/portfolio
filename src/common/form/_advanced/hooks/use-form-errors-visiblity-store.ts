'use client';

import { useContext } from 'react';
import {
  FormErrorsVisibilityStoreContext,
  FormErrorsVisibilityStoreContextType,
} from '../context/form-errors-visibility-store-context';

export function useFormErrorsVisibilityStore(): FormErrorsVisibilityStoreContextType {
  const formErrorsVisibilityStoreContext = useContext(
    FormErrorsVisibilityStoreContext,
  );
  if (!formErrorsVisibilityStoreContext) {
    throw new Error(
      `Could not find FormErrorsVisibilityStoreContext. Make sure FormErrorsVisibilityStoreContext is present in the ancestors.`,
    );
  }
  return formErrorsVisibilityStoreContext;
}
