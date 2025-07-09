/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Business } from './Business';
import type { Service } from './Service';
export type Media = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  url?: string | null;
  serviceId?: string | null;
  service?: Service;
  businessId?: string | null;
  business?: Business;
};

