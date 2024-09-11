import isEmailValidator from 'validator/lib/isEmail';
import { ValidatorFn } from '../../_shared/types/validation';

export const isEmail: ValidatorFn = (value) => {
  if (!isEmailValidator(value)) {
    return `validation.invalid_email`;
  }
  return;
};
