/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCategoryView } from './BusinessCategoryView';
import type { HttpStatusCode } from './HttpStatusCode';
export type BusinessCategoryViewStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: BusinessCategoryView;
  statusCode?: HttpStatusCode;
  errors?: any;
};

