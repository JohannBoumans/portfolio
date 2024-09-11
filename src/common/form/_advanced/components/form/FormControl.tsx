'use client';

import { ReactNode } from 'react';
import { useFormState } from '../../hooks/use-form-state/use-form-state';
import { FieldPath } from '../../types/field';
import { getFieldError } from '../../utils/get-field-error';
import { FormValues } from '../../../_shared/types/form';
import { FormErrorMessage } from '../../../../../components/client/form/form-error-message/FormErrorMessage';
import { useIntl } from '../../../../intl/hooks/use-intl';

type Props<F extends FormValues = FormValues> = {
  children: ReactNode;
  name: FieldPath<F>;
  isErrorVisible?: boolean;
};

export function FormControl<F extends FormValues = FormValues>(
  props: Props<F>,
) {
  const { children, name, isErrorVisible = true } = props;
  const { errors } = useFormState<F>();
  const error = getFieldError(errors, name);
  const { translate } = useIntl();

  function renderError() {
    if (error && isErrorVisible) {
      return <FormErrorMessage>{translate(error.message)}</FormErrorMessage>;
      // return <FormErrorMessage>{error.message}</FormErrorMessage>;
    }
    return null;
  }

  return (
    <div className="flex w-full flex-col gap-1">
      {children}
      {renderError()}
    </div>
  );
}
