/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpStatusCode } from './HttpStatusCode';
import type { ServiceCategoryView } from './ServiceCategoryView';
export type ServiceCategoryViewStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: ServiceCategoryView;
  statusCode?: HttpStatusCode;
  errors?: any;
};

