import { useMemo } from 'react';
import { m } from 'framer-motion';
import { ToastMessageTypes } from '../store/store';
import { Text } from '../../../components/server/text/Text';
import { Icon } from '../../../components/server/icon/Icon';

type Props = {
  message: string;
  type?: ToastMessageTypes;
  onClose?: () => void;
};

export const ToastMessage = (props: Props) => {
  const { message, type = `success`, onClose } = props;

  const icon = useMemo(() => {
    switch (type) {
      case `success`:
        return <Icon icon="check-circle" size="1x" color="white" />;
      case `error`:
        return <Icon icon="triangle-exclamation" size="1x" color="white" />;
      default:
        return <Icon icon="check-circle" size="1x" color="white" />;
    }
  }, [type]);

  const bgColor = useMemo(() => {
    switch (type) {
      case `success`:
        return `bg-[#38A169]`;
      case `error`:
        return `bg-[#E53E3E]`;
      default:
        return `bg-[#38A169]`;
    }
  }, [type]);

  return (
    <m.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      layout
      className={`mb-3 flex min-h-[72px] min-w-[352px] items-center justify-between rounded p-3 ${bgColor}`}
    >
      <div className="mr-2 flex items-center justify-center">{icon}</div>
      <Text size="sm" additionalStyle="mr-2 max-w-[272px] font-medium">
        {message}
      </Text>
      <button
        onClick={onClose}
        className="flex items-center justify-center rounded-sm p-1 duration-300 hover:bg-black/[.1]"
      >
        <Icon additionalStyle="icon-sm" />
      </button>
    </m.div>
  );
};
