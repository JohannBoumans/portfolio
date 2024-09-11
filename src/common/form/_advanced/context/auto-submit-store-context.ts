import { createContext } from 'react';

export type AutoSubmitStoreContextType = {
  isAutoSubmitEnabled: boolean;
  scheduleSubmit: ((fieldName: string) => void) | null;
};

export const AutoSubmitStoreContext = createContext<AutoSubmitStoreContextType>(
  {
    isAutoSubmitEnabled: false,
    scheduleSubmit: () => undefined,
  },
);

export const AutoSubmitStoreContextProvider = AutoSubmitStoreContext.Provider;
