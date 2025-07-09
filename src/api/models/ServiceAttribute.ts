/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCategory } from './BusinessCategory';
import type { ServiceAttributeValue } from './ServiceAttributeValue';
export type ServiceAttribute = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  name?: string | null;
  code?: string | null;
  description?: string | null;
  dataType?: string | null;
  isRequired?: boolean;
  isActive?: boolean;
  sortOrder?: number;
  options?: string | null;
  validationRules?: string | null;
  businessCategoryId?: string;
  businessCategory?: BusinessCategory;
  serviceAttributeValues?: Array<ServiceAttributeValue> | null;
};

