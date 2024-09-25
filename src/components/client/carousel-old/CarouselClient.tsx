'use client';

import { PropsWithChildren, useImperativeHandle } from 'react';
import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { AdditionalStyle } from '../../../style/types/additional-style';
import { CarouselAnatomy } from './_/anatomy';
import { CarouselProps } from './_/types';
import { CarouselButton } from './components/CarouselButton';

type Props = Pick<
  CarouselProps,
  | `isLoop`
  | `onPrev`
  | `onNext`
  | `align`
  | `carouselRef`
  | `isActive`
  | `isHorizontal`
  | `buttonSize`
  | `buttonVariant`
  | `buttonIconType`
  | `startIndex`
> &
  PropsWithChildren & {
    additionalStyle?: AdditionalStyle<CarouselAnatomy>;
  };

export function CarouselClient(props: Props) {
  const {
    additionalStyle,
    buttonSize,
    buttonVariant,
    buttonIconType,
    children,
    isActive = true,
    isLoop = true,
    isHorizontal = true,
    onPrev,
    onNext,
    align = `start`,
    carouselRef,
    startIndex,
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align,
    active: isActive,
    loop: isLoop,
    axis: mapHorizontalPropToCarouselAxis(isHorizontal),
    startIndex: startIndex ?? 0,
  });

  useImperativeHandle(carouselRef, () => {
    return {
      scrollNext: () => emblaApi?.scrollNext(),
      scrollPrev: () => emblaApi?.scrollPrev(),
      scrollTo: (index: number) => emblaApi?.scrollTo(index),
    };
  });

  function handlePrev() {
    if (emblaApi) {
      emblaApi.scrollPrev();
      onPrev?.();
    }
  }

  function handleNext() {
    if (emblaApi) {
      emblaApi.scrollNext();
      onNext?.();
    }
  }

  return (
    <div className={clsx(`relative`, additionalStyle?.root)}>
      {isActive && (
        <CarouselButton
          variant="left"
          isHorizontal={isHorizontal}
          onClick={handlePrev}
          additionalStyle={clsx(`carousel-arrow`, additionalStyle?.buttonLeft)}
          buttonSize={buttonSize}
          buttonVariant={buttonVariant}
          buttonIconType={buttonIconType}
        />
      )}
      <div
        ref={emblaRef}
        className={clsx(`overflow-hidden`, additionalStyle?.container)}
      >
        {children}
      </div>
      {isActive && (
        <CarouselButton
          variant="right"
          isHorizontal={isHorizontal}
          onClick={handleNext}
          additionalStyle={clsx(`carousel-arrow`, additionalStyle?.buttonRight)}
          buttonSize={buttonSize}
          buttonVariant={buttonVariant}
          buttonIconType={buttonIconType}
        />
      )}
    </div>
  );
}

function mapHorizontalPropToCarouselAxis(isHorizontal: boolean) {
  if (isHorizontal) {
    return `x`;
  }
  return `y`;
}
