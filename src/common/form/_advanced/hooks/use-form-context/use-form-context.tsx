'use client';

import { useFormContext as _useFormContext } from 'react-hook-form';

import { useAutoSubmitStore } from '../use-auto-submit-store';
import { useFormErrorsVisibilityStore } from '../use-form-errors-visiblity-store';
import { FormValues } from '../../../_shared/types/form';
import { SetValueFn, TriggerFn, UseFormContextOutput } from './types';

export function useFormContext<
  F extends FormValues = FormValues,
>(): UseFormContextOutput {
  const formContext = _useFormContext();
  const { isAutoSubmitEnabled } = useAutoSubmitStore();
  const { setVisibility } = useFormErrorsVisibilityStore();

  const setValue: SetValueFn<F> = (fieldName, fieldValue) => {
    formContext.setValue(fieldName, fieldValue as any);
  };

  const trigger: TriggerFn = async () => {
    if (isAutoSubmitEnabled) {
      setVisibility(`always`);
    }
    return await formContext.trigger(undefined, { shouldFocus: true });
  };

  return { setValue, trigger };
}
