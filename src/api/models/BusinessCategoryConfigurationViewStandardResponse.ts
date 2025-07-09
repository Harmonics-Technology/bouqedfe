/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCategoryConfigurationView } from './BusinessCategoryConfigurationView';
import type { HttpStatusCode } from './HttpStatusCode';
export type BusinessCategoryConfigurationViewStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: BusinessCategoryConfigurationView;
  statusCode?: HttpStatusCode;
  errors?: any;
};

