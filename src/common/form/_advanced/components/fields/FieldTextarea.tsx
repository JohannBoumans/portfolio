'use client';

import { useField } from '../../hooks/use-field/use-field';
import { useFormErrorsVisibilityStore } from '../../hooks/use-form-errors-visiblity-store';
import { FieldErrorVisibility, FieldProps } from '../../types/field';
import { isErrorVisible as isErrorVisibleHelper } from '../../utils/is-error-visible';
import { FormControl } from '../form/FormControl';
import { FormValues } from '../../../_shared/types/form';
import { InputTextarea } from '../../../../../components/client/form/input-textarea/InputTextarea';

type Props<F extends FormValues> = Omit<FieldProps<F>, `label`> & {
  label: string;
  fieldErrorVisibility?: FieldErrorVisibility;
};

export function FieldTextarea<F extends FormValues>(props: Props<F>) {
  const {
    name,
    label,
    defaultValue,
    isDisabled,
    isRequired,
    fieldErrorVisibility = `always`,
  } = props;
  const { visibility: formErrorsVisibility } = useFormErrorsVisibilityStore();
  const isErrorVisible = isErrorVisibleHelper(
    formErrorsVisibility,
    fieldErrorVisibility,
  );
  const field = useField<HTMLTextAreaElement, F>({
    name,
    defaultValue,
    isDisabled,
    isRequired,
  });
  return (
    <FormControl<F> name={field.name} isErrorVisible={isErrorVisible}>
      <InputTextarea
        ref={field.ref}
        name={field.name}
        label={label}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        isDisabled={field.isDisabled}
        isInvalid={field.isInvalid && isErrorVisible}
        isRequired={isRequired}
        additionalStyle={{ field: `pt-6` }}
      />
    </FormControl>
  );
}
