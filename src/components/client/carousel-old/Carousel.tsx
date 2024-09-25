'use client';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { Breakpoints, CarouselProps } from './_/types';
import { CarouselSlide } from './components/CarouselSlide';

const CarouselClient = dynamic(() =>
  import(`./CarouselClient`).then((mod) => mod.CarouselClient),
);

const defaultBreakpoints = {
  base: 1,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
} satisfies Breakpoints;

export function Carousel(props: CarouselProps) {
  const {
    slides = [],
    breakpoints = defaultBreakpoints,
    isCentered,
    additionalStyle,
  } = props;

  function getClassNames() {
    let classNames = `auto-cols-1`;
    if (breakpoints.base) {
      const slidePerView = breakpoints.base;
      if (slidePerView === 1) {
        classNames += ` auto-cols-1`;
      }
      if (slidePerView === 2) {
        classNames += ` auto-cols-2`;
      }
      if (slidePerView === 3) {
        classNames += ` auto-cols-3`;
      }
      if (slidePerView === 4) {
        classNames += ` auto-cols-4`;
      }
      if (slidePerView === 5) {
        classNames += ` auto-cols-5`;
      }
    }
    if (breakpoints.sm) {
      const slidePerView = breakpoints.sm;
      if (slidePerView === 1) {
        classNames += ` sm:auto-cols-1`;
      }
      if (slidePerView === 2) {
        classNames += ` sm:auto-cols-2`;
      }
      if (slidePerView === 3) {
        classNames += ` sm:auto-cols-3`;
      }
      if (slidePerView === 4) {
        classNames += ` sm:auto-cols-4`;
      }
      if (slidePerView === 5) {
        classNames += ` sm:auto-cols-5`;
      }
    }
    if (breakpoints.md) {
      const slidePerView = breakpoints.md;
      if (slidePerView === 1) {
        classNames += ` md:auto-cols-1`;
      }
      if (slidePerView === 2) {
        classNames += ` md:auto-cols-2`;
      }
      if (slidePerView === 3) {
        classNames += ` md:auto-cols-3`;
      }
      if (slidePerView === 4) {
        classNames += ` md:auto-cols-4`;
      }
      if (slidePerView === 5) {
        classNames += ` md:auto-cols-5`;
      }
    }
    if (breakpoints.lg) {
      const slidePerView = breakpoints.lg;
      if (slidePerView === 1) {
        classNames += ` lg:auto-cols-1`;
      }
      if (slidePerView === 2) {
        classNames += ` lg:auto-cols-2`;
      }
      if (slidePerView === 3) {
        classNames += ` lg:auto-cols-3`;
      }
      if (slidePerView === 4) {
        classNames += ` lg:auto-cols-4`;
      }
      if (slidePerView === 5) {
        classNames += ` lg:auto-cols-5`;
      }
    }
    if (breakpoints.xl) {
      const slidePerView = breakpoints.xl;
      if (slidePerView === 1) {
        classNames += ` xl:auto-cols-1`;
      }
      if (slidePerView === 2) {
        classNames += ` xl:auto-cols-2`;
      }
      if (slidePerView === 3) {
        classNames += ` xl:auto-cols-3`;
      }
      if (slidePerView === 4) {
        classNames += ` xl:auto-cols-4`;
      }
      if (slidePerView === 5) {
        classNames += ` xl:auto-cols-5`;
      }
    }
    return classNames;
  }

  return (
    <CarouselClient additionalStyle={additionalStyle} {...props}>
      <div
        className={clsx(
          `grid grid-flow-col`,
          getClassNames(),
          additionalStyle?.item,
        )}
      >
        {slides.map((slide, key) => (
          <CarouselSlide
            key={key}
            isCentered={isCentered}
            additionalStyle={additionalStyle?.slide}
          >
            {slide}
          </CarouselSlide>
        ))}
      </div>
    </CarouselClient>
  );
}
