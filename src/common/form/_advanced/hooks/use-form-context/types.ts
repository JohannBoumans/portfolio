import { FormValues } from '../../../_shared/types/form';
import { FieldPath } from '../../types/field';

export type SetValueFn<F extends FormValues = FormValues> = (
  fieldName: FieldPath<F>,
  fieldValue: string,
) => void;

export type TriggerFn = () => Promise<boolean>;

export type UseFormContextOutput = {
  setValue: SetValueFn;
  trigger: TriggerFn;
};
