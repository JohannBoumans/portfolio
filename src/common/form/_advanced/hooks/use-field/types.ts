import { ChangeEvent, FocusEvent, RefCallback } from 'react';

export type UseFieldOutput<
  T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
> = {
  ref: RefCallback<any>;
  name: string;
  value: string;
  isDisabled: boolean;
  isInvalid: boolean;
  isRequired: boolean;
  onBlur: (e: FocusEvent<T>) => void;
  onChange: (e: ChangeEvent<T> | string) => void;
};
