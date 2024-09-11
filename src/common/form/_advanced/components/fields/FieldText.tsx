'use client';

import { useField } from '../../hooks/use-field/use-field';
import { useFormErrorsVisibilityStore } from '../../hooks/use-form-errors-visiblity-store';
import { FieldErrorVisibility, FieldProps } from '../../types/field';
import { isErrorVisible as isErrorVisibleHelper } from '../../utils/is-error-visible';
import { FormControl } from '../form/FormControl';
import { FormValues } from '../../../_shared/types/form';
import { InputText } from '../../../../../components/client/form/input-text/InputText';
import { AutoCompleteType } from '../../../../../components/client/form/_shared/types';

type Props<F extends FormValues> = Omit<FieldProps<F>, `label`> & {
  label: string;
  autoComplete?: AutoCompleteType;
  fieldErrorVisibility?: FieldErrorVisibility;
};

export function FieldText<F extends FormValues>(props: Props<F>) {
  const {
    name,
    label,
    defaultValue,
    isDisabled,
    isRequired,
    autoComplete,
    fieldErrorVisibility = `always`,
  } = props;
  const { visibility: formErrorsVisibility } = useFormErrorsVisibilityStore();
  const isErrorVisible = isErrorVisibleHelper(
    formErrorsVisibility,
    fieldErrorVisibility,
  );
  const field = useField<HTMLInputElement, F>({
    name,
    defaultValue,
    isDisabled,
    isRequired,
  });
  return (
    <FormControl<F> name={field.name} isErrorVisible={isErrorVisible}>
      <InputText
        ref={field.ref}
        type="text"
        autoComplete={autoComplete}
        name={field.name}
        label={label}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        isInvalid={field.isInvalid && isErrorVisible}
        isDisabled={field.isDisabled}
        isRequired={isRequired}
        additionalStyle={{ root: `w-full` }}
      />
    </FormControl>
  );
}
