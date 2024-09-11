import React, { ReactNode } from 'react';
import { Icon } from '../../../../../components/server/icon/Icon';
import { Text } from '../../../../../components/server/text/Text';

export type ContactSuccessMessageData = {
  heading: ReactNode;
  text: ReactNode;
};

type Props = {
  data: ContactSuccessMessageData;
};

export function ContactSuccessMessage(props: Props) {
  const { data } = props;
  return (
    <div className="flex max-w-[720px] rounded-[20px] border-[1px] border-gray-50 px-10 py-5">
      <div>
        <div className="mr-5 flex h-[56px] w-[56px] items-center justify-center rounded-[12px] border-[1.5px] border-teal-400 bg-teal-300">
          <Icon icon="circle-check" color="#057894" size="xl" />
        </div>
      </div>
      <div>
        <div className="mb-1">
          <Text>{data.heading}</Text>
        </div>
        <div>
          <Text>{data.text}</Text>
        </div>
      </div>
    </div>
  );
}
