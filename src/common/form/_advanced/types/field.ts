import { FormValues } from '../../_shared/types/form';
import { IntlEntry } from '../../../intl/types/types';

export type FieldError = {
  message: IntlEntry;
};

export type FieldErrorVisibility = `none` | `always`;

export type FieldPath<F extends FormValues = FormValues> = keyof F & string;

export type FieldProps<F extends FormValues = FormValues> = {
  name: FieldPath<F>;
  label?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
};
