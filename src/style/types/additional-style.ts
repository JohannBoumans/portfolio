export type AdditionalStyle<Anatomy extends string = string> = {
  [Key in Anatomy]?: string;
};
