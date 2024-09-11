'use client';

import { useCallback, useMemo } from 'react';
import { ToastMessageTypes, useToastStore } from '../store/store';

export function useToast() {
  const store = useToastStore();
  const generateId = useCallback(() => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
  }, []);

  const show = useCallback(
    (message: string, type: ToastMessageTypes = `success`, timeout = 3000) => {
      const id = generateId();
      if (store.messages.length === 0) {
        store.addMessage({ id, message, type });
        setTimeout(() => store.removeMessage(id), timeout);
      }
    },
    [store, generateId],
  );

  return useMemo(
    () => ({
      success: (message: string, timeout = 3000) =>
        show(message, `success`, timeout),
      error: (message: string, timeout = 3000) =>
        show(message, `error`, timeout),
      clear: () => store.clearMessages(),
    }),
    [show, store],
  );
}
