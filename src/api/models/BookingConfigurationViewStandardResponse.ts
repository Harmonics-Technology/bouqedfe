/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingConfigurationView } from './BookingConfigurationView';
import type { HttpStatusCode } from './HttpStatusCode';
export type BookingConfigurationViewStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: BookingConfigurationView;
  statusCode?: HttpStatusCode;
  errors?: any;
};

