import { MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';
import { Icon, Icons } from '../icon/Icon';
import { AdditionalStyle } from '../../../style/types/additional-style';
import { Spinner } from '../../client/spinner/Spinner';
import { ButtonAnatomy } from './_/anatomy';
import { buttonStyle } from './_/style';
import {
  ButtonColorScheme,
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from './_/types';

type Props = {
  children: ReactNode;
  type?: ButtonType;
  leftIcon?: Icons;
  rightIcon?: Icons;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
  variant?: ButtonVariant;
  additionalStyle?: AdditionalStyle<ButtonAnatomy>;
};

export function Button(props: Props) {
  const {
    children,
    type = `button`,
    leftIcon,
    rightIcon,
    isDisabled,
    isLoading,
    size,
    onClick,
    colorScheme,
    variant,
    additionalStyle,
  } = props;

  function renderChildren() {
    if (isLoading) {
      return <Spinner />;
    }
    return (
      <>
        {leftIcon && (
          <div className="text-center">
            <Icon
              icon={leftIcon}
              size="sm"
              additionalStyle={additionalStyle?.leftIcon}
            />
          </div>
        )}
        <span className={additionalStyle?.text}>{children}</span>
        {rightIcon && (
          <div className="overflow-hidden">
            <div className="text-center mt-[2px] transition-transform group-hover:animate-slide-right-left">
              <Icon
                icon={rightIcon}
                size="sm"
                additionalStyle={additionalStyle?.rightIcon}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <button
      role="button"
      type={type}
      aria-label={children?.toString()}
      aria-disabled={isDisabled || isLoading}
      disabled={isDisabled || isLoading}
      className={buttonStyle({ colorScheme, size, variant })({
        colorScheme,
        size,
        variant,
        className: clsx(`group`, additionalStyle?.root),
      })}
      onClick={onClick}
    >
      {renderChildren()}
    </button>
  );
}
