import { FormValues } from '../../_shared/types/form';
import { ValidatorFn } from '../../_shared/types/validation';

export type Validators = ValidatorFn[];

export type ValidationSchema<F extends FormValues = FormValues> = Record<
  keyof F,
  Validators
>;
