/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCategory } from './BusinessCategory';
import type { ServiceTemplate } from './ServiceTemplate';
import type { ServiceType } from './ServiceType';
export type ServiceCategory = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  name?: string | null;
  code?: string | null;
  description?: string | null;
  icon?: string | null;
  isActive?: boolean;
  sortOrder?: number;
  parentCategoryId?: string | null;
  parentCategory?: ServiceCategory;
  subCategories?: Array<ServiceCategory> | null;
  businessCategoryId?: string;
  businessCategory?: BusinessCategory;
  serviceTypes?: Array<ServiceType> | null;
  serviceTemplates?: Array<ServiceTemplate> | null;
};

