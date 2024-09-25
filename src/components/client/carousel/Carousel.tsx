'use client';

import { ReactNode, useCallback } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
// import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselButton';
import './style.css';

type Props = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
};

const defaultOptions: EmblaOptionsType = {
  dragFree: false,
  loop: true,
  duration: 80,
  containScroll: false,
};

export function Carousel(props: Props) {
  const { slides, options = defaultOptions } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{slide}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute top-0 left-0 z-10 w-full h-full"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 97%)`,
        }}
      />
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  );
}
