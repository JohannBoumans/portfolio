import { Anatomy } from '../../../../style/types/anatomy';

export const buttonAnatomy = [`root`, `text`, `leftIcon`, `rightIcon`] as const;
export type ButtonAnatomy = Anatomy<typeof buttonAnatomy>;
