'use client';

import { useCallback } from 'react';
import deepmerge from 'deepmerge';
import { FormValues } from '../../../_shared/types/form';
import { FormState } from '../../types/form';
import { validateSchema } from '../../utils/validate-schema';
import { OnSubmitFn, UseFormInput, UseFormOutput } from './types';

export const useForm = <F extends FormValues = FormValues>(
  input: UseFormInput<F>,
): UseFormOutput<F> => {
  const { validationSchema } = input;
  const mergeFormState = useCallback(
    (defaultFormState: FormState<F>, newFormState: Partial<FormState<F>>) => {
      return deepmerge<FormState<F>, FormState<F>>(
        defaultFormState,
        newFormState,
      );
    },
    [],
  );
  const onSubmit = useCallback<OnSubmitFn<F>>((onValid, onInvalid) => {
    return async (_, formData) => {
      const res = validateSchema<F>(formData, validationSchema);
      const { isSuccess, errors, values } = res;
      if (!isSuccess) {
        if (onInvalid && errors) {
          onInvalid(errors);
        }
        return res;
      }
      if (!values) {
        throw new Error();
      }
      const formState = await onValid(values, res);
      if (typeof formState === `object`) {
        return mergeFormState(res, formState);
      }
      return res;
    };
  }, []);

  return { onSubmit };
};
