import { ChangeEventHandler, FocusEventHandler } from 'react';

export type InputProps<
  Element extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
> = {
  name?: string;
  label: string;
  value?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  onBlur?: FocusEventHandler<Element>;
  onChange?: ChangeEventHandler<Element>;
  onFocus?: FocusEventHandler<Element>;
};
