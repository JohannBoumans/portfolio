import { ReactNode } from 'react';
import { Text } from '../../server/text/Text';
import { Icon, Icons } from '../../server/icon/Icon';

type ServiceBenefitType = {
  icon: Icons;
  heading: ReactNode;
  text: ReactNode;
};

export function ServiceBenefit(props: ServiceBenefitType) {
  const { icon, heading, text } = props;

  return (
    <div className="p-4 rounded-xl shadow-[0px_0px_8px_0px_#37383A] hover:shadow-[0px_0px_8px_0px_#fe9474] duration-300 min-h-[160px]">
      <div className="flex items-center gap-4 mb-4">
        <Icon icon={icon} color="#fe9474" />
        <Text as="h2" size="xl" additionalStyle="font-bold" colorScheme="red">
          {heading}
        </Text>
      </div>
      <Text size="lg" additionalStyle="font-bold" colorScheme="default">
        {text}
      </Text>
    </div>
  );
}
