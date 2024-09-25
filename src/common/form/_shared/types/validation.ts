import { IntlEntry } from '../../../intl/types/types';

export type ValidatorFn = (value: string) => IntlEntry | undefined;
