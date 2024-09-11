import isStrongPasswordValidator from 'validator/lib/isStrongPassword';
import { ValidatorFn } from '../../_shared/types/validation';

type StrongPasswordOptions = {
  minLength?: number;
  minLowercase?: number;
  minUppercase?: number;
  minNumbers?: number;
  minSymbols?: number;
  returnScore?: boolean;
  pointsPerUnique?: number;
  pointsPerRepeat?: number;
  pointsForContainingLower?: number;
  pointsForContainingUpper?: number;
  pointsForContainingNumber?: number;
  pointsForContainingSymbol?: number;
} & { returnScore?: false };

const defaultOptions: StrongPasswordOptions = {
  minLength: 6,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 0,
  returnScore: false,
  pointsPerUnique: 1,
  pointsPerRepeat: 0.5,
  pointsForContainingLower: 2,
  pointsForContainingUpper: 2,
  pointsForContainingNumber: 2,
  pointsForContainingSymbol: 2,
};

export const isStrongPassword: ValidatorFn = (
  value,
  options?: StrongPasswordOptions,
) => {
  if (!isStrongPasswordValidator(value, options || defaultOptions)) {
    return `errors.strong_password`;
  }
  return;
};
