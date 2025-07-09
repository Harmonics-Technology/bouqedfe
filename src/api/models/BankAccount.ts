/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Business } from './Business';
export type BankAccount = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  businessId?: string | null;
  business?: Business;
  accountName?: string | null;
  accountNumber?: string | null;
  bankCode?: string | null;
  bankName?: string | null;
};

