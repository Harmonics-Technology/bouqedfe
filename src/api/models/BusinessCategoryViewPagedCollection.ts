/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCategoryView } from './BusinessCategoryView';
import type { Link } from './Link';
export type BusinessCategoryViewPagedCollection = {
  offset?: number | null;
  limit?: number | null;
  size?: number;
  first?: Link;
  previous?: Link;
  next?: Link;
  last?: Link;
  self?: Link;
  value?: Array<BusinessCategoryView> | null;
  nextOffset?: number | null;
  previousOffset?: number | null;
};

