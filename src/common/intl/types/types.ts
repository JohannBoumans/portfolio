export type IntlEntry = string;

type IntlParams = Record<string, any>;

export type TranslateFn = (key: IntlEntry, params?: IntlParams) => string;
