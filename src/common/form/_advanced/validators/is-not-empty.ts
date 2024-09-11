import isEmptyValidator from 'validator/lib/isEmpty';
import { ValidatorFn } from '../../_shared/types/validation';

export const isNotEmpty: ValidatorFn = (value) => {
  if (!value || isEmptyValidator(value)) {
    return `validation.is_required`;
  }
  return;
};
