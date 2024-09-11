import { InputProps } from '../../_shared/props';
import { SelectOption } from '../../../types';

export type Props<T extends HTMLInputElement | HTMLSelectElement> =
  InputProps<T> & {
    onValueChange: (value: string) => void;
    options: SelectOption[];
    displayedValueMapper?: (value: string) => string;
  };
