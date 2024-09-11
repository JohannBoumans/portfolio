import isLengthValidator from 'validator/lib/isLength';
import { ValidatorFn } from '../../_shared/types/validation';

export const isLength: ValidatorFn = (value) => {
  if (!isLengthValidator(value, { min: 3 })) {
    return `validation.invalid_length`;
  }
  return;
};
