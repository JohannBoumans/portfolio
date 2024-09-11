export type ContactFormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  message: string;
};

export type NewsletterFormValues = {
  emailAddress: string;
};

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  passwordConfirm: string;
};

export type LoginFormValues = {
  emailAddress: string;
  password: string;
};

export type RecoverPasswordFormValues = {
  emailAddress: string;
};

export type ResetPasswordFormValues = {
  emailAddress: string;
  password: string;
  passwordConfirm: string;
};

export type UpdateProfileFormValues = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phone?: string;
};

export type UpdatePasswordFormValues = {
  password: string;
  passwordConfirm: string;
};

export type CreateAddressFormValues = {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  company: string;
  address: string;
  city: string;
  province: string;
  zip: string;
  country: string;
};

export type UpdateAddressFormValues = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  company?: string;
  address?: string;
  city?: string;
  province?: string;
  zip?: string;
  country?: string;
};
