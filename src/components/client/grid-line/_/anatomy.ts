import { Anatomy } from '../../../../style/types/anatomy';

export const gridLineAnatomy = [`root`, `first`, `second`, `third`] as const;
export type GridLineAnatomy = Anatomy<typeof gridLineAnatomy>;
