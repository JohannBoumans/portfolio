import { ReactNode } from 'react';
import clsx from 'clsx';
import { AdditionalStyle } from '../../../../style/types/additional-style';
import { InputContainerAnatomy } from './_/anatomy';
import { inputContainerStyle, labelStyle } from './_/style';
import './style.css';

type Props = {
  children: ReactNode;
  label: string;
  fieldId: string;
  isRequired?: boolean;
  additionalStyle?: AdditionalStyle<InputContainerAnatomy>;
};

export function InputContainer(props: Props) {
  const { children, label, fieldId, isRequired, additionalStyle } = props;

  const className = clsx(`floating-label`, additionalStyle?.root);

  function formatLabel() {
    let formattedLabel = <>{label}</>;
    if (isRequired) {
      formattedLabel = (
        <>
          {label}
          <span className="text-red">*</span>
        </>
      );
    }
    return formattedLabel;
  }

  return (
    <div className={inputContainerStyle({ className })}>
      {children}
      <label
        htmlFor={fieldId}
        className={labelStyle({ className: additionalStyle?.label })}
      >
        {formatLabel()}
      </label>
    </div>
  );
}
