'use client';

import { RefCallback } from 'react';

import clsx from 'clsx';
import { UseFieldOutput } from '../../hooks/use-field/types';
import { useField } from '../../hooks/use-field/use-field';
import { useFormErrorsVisibilityStore } from '../../hooks/use-form-errors-visiblity-store';
import { useFormState } from '../../hooks/use-form-state/use-form-state';
import { getFieldError } from '../../utils/get-field-error';
import { FormValues } from '../../../_shared/types/form';
import { InputText } from '../../../../../components/client/form/input-text/InputText';
import { FormErrorMessage } from '../../../../../components/client/form/form-error-message/FormErrorMessage';
import { InputProps } from '../../../../../components/client/form/_shared/props';

type AvailableField = `address1` | `city` | `province` | `zip`;

type Props = {
  requiredFields?: AvailableField[];
  isDisabled?: boolean;
};

function mapJoinArray(array: any[]): string {
  if (array.length === 0) return ``;

  if (array.length === 1) return array[0].toString();

  let result = array.slice(0, array.length - 1).join(`, `);
  result += ` and ` + array[array.length - 1].toString();

  return result;
}

export function FieldAddress<F extends FormValues = FormValues>(props: Props) {
  const { requiredFields = [], isDisabled } = props;
  const { errors } = useFormState<F>();
  const { visibility: formErrorsVisibility } = useFormErrorsVisibilityStore();
  const areErrorsVisible = formErrorsVisibility === `always`;

  function getErrorFields() {
    let fields: string[] = [];
    if (!!addressError) {
      fields = [...fields, `address1`];
    }
    if (!!cityError) {
      fields = [...fields, `city`];
    }
    if (!!provinceError) {
      fields = [...fields, `province`];
    }
    if (!!zipError) {
      fields = [...fields, `zip`];
    }
    return fields;
  }

  function getErrorMessage() {
    const fields = getErrorFields();
    const fieldsWithTranslation = fields.map((field) => field);
    if (fieldsWithTranslation.length === 1) {
      return `${fieldsWithTranslation[0]} est obligatoire`;
    }
    return `${fieldsWithTranslation[0]} sont obligatoires`;
  }

  const addressField = useField<HTMLInputElement, F>({
    name: `address1`,
    isDisabled,
    isRequired: requiredFields.includes(`address1`),
  });
  const addressError = getFieldError<F>(errors, `address1`);

  const cityField = useField<HTMLInputElement, F>({
    name: `city`,
    isDisabled,
    isRequired: requiredFields.includes(`city`),
  });
  const cityError = getFieldError<F>(errors, `city`);

  const provinceField = useField<HTMLInputElement, F>({
    name: `province`,
    isDisabled,
    isRequired: requiredFields.includes(`province`),
  });
  const provinceError = getFieldError<F>(errors, `province`);

  const zipField = useField<HTMLInputElement, F>({
    name: `zip`,
    isDisabled,
    isRequired: requiredFields.includes(`zip`),
  });
  const zipError = getFieldError<F>(errors, `zip`);

  const hasErrors =
    !!addressError || !!cityError || !!provinceError || !!zipError;

  const defaultFieldClassName = `hover:!border-gray-100 focus:!shadow-none !shadow-none focus:!border-gray-200 !border-0 !rounded-none`;

  return (
    <div className="flex flex-col gap-1">
      <div
        className={clsx(
          `flex`,
          `flex-col`,
          `overflow-hidden`,
          `rounded-[4px]`,
          `border-[1px]`,
          `border-gray-200`,
          `hover:border-teal-300`,
          `focus-within:!border-teal-300`,
          `focus-within:!shadow-[0px_0px_0px_3px_rgba(7,_161,_197,_0.10)]`,
          `duration-200`,
          hasErrors && areErrorsVisible
            ? `!border-danger !shadow-[0px_0px_0px_3px_rgba(245,_101,_101,_0.10)]`
            : null,
        )}
      >
        <div className="border-b-[1px] border-b-gray-100">
          <InputText
            {...mapUseFieldOutputToInputProps(addressField, areErrorsVisible)}
            label="Adresse"
            autoComplete="address-line1"
            additionalStyle={{ field: defaultFieldClassName }}
          />
        </div>
        <div className="flex [&>div]:flex-1">
          <InputText
            {...mapUseFieldOutputToInputProps(cityField, areErrorsVisible)}
            label="Ville"
            autoComplete="address-level2"
            additionalStyle={{ field: defaultFieldClassName }}
          />
          <InputText
            {...mapUseFieldOutputToInputProps(provinceField, areErrorsVisible)}
            label="Province"
            autoComplete="address-level1"
            additionalStyle={{
              field: clsx(
                defaultFieldClassName,
                `!border-l-[1px] !border-r-[1px]`,
              ),
            }}
          />
          <InputText
            {...mapUseFieldOutputToInputProps(zipField, areErrorsVisible)}
            label="Code postal"
            autoComplete="postal-code"
            additionalStyle={{ field: defaultFieldClassName }}
          />
        </div>
      </div>
      {hasErrors && areErrorsVisible && (
        <FormErrorMessage>{getErrorMessage()}</FormErrorMessage>
      )}
    </div>
  );
}

function mapUseFieldOutputToInputProps(
  useFieldOutput: UseFieldOutput<HTMLInputElement>,
  areErrorsVisible: boolean,
): { ref: RefCallback<any> } & Pick<
  InputProps<HTMLInputElement>,
  | `name`
  | `value`
  | `onBlur`
  | `onChange`
  | `isDisabled`
  | `isInvalid`
  | `isRequired`
> {
  const {
    ref,
    name,
    value,
    onBlur,
    onChange,
    isDisabled,
    isInvalid,
    isRequired,
  } = useFieldOutput;
  return {
    ref,
    name,
    value,
    onBlur,
    onChange,
    isDisabled,
    isInvalid: isInvalid && areErrorsVisible,
    isRequired,
  };
}
