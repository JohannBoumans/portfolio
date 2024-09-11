import { Anatomy } from '../../../../style/types/anatomy';

export const inputAnatomy = [`root`, `field`, `label`] as const;
export type InputAnatomy = Anatomy<typeof inputAnatomy>;
