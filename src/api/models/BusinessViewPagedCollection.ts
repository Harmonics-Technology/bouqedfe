/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessView } from './BusinessView';
import type { Link } from './Link';
export type BusinessViewPagedCollection = {
  offset?: number | null;
  limit?: number | null;
  size?: number;
  first?: Link;
  previous?: Link;
  next?: Link;
  last?: Link;
  self?: Link;
  value?: Array<BusinessView> | null;
  nextOffset?: number | null;
  previousOffset?: number | null;
};

