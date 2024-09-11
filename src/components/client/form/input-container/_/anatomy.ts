import { Anatomy } from '../../../../../style/types/anatomy';

export const inputContainerAnatomy = [`root`, `label`] as const;
export type InputContainerAnatomy = Anatomy<typeof inputContainerAnatomy>;
