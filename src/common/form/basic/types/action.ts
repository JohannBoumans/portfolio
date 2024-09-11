import { FormValues } from '../../_shared/types/form';
import { FormState } from './form';
import { TypedFormData } from './form-data';

export type ActionHandler<F extends FormValues = FormValues> = (
  formState: FormState<F>,
  formData: TypedFormData<F>,
) => Promise<FormState<F>>;
