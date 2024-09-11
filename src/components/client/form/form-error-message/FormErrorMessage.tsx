import { ReactNode } from 'react';
import { Text } from '../../../server/text/Text';

type Props = {
  children: ReactNode;
};

export function FormErrorMessage(props: Props) {
  const { children } = props;
  return (
    <Text size="xs" colorScheme="red">
      {children}
    </Text>
  );
}
