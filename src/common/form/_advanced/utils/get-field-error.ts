import { FormValues } from '../../_shared/types/form';
import { FieldError, FieldPath } from '../types/field';
import { FormErrors } from '../types/form';

export function getFieldError<F extends FormValues = FormValues>(
  formErrors: FormErrors<F>,
  fieldName: FieldPath<F>,
): FieldError | null {
  return formErrors[fieldName] ?? null;
}
