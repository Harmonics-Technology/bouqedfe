/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessView } from './BusinessView';
import type { HttpStatusCode } from './HttpStatusCode';
export type BusinessViewStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: BusinessView;
  statusCode?: HttpStatusCode;
  errors?: any;
};

