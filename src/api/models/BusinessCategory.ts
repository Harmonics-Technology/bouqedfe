/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingConfiguration } from './BookingConfiguration';
import type { Business } from './Business';
import type { BusinessCategoryConfiguration } from './BusinessCategoryConfiguration';
import type { ServiceCategory } from './ServiceCategory';
export type BusinessCategory = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  name?: string | null;
  code?: string | null;
  displayName?: string | null;
  icon?: string | null;
  description?: string | null;
  isActive?: boolean;
  businesses?: Array<Business> | null;
  configurations?: Array<BusinessCategoryConfiguration> | null;
  serviceCategories?: Array<ServiceCategory> | null;
  bookingConfigurations?: Array<BookingConfiguration> | null;
};

