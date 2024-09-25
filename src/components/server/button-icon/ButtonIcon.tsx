import { forwardRef, MouseEventHandler, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { Spinner } from '../../client/spinner/Spinner';

import { Icon, Icons } from '../icon/Icon';
import { Sizes } from '../icon/_/types';
import { buttonIconRootStyle } from './_/style';
import {
  ButtonIconColorScheme,
  ButtonIconSize,
  ButtonIconVariant,
} from './_/types';

type Props = {
  children?: ReactNode;
  type?: `button` | `submit`;
  icon?: Icons;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  colorScheme?: ButtonIconColorScheme;
  size?: ButtonIconSize;
  variant?: ButtonIconVariant;
  additionalStyle?: string;
};

export const ButtonIcon = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    type = `button`,
    isDisabled,
    isLoading,
    icon,
    onClick,
    colorScheme,
    size = `md`,
    variant,
    additionalStyle,
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      role="button"
      aria-label="Icon"
      aria-disabled={isDisabled}
      disabled={isDisabled}
      onClick={onClick}
      className={buttonIconRootStyle({ colorScheme, size, variant })({
        colorScheme,
        variant,
        size,
        className: additionalStyle,
      })}
    >
      {!isLoading && !children && icon && (
        <Icon
          icon={icon}
          size={mapSizeToIconSize(size)}
          color={mapColorSchemeToIconColor(colorScheme)}
        />
      )}
      {children}
      {isLoading && (
        <div className="flex h-2 w-2 items-center justify-center">
          <Spinner size="xs" colorScheme="black" />
        </div>
      )}
    </button>
  );
});

function mapSizeToIconSize(
  size: VariantProps<typeof buttonIconRootStyle>[`size`],
): Sizes {
  switch (size) {
    case `sm`: {
      return `xs`;
    }
    case `md`: {
      return `xs`;
    }
    case `lg`: {
      return `sm`;
    }
    default: {
      return `2xs`;
    }
  }
}

function mapColorSchemeToIconColor(
  colorScheme: VariantProps<typeof buttonIconRootStyle>[`colorScheme`],
) {
  switch (colorScheme) {
    case `gray`: {
      return `black`;
    }
    case `white`: {
      return `black`;
    }
    default: {
      return `black`;
    }
  }
}
