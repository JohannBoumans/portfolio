import { forwardRef } from 'react';
import clsx from 'clsx';
import { InputAnatomy } from '../_shared/anatomy';
import { InputProps } from '../_shared/props';
import { inputStyle, invalidClassName } from '../_shared/style';
import { InputContainer } from '../input-container/InputContainer';
import { AdditionalStyle } from '../../../../style/types/additional-style';

export type Props = InputProps<HTMLTextAreaElement> & {
  rows?: number;
  additionalStyle?: AdditionalStyle<InputAnatomy>;
};

export const InputTextarea = forwardRef<HTMLTextAreaElement, Props>(
  (props, ref) => {
    const {
      name,
      label,
      value,
      onChange,
      onFocus,
      onBlur,
      isDisabled,
      isInvalid,
      isRequired,
      rows = 10,
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
        <textarea
          ref={ref}
          placeholder=""
          onChange={onChange}
          value={value}
          name={name}
          onBlur={onBlur}
          onFocus={onFocus}
          rows={rows}
          className={inputStyle({
            className: clsx(
              isInvalid ? invalidClassName : null,
              additionalStyle?.field,
            ),
          })}
          disabled={isDisabled}
        />
      </InputContainer>
    );
  },
);
