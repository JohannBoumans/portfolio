'use client';

import * as React from 'react';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '../../../../utils/cn';

const ShadcnSwitch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      `peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-[1px] border-[#37383A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50`,
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        `pointer-events-none block h-4 w-4 rounded-full bg-red shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-[4px]`,
      )}
    />
  </SwitchPrimitives.Root>
));
ShadcnSwitch.displayName = SwitchPrimitives.Root.displayName;

export { ShadcnSwitch };
