'use client';

import { ChangeEvent } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { FieldPath } from '../../types/field';
import { ValidationRule } from '../../types/validation';
import { useAutoSubmitStore } from '../use-auto-submit-store';
import { FormValues } from '../../../_shared/types/form';
import { UseFieldOutput } from './types';

type Input<F extends FormValues = FormValues> = {
  name: FieldPath<F>;
  defaultValue?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  validationRules?: ValidationRule[];
};

export function useField<
  T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  F extends FormValues = FormValues,
>(input: Input<F>): UseFieldOutput<T> {
  const {
    name,
    defaultValue,
    isDisabled,
    isRequired,
    validationRules = [],
  } = input;
  const { trigger } = useFormContext();
  const { field, fieldState } = useController({
    name,
    defaultValue: (defaultValue ?? ``) as any,
    disabled: isDisabled,
    rules: {
      required: {
        value: isRequired ?? false,
        message: `validation.is_required`,
      },
      validate: (value) => validateValue(value, validationRules),
    },
  });
  const { isAutoSubmitEnabled, scheduleSubmit } = useAutoSubmitStore();

  const debouncedScheduleSubmit = useDebouncedCallback((name: string) => {
    scheduleSubmit?.(name);
  }, 1000);

  function doAutoSubmit(isDebounced?: boolean) {
    trigger(name).then((isValid) => {
      if (isValid) {
        isDebounced ? debouncedScheduleSubmit(name) : scheduleSubmit?.(name);
      }
    });
  }

  function onBlur() {
    field.onBlur();
    if (isAutoSubmitEnabled) {
      doAutoSubmit();
    }
  }

  function onChange(e: ChangeEvent<T> | string) {
    field.onChange(e);
    if (isAutoSubmitEnabled) {
      doAutoSubmit(true);
    }
  }

  return {
    ref: field.ref,
    name: field.name,
    value: field.value,
    isDisabled: field.disabled ?? false,
    isInvalid: fieldState.invalid,
    isRequired: isRequired ?? false,
    onBlur,
    onChange,
  };
}

function validateValue(value: string, validationRules: ValidationRule[]) {
  for (const validationRule of validationRules) {
    const intlEntry = validationRule(value);
    if (intlEntry) {
      return intlEntry;
    }
  }
  return true;
}
