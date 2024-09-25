import { FormValues } from '../../_shared/types/form';
import { FormErrors, FormState } from '../types/form';
import { TypedFormData } from '../types/form-data';
import { ValidationSchema, Validators } from '../types/validation';
import { getFormValues } from './get-form-values';

export function validateSchema<F extends FormValues = FormValues>(
  formData: TypedFormData<F>,
  validationSchema: ValidationSchema<F>,
): FormState<F> {
  function execute(value: F[keyof F], validators: Validators = []) {
    for (const validator of validators) {
      const output = validator(value);
      if (!!output) {
        return output;
      }
    }
    return undefined;
  }

  let formErrors = {} as FormErrors<F>;
  //@ts-ignore
  for (const [key, value] of formData.entries()) {
    if (Object.hasOwn(validationSchema, key)) {
      const validators = validationSchema[key];
      formErrors = {
        ...formErrors,
        [key]: execute(value, validators),
      };
    }
  }
  const formValues = getFormValues(formData, validationSchema);
  return {
    errors: formErrors,
    isSuccess: Object.values(formErrors).every((v) => !v),
    values: formValues,
  };
}
