import { FormValues } from '../../../_shared/types/form';
import { ActionHandler } from '../../types/action';
import { FormErrors, FormState } from '../../types/form';
import { ValidationSchema } from '../../types/validation';

export type OnSubmitFn<F extends FormValues = FormValues> = (
  onValid: (
    formValues: F,
    formState?: FormState<F>,
  ) => Promise<Partial<FormState<F>> | void> | Partial<FormState<F>> | void,
  onInvalid?: (formErrors: FormErrors<F>) => void,
) => ActionHandler<F>;

export type UseFormInput<F extends FormValues = FormValues> = {
  validationSchema: ValidationSchema<F>;
};

export type UseFormOutput<F extends FormValues = FormValues> = {
  onSubmit: OnSubmitFn<F>;
};
