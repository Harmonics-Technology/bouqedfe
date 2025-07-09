/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User = {
  id?: string;
  userName?: string | null;
  normalizedUserName?: string | null;
  email?: string | null;
  normalizedEmail?: string | null;
  emailConfirmed?: boolean;
  passwordHash?: string | null;
  securityStamp?: string | null;
  concurrencyStamp?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  lockoutEnd?: string | null;
  lockoutEnabled?: boolean;
  accessFailedCount?: number;
  firstName: string;
  lastName: string;
  readonly fullName?: string | null;
  otherNames?: string | null;
  dateOfBirth?: string;
  password?: string | null;
  token?: string | null;
  profilePicture?: string | null;
  allowSmsNotification?: boolean;
  allowEmailNotification?: boolean;
  allowPushNotification?: boolean;
  isStudent?: boolean;
  university?: string | null;
  interests?: string | null;
};

