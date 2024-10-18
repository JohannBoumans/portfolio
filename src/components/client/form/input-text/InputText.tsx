'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import { InputAnatomy } from '../_shared/anatomy';
import { InputProps } from '../_shared/props';
import { inputStyle, invalidClassName } from '../_shared/style';
import { AutoCompleteType, InputType } from '../_shared/types';
import { InputContainer } from '../input-container/InputContainer';
import { AdditionalStyle } from '../../../../style/types/additional-style';
import { InputVariant } from './_/types';

type Props = InputProps<HTMLInputElement> &
  InputVariant & {
    type?: InputType;
    autoComplete?: AutoCompleteType;
    additionalStyle?: AdditionalStyle<InputAnatomy>;
  };

export const InputText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    name,
    label,
    value,
    onBlur,
    onChange,
    onFocus,
    isDisabled,
    isInvalid,
    isRequired,
    autoComplete,
    type,
    additionalStyle,
  } = props;
  const fieldId = `field-${name}`;
  return (
    <InputContainer
      label={label}
      fieldId={fieldId}
      isRequired={isRequired}
      additionalStyle={additionalStyle}
    >
      <input
        id={fieldId}
        autoComplete={autoComplete}
        ref={ref}
        name={name}
        type={type}
        placeholder=""
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        disabled={isDisabled}
        className={inputStyle({
          className: clsx(
            `h-[48px]`,
            isInvalid ? invalidClassName : null,
            additionalStyle?.field,
          ),
        })}
      />
    </InputContainer>
  );
});
