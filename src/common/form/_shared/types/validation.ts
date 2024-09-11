import { IntlEntry } from '../../../../types/intl';

export type ValidatorFn = (value: string) => IntlEntry | undefined;
