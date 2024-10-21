import { AnimatePresence, m } from 'framer-motion';
import { IToastMessage } from '../store/store';
import { ToastMessage } from './ToastMessage';

type Props = {
  messages: IToastMessage[];
  remove: (id: string) => void;
};

export function ToastContainer(props: Props) {
  const { messages, remove } = props;

  return (
    <m.div
      className="fixed right-4 top-4 md:right-10 md:top-10 z-[999] flex flex-col items-center"
      layout
    >
      <AnimatePresence>
        {messages.map(({ type, message, id }) => (
          <ToastMessage
            onClose={() => remove(id)}
            key={id}
            type={type}
            message={message}
          />
        ))}
      </AnimatePresence>
    </m.div>
  );
}
