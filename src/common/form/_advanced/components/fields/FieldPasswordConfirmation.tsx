'use client';

import { useRef } from 'react';
import { FormValues } from '../../../_shared/types/form';
import { FieldErrorVisibility, FieldPath, FieldProps } from '../../types/field';
import { useFormErrorsVisibilityStore } from '../../hooks/use-form-errors-visiblity-store';
import { FormControl } from '../form/FormControl';
import { useField } from '../../hooks/use-field/use-field';
import { isErrorVisible as isErrorVisibleHelper } from '../../utils/is-error-visible';
import { FormRow } from '../../../../../components/client/form/form-row/FormRow';
import { InputText } from '../../../../../components/client/form/input-text/InputText';

type Props<F extends FormValues = FormValues> = FieldProps<F> & {
  columns?: 1 | 2 | 3;
  name: FieldPath<F>;
  fieldErrorVisibility?: FieldErrorVisibility;
};

export function FieldPasswordConfirmation<F extends FormValues = FormValues>(
  props: Props<F>,
) {
  const { columns, name, fieldErrorVisibility = `always`, isRequired } = props;
  const internalInputRef = useRef<HTMLInputElement>(null);
  const { visibility: formErrorsVisibility } = useFormErrorsVisibilityStore();
  const isErrorVisible = isErrorVisibleHelper(
    formErrorsVisibility,
    fieldErrorVisibility,
  );
  const field = useField<HTMLInputElement, F>({
    name,
    isRequired,
    validationRules: [
      (value) => {
        if (value !== internalInputRef.current?.value) {
          return `Les mots de passe ne correspondent pas`;
        }
        internalInputRef.current!.value = ``;
        return undefined;
      },
    ],
  });

  return (
    <FormControl<F> name={name}>
      <FormRow columns={columns}>
        <InputText
          type="password"
          name={field.name}
          label="Mot de passe"
          value={field.value}
          onBlur={field.onBlur}
          onChange={field.onChange}
          isInvalid={field.isInvalid && isErrorVisible}
          isDisabled={field.isDisabled}
          isRequired={field.isRequired}
          additionalStyle={{ root: `w-full` }}
        />
        <InputText
          ref={internalInputRef}
          type="password"
          label="Confirmation du mot de passe"
          isInvalid={field.isInvalid && isErrorVisible}
          isDisabled={field.isDisabled}
          isRequired={field.isRequired}
          additionalStyle={{ root: `w-full` }}
        />
      </FormRow>
    </FormControl>
  );
}
