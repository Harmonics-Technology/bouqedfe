/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessViewPagedCollection } from './BusinessViewPagedCollection';
import type { HttpStatusCode } from './HttpStatusCode';
export type BusinessViewPagedCollectionStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: BusinessViewPagedCollection;
  statusCode?: HttpStatusCode;
  errors?: any;
};

