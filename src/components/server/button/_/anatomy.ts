import { Anatomy } from '@nebula/style';

export const buttonAnatomy = [`root`, `text`, `leftIcon`, `rightIcon`] as const;
export type ButtonAnatomy = Anatomy<typeof buttonAnatomy>;
