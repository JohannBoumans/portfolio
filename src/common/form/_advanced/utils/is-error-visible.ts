import { FieldErrorVisibility } from '../types/field';
import { FormErrorsVisibility } from '../types/form';

export function isErrorVisible(
  formErrorVisibility: FormErrorsVisibility,
  fieldErrorVisibility: FieldErrorVisibility,
) {
  if (fieldErrorVisibility === `always`) {
    return formErrorVisibility === `always`;
  }
  return false;
}
