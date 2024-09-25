import { ReactNode, RefObject } from 'react';
import {
  ButtonIconSize,
  ButtonIconVariant,
} from '../../../server/button-icon/_/types';
import { CarouselButtonIconType } from '../components/_/types';
import { AdditionalStyle } from '../../../../style/types/additional-style';
import { CarouselAnatomy } from './anatomy';

export type AvailableBreakpoint = `base` | `sm` | `md` | `lg` | `xl`;

export type AvailableSlidePerView = 1 | 2 | 3 | 4 | 5;

export type Breakpoints = {
  [K in AvailableBreakpoint]?: AvailableSlidePerView;
};

export type Callback = () => void;

export type CarouselProps = {
  slides: ReactNode[];
  breakpoints?: Breakpoints;
  isActive?: boolean;
  isLoop?: boolean;
  align?: `start` | `center` | `end`;
  isHorizontal?: boolean;
  onPrev?: Callback;
  onNext?: Callback;
  isCentered?: boolean;
  carouselRef?: RefObject<CarouselRef>;
  additionalStyle?: AdditionalStyle<CarouselAnatomy>;
  buttonSize?: ButtonIconSize;
  buttonVariant?: ButtonIconVariant;
  buttonIconType?: CarouselButtonIconType;
  startIndex?: number;
};

export type CarouselRef = {
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
};
