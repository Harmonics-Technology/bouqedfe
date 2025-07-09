/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCategoryViewPagedCollection } from './BusinessCategoryViewPagedCollection';
import type { HttpStatusCode } from './HttpStatusCode';
export type BusinessCategoryViewPagedCollectionStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: BusinessCategoryViewPagedCollection;
  statusCode?: HttpStatusCode;
  errors?: any;
};

