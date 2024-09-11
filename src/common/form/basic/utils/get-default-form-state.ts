import { FormValues } from '../../_shared/types/form';
import { FormState } from '../types/form';

export function getDefaultFormState<
  F extends FormValues = FormValues,
>(): FormState<F> {
  return {
    errors: null,
    isSuccess: false,
    values: null,
  };
}
