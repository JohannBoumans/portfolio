import { createContext, Dispatch, SetStateAction } from 'react';
import { FormErrorsVisibility } from '../types/form';

export type FormErrorsVisibilityStoreContextType = {
  visibility: FormErrorsVisibility;
  setVisibility: Dispatch<SetStateAction<FormErrorsVisibility>>;
};

export const FormErrorsVisibilityStoreContext =
  createContext<FormErrorsVisibilityStoreContextType>({
    visibility: `none`,
    setVisibility: () => undefined,
  });

export const FormErrorsVisibilityStoreContextProvider =
  FormErrorsVisibilityStoreContext.Provider;
