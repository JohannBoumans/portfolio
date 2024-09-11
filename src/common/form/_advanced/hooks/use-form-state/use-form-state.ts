'use client';

import { useFormState as _useFormState } from 'react-hook-form';

import { FormErrors } from '../../types/form';
import { FormValues } from '../../../_shared/types/form';
import { UseFormStateOutput } from './types';

export function useFormState<
  F extends FormValues = FormValues,
>(): UseFormStateOutput<F> {
  const { errors, isLoading, isSubmitting } = _useFormState();
  return { errors: errors as FormErrors<F>, isLoading, isSubmitting };
}
