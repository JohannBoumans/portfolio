import { FormValues } from '../../_shared/types/form';

export type FormState<F extends FormValues = FormValues> = {
  errors: FormErrors<F> | null;
  isSuccess: boolean;
  values: F | null;
};

export type FormErrors<F extends FormValues = FormValues> = Record<
  keyof F,
  string
>;
