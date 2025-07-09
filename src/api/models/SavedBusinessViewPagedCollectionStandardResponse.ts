/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpStatusCode } from './HttpStatusCode';
import type { SavedBusinessViewPagedCollection } from './SavedBusinessViewPagedCollection';
export type SavedBusinessViewPagedCollectionStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: SavedBusinessViewPagedCollection;
  statusCode?: HttpStatusCode;
  errors?: any;
};

