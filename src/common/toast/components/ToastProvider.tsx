import { ReactNode, useState } from 'react';
import { IToastMessage, ToastStoreContextProvider } from '../store/store';
import { ToastContainer } from './ToastContainer';

type Props = {
  children: ReactNode;
};

export function ToastProvider(props: Props) {
  const { children } = props;
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  function addMessage(message: IToastMessage) {
    setMessages([message, ...messages]);
  }

  function removeMessage(id: string) {
    setMessages(messages.filter((message) => message.id !== id));
  }

  function clearMessages() {
    setMessages([]);
  }

  return (
    <ToastStoreContextProvider
      value={{
        messages: messages || [],
        addMessage,
        removeMessage,
        clearMessages,
      }}
    >
      <ToastContainer messages={messages} remove={removeMessage} />
      {children}
    </ToastStoreContextProvider>
  );
}
