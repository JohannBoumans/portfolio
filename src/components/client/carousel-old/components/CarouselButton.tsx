import { MouseEventHandler } from 'react';
import { ButtonIcon } from '../../../server/button-icon/ButtonIcon';
import {
  ButtonIconSize,
  ButtonIconVariant,
} from '../../../server/button-icon/_/types';
import { Icons } from '../../../server/icon/Icon';
import { carouselButtonRootStyle } from './_/style';
import { CarouselButtonIconType, CarouselButtonVariant } from './_/types';

type Props = {
  additionalStyle?: string;
  buttonSize?: ButtonIconSize;
  buttonVariant?: ButtonIconVariant;
  buttonIconType?: CarouselButtonIconType;
  isHorizontal: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: CarouselButtonVariant;
};

export function CarouselButton(props: Props) {
  const {
    additionalStyle,
    buttonSize,
    buttonVariant = `solid`,
    buttonIconType = `arrow`,
    isHorizontal,
    variant = `left`,
    onClick,
  } = props;
  return (
    <div
      className={carouselButtonRootStyle({
        variant,
        className: `${mapHorizontalPropToCarouselButtonStyle(
          isHorizontal,
          variant,
        )} ${additionalStyle}`,
      })}
      style={{ transform: `translateY(-50%)` }}
    >
      <ButtonIcon
        icon={mapVariantToIcon(isHorizontal, buttonIconType, variant)}
        onClick={onClick}
        colorScheme="white"
        size={buttonSize}
        variant={buttonVariant}
      />
    </div>
  );
}

function mapVariantToIcon(
  isHorizontal: boolean,
  iconType: CarouselButtonIconType,
  variant?: CarouselButtonVariant,
): Icons {
  if (isHorizontal) {
    if (iconType === `arrow`) {
      if (variant === `left`) {
        return `arrow-left`;
      } else {
        return `arrow-right`;
      }
    } else {
      if (variant === `left`) {
        return `chevron-left`;
      } else {
        return `chevron-right`;
      }
    }
  } else {
    if (iconType === `arrow`) {
      if (variant === `left`) {
        return `arrow-up`;
      } else {
        return `arrow-down`;
      }
    } else {
      if (variant === `left`) {
        return `chevron-up`;
      } else {
        return `chevron-down`;
      }
    }
  }
}

function mapHorizontalPropToCarouselButtonStyle(
  isHorizontal: boolean,
  variant: CarouselButtonVariant,
) {
  if (!isHorizontal && variant === `left`) {
    return `!left-[calc(50%_-_14px)] !right-auto !top-4`;
  } else if (!isHorizontal && variant === `right`) {
    return `!left-[calc(50%_-_14px)] !right-auto !top-auto !-bottom-2`;
  }
  return ``;
}
