import { FormValues } from '../../../_shared/types/form';
import { FormErrors } from '../../types/form';

export type UseFormStateOutput<F extends FormValues = FormValues> = {
  errors: FormErrors<F>;
  isLoading: boolean;
  isSubmitting: boolean;
};
