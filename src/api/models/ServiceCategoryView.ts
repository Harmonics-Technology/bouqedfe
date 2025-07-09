/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ServiceCategoryView = {
  id?: string;
  name?: string | null;
  code?: string | null;
  description?: string | null;
  icon?: string | null;
  isActive?: boolean;
  sortOrder?: number;
  parentCategoryId?: string | null;
  parentCategoryName?: string | null;
  businessCategoryId?: string;
  businessCategoryName?: string | null;
  subCategories?: Array<ServiceCategoryView> | null;
  dateCreated?: string;
  dateModified?: string;
};

