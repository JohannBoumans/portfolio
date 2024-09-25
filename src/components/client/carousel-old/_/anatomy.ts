import { Anatomy } from '../../../../style/types/anatomy';

export const carouselAnatomy = [
  `root`,
  `container`,
  `item`,
  `slide`,
  `buttonLeft`,
  `buttonRight`,
] as const;
export type CarouselAnatomy = Anatomy<typeof carouselAnatomy>;
