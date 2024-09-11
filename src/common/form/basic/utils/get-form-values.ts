import { FormValues } from '../../_shared/types/form';
import { TypedFormData } from '../types/form-data';
import { ValidationSchema } from '../types/validation';

export function getFormValues<F extends FormValues = FormValues>(
  formData: TypedFormData<F>,
  validationSchema: ValidationSchema<F>,
): F {
  let formValues = {} as F;
  for (const [key, value] of formData.entries()) {
    if (Object.hasOwn(validationSchema, key)) {
      formValues = {
        ...formValues,
        [key]: value,
      };
    }
  }
  return formValues;
}
