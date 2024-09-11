import { DefaultValues } from 'react-hook-form';
import { FormValues } from '../../_shared/types/form';
import { FieldError, FieldPath } from './field';

export type FormErrorsVisibility = `none` | `always`;

export type FormErrors<F extends FormValues = FormValues> = Record<
  FieldPath<F>,
  FieldError
>;

export type FormRef<F extends FormValues> = {
  reset: (values: DefaultValues<F>) => void;
  getValues: () => F;
  trigger: () => Promise<boolean>;
};
