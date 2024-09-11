'use client';

import {
  FormEvent,
  ReactNode,
  RefObject,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  DefaultValues,
  FormProvider as _FormProvider,
  useForm,
} from 'react-hook-form';
import isEqual from 'lodash.isequal';
import { DeepPartial } from 'utility-types';
import {
  AutoSubmitStoreContextProvider,
  AutoSubmitStoreContextType,
} from '../../context/auto-submit-store-context';
import {
  FormErrorsVisibilityStoreContextProvider,
  FormErrorsVisibilityStoreContextType,
} from '../../context/form-errors-visibility-store-context';
import { FieldPath } from '../../types/field';
import { FormErrorsVisibility, FormRef } from '../../types/form';
import { FormValues } from '../../../_shared/types/form';

type BaseProps<F extends FormValues = FormValues> = {
  additionalStyle?: string;
  children: ReactNode;
  defaultValues?: DeepPartial<F>;
  formRef?: RefObject<FormRef<F>>;
  onAutoSubmit?: (fieldName: keyof F) => void;
  method?: `POST`;
};

type ClassicProps<F extends FormValues = FormValues> = BaseProps<F> & {
  mode?: `classic`;
  onSubmit: (data: F) => Promise<void> | void;
};

type AutoSubmitProps<F extends FormValues = FormValues> = BaseProps<F> & {
  mode?: `auto-submit`;
  onSubmit: (data: DeepPartial<F>) => Promise<void> | void;
};

type Props<F extends FormValues = FormValues> =
  | ClassicProps<F>
  | AutoSubmitProps<F>;

export function Form<F extends FormValues = FormValues>(props: Props<F>) {
  const {
    additionalStyle,
    children,
    onSubmit,
    method,
    mode = `classic`,
    defaultValues,
    formRef,
    onAutoSubmit,
  } = props;
  const isAutoSubmitEnabled = mode === `auto-submit`;
  const formMethods = useForm<F>({
    // @ts-ignore
    defaultValues,
    shouldFocusError: !isAutoSubmitEnabled,
    shouldUseNativeValidation: false,
  });
  const internalFormRef = useRef<HTMLFormElement>(null);
  const previousSubmittedValues = useRef<DeepPartial<F>>(
    defaultValues ?? ({} as DeepPartial<F>),
  );
  const [formErrorsVisibility, setFormErrorsVisibility] =
    useState<FormErrorsVisibility>(mapFormModeToFormErrorsVisibility(mode));
  const formErrorsVisibilityStoreContextValue =
    useMemo<FormErrorsVisibilityStoreContextType>(
      () => ({
        visibility: formErrorsVisibility,
        setVisibility: setFormErrorsVisibility,
      }),
      [formErrorsVisibility],
    );

  useImperativeHandle(formRef, () => ({
    reset(values: DefaultValues<F>) {
      return formMethods.reset(values);
    },
    getValues() {
      return formMethods.getValues();
    },
    trigger() {
      if (isAutoSubmitEnabled) {
        setFormErrorsVisibility(`always`);
      }
      return formMethods.trigger(undefined, { shouldFocus: true });
    },
  }));

  async function doSubmit(data: F | DeepPartial<F>) {
    if (props.mode === `auto-submit`) {
      let valuesToSubmit = {} as DeepPartial<F>;
      for (const key of Object.keys(data)) {
        const typedKey = key as FieldPath<F>;
        const previousSubmittedValue = previousSubmittedValues.current[key];
        const currentValue = data[key];
        if (!isEqual(previousSubmittedValue, currentValue)) {
          valuesToSubmit[typedKey] = currentValue;
        }
      }
      previousSubmittedValues.current = data;
      if (Object.keys(valuesToSubmit).length > 0) {
        await props.onSubmit(valuesToSubmit);
      }
      return;
    }
    await onSubmit(data as F);
    formMethods.reset();
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.stopPropagation();
    return await formMethods.handleSubmit(
      async (data) => {
        await doSubmit(data);
      },
      (formErrors) => {
        if (isAutoSubmitEnabled) {
          const data = formMethods.getValues();
          const validData = Object.entries(data).reduce<DeepPartial<F>>(
            (acc, [key, value]) => {
              if (!!formErrors[key] || !value || value.length === 0) {
                return acc;
              }
              return { ...acc, [key]: value };
            },
            {} as DeepPartial<F>,
          );
          doSubmit(validData);
        }
      },
    )(e);
  }

  function scheduleSubmit(fieldName: keyof F) {
    internalFormRef.current?.requestSubmit();
    onAutoSubmit?.(fieldName);
  }

  const autoSubmitStoreContextValue = useMemo<AutoSubmitStoreContextType>(
    () => ({
      isAutoSubmitEnabled,
      scheduleSubmit: isAutoSubmitEnabled ? scheduleSubmit : null,
    }),
    [isAutoSubmitEnabled],
  );

  return (
    <form
      ref={internalFormRef}
      method={method}
      onSubmit={handleSubmit}
      className={additionalStyle}
    >
      <_FormProvider {...formMethods}>
        <AutoSubmitStoreContextProvider value={autoSubmitStoreContextValue}>
          <FormErrorsVisibilityStoreContextProvider
            value={formErrorsVisibilityStoreContextValue}
          >
            {children}
          </FormErrorsVisibilityStoreContextProvider>
        </AutoSubmitStoreContextProvider>
      </_FormProvider>
    </form>
  );
}

function mapFormModeToFormErrorsVisibility(
  mode?: `classic` | `auto-submit`,
): FormErrorsVisibility {
  if (mode === `auto-submit`) {
    return `none`;
  }
  return `always`;
}
