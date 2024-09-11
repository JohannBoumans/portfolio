import { forwardRef, useEffect, useMemo, useState } from 'react';
import { Props } from '../types/props';

export const InputSelectDesktop = forwardRef<
  HTMLInputElement,
  Props<HTMLInputElement>
>((props, ref) => {
  const {
    name,
    label,
    value,
    options,
    isDisabled,
    isInvalid,
    isRequired,
    onBlur,
    onChange,
    onFocus,
    onValueChange,
    displayedValueMapper,
  } = props;
  useEffect(() => {
    if (value) {
      handleValueChange(value);
    }
  }, []);

  function handleValueChange(value: string) {
    onValueChange(value);
    if (displayedValueMapper) {
      setInternalValue(displayedValueMapper(value));
    }
  }

  const [internalValue, setInternalValue] = useState<string | null>(null);
  const filteredOptions = useMemo(() => {
    if (internalValue) {
      return options.filter((option) =>
        option.label.toLowerCase().includes(internalValue.toLowerCase()),
      );
    }
    return options;
  }, [internalValue]);
  return (
    <div className="flex items-center gap-2">
      <div className="w-full min-w-[200px]">
        {/*<Combobox value={value} onChange={handleValueChange}>*/}
        {/*  <div className="relative">*/}
        {/*    <input*/}
        {/*      type="hidden"*/}
        {/*      name={name}*/}
        {/*      value={value}*/}
        {/*      onChange={onChange}*/}
        {/*      disabled={isDisabled}*/}
        {/*    />*/}
        {/*    <Combobox.Input*/}
        {/*      ref={ref}*/}
        {/*      as={InputText}*/}
        {/*      name="combobox-input"*/}
        {/*      label={label}*/}
        {/*      value={internalValue ?? ``}*/}
        {/*      isDisabled={isDisabled}*/}
        {/*      isInvalid={isInvalid}*/}
        {/*      isRequired={isRequired}*/}
        {/*      onBlur={onBlur}*/}
        {/*      onChange={(e) => setInternalValue(e.target.value)}*/}
        {/*      onFocus={onFocus}*/}
        {/*    />*/}
        {/*    <Transition*/}
        {/*      as={Fragment}*/}
        {/*      enter="transition ease-in duration-100"*/}
        {/*      enterFrom="opacity-0"*/}
        {/*      enterTo="opacity-100"*/}
        {/*      leave="transition ease-in duration-100"*/}
        {/*      leaveFrom="opacity-100"*/}
        {/*      leaveTo="opacity-0"*/}
        {/*    >*/}
        {/*      <Combobox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">*/}
        {/*        {filteredOptions.map((option) => (*/}
        {/*          <Combobox.Option*/}
        {/*            as="button"*/}
        {/*            key={option.value}*/}
        {/*            value={option.value}*/}
        {/*            className="color-black w-full border-b-[1px] border-[#EDF2F7] px-3 py-[10px] text-left font-[13px] font-medium duration-300 last:border-none hover:bg-[#F7FAFC]"*/}
        {/*          >*/}
        {/*            {option.label}*/}
        {/*          </Combobox.Option>*/}
        {/*        ))}*/}
        {/*      </Combobox.Options>*/}
        {/*    </Transition>*/}
        {/*  </div>*/}
        {/*</Combobox>*/}
      </div>
    </div>
  );
});
