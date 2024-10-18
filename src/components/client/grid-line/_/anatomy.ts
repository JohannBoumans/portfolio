import { Anatomy } from '../../../../style/types/anatomy';

export const gridLineAnatomy = [
  `root`,
  `cellContainer`,
  `first`,
  `second`,
  `third`,
] as const;
export type GridLineAnatomy = Anatomy<typeof gridLineAnatomy>;
