// todo: remove this file`

export type InputType = `email` | `tel` | `text` | `search` | `password`;

export type AutoCompleteType =
  // The given (or "first") name.
  | `given-name`
  // The family (or "last") name.
  | `family-name`
  // An email address.
  | `email`
  // A username or account name.
  | `username`
  /**
   * A new password. When creating a new account or changing passwords, this should be used for an "Enter your new password" or "Confirm new password" field, as opposed to a general "Enter your current password" field that might be present.
   * This may be used by the browser both to avoid accidentally filling in an existing password and to offer assistance in creating a secure password
   */
  | `new-password`
  // The user's current password.
  | `current-password`
  /**
   * A one-time password (OTP) for verifying user information, most commonly a phone number used as an additional factor in a sign-in flow.
   */
  | `one-time-code`
  /**
   * A street address. This can be multiple lines of text, and should fully identify the location of the address within its second administrative level (typically a city or town), but should not include the city name, ZIP or postal code, or country name.
   */
  | `street-address`
  // The street address to send the product.
  | `shipping street-address`
  // The street address to associate with the form of payment used.
  | `billing street-address`
  // Each individual line of the street address.
  | `address-line1`
  // State
  | `address-level1`
  // City
  | `address-level2`
  // A country or territory code.
  // todo: improve
  | `country`
  // A postal code (in the United States, this is the ZIP code).
  | `postal-code`
  // A full telephone number, including the country code.
  // todo: improve
  | `tel`;
