import { createContext, useContext } from 'react';

export type ToastMessageTypes = `success` | `error`;

export interface IToastMessage {
  id: string;
  message: string;
  type: ToastMessageTypes;
}

export type ToastStoreContextType = {
  messages: IToastMessage[];
  addMessage: (message: IToastMessage) => void;
  removeMessage: (id: string) => void;
  clearMessages: () => void;
};

const ToastStoreContext = createContext<ToastStoreContextType>({
  messages: [],
  addMessage: (message: IToastMessage) => message,
  removeMessage: (id: string) => id,
  clearMessages: () => [],
});

export const ToastStoreContextProvider = ToastStoreContext.Provider;

export function useToastStore() {
  const toastStore = useContext(ToastStoreContext);

  if (!toastStore) {
    throw new Error(
      `Could not find ToastStoreContext. Make sure ToastStoreContext is present in the ancestors.`,
    );
  }
  return toastStore;
}
