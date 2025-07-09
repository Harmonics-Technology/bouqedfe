/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Service } from './Service';
import type { ServiceCategory } from './ServiceCategory';
export type ServiceType = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  name?: string | null;
  code?: string | null;
  description?: string | null;
  icon?: string | null;
  isActive?: boolean;
  sortOrder?: number;
  serviceCategoryId?: string | null;
  serviceCategory?: ServiceCategory;
  services?: Array<Service> | null;
};

