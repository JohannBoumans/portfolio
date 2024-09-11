'use client';

import { useField } from '../../hooks/use-field/use-field';
import { useFormErrorsVisibilityStore } from '../../hooks/use-form-errors-visiblity-store';
import { FieldErrorVisibility, FieldPath, FieldProps } from '../../types/field';
import { isErrorVisible as isErrorVisibleHelper } from '../../utils/is-error-visible';
import { FormControl } from '../form/FormControl';
import { FormValues } from '../../../_shared/types/form';
import { InputText } from '../../../../../components/client/form/input-text/InputText';

type Props<F extends FormValues = FormValues> = FieldProps<F> & {
  name: FieldPath<F>;
  label: string;
  fieldErrorVisibility?: FieldErrorVisibility;
};

export function FieldPassword<F extends FormValues = FormValues>(
  props: Props<F>,
) {
  const { name, label, fieldErrorVisibility = `always`, isRequired } = props;
  const { visibility: formErrorsVisibility } = useFormErrorsVisibilityStore();
  const isErrorVisible = isErrorVisibleHelper(
    formErrorsVisibility,
    fieldErrorVisibility,
  );
  const field = useField<HTMLInputElement, F>({
    name,
    isRequired,
  });
  return (
    <FormControl<F> name={name}>
      <InputText
        type="password"
        name={field.name}
        label={label}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        isInvalid={field.isInvalid && isErrorVisible}
        isDisabled={field.isDisabled}
        isRequired={field.isRequired}
        additionalStyle={{ root: `w-full` }}
      />
    </FormControl>
  );
}
