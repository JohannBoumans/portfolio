import clsx from 'clsx';
import { forwardRef } from 'react';
import { inputStyle, invalidClassName } from '../../_shared/style';
import { InputContainer } from '../../input-container/InputContainer';
import { Props } from '../types/props';

export const InputSelectMobile = forwardRef<
  HTMLSelectElement,
  Props<HTMLSelectElement>
>((props, ref) => {
  const {
    name,
    label,
    value,
    options,
    isDisabled,
    isRequired,
    isInvalid,
    onBlur,
    onChange,
    onFocus,
  } = props;
  function renderOptions() {
    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  }
  const fieldId = `field-${name}`;
  return (
    <InputContainer label={label} fieldId={fieldId} isRequired={isRequired}>
      <select
        ref={ref}
        value={value}
        className={inputStyle({
          className: clsx(
            `h-[48px]`,
            `!pl-[12px]`,
            isInvalid ? invalidClassName : null,
          ),
        })}
        disabled={isDisabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      >
        {renderOptions()}
      </select>
    </InputContainer>
  );
});
