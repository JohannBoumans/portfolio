'use client';

import { ShadcnSwitch } from './components/shadcn.switch';

type Props = {
  additionalStyle?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  onChange: () => void;
};

export function Switch(props: Props) {
  const { additionalStyle, isChecked, isDisabled, onChange } = props;
  return (
    <ShadcnSwitch
      disabled={isDisabled}
      checked={isChecked}
      onCheckedChange={onChange}
      className={additionalStyle}
    />
  );
}
