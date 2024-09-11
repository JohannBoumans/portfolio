'use client';

import { useField } from '../../hooks/use-field/use-field';
import { useFormErrorsVisibilityStore } from '../../hooks/use-form-errors-visiblity-store';
import { FieldErrorVisibility, FieldProps } from '../../types/field';
import { isErrorVisible as isErrorVisibleHelper } from '../../utils/is-error-visible';
import { FormControl } from '../form/FormControl';
import { FormValues } from '../../../_shared/types/form';
import { InputText } from '../../../../../components/client/form/input-text/InputText';

type Props<F extends FormValues> = FieldProps<F> & {
  fieldErrorVisibility?: FieldErrorVisibility;
};

export function FieldPhone<F extends FormValues>(props: Props<F>) {
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
        type="tel"
        autoComplete="tel"
        name={field.name}
        label={label ?? `Téléphone`}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        isDisabled={field.isDisabled}
        isInvalid={field.isInvalid && isErrorVisible}
        isRequired={field.isRequired}
      />
    </FormControl>
  );
}
