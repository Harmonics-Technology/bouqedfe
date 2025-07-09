/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { SavedBusinessView } from './SavedBusinessView';
export type SavedBusinessViewPagedCollection = {
  offset?: number | null;
  limit?: number | null;
  size?: number;
  first?: Link;
  previous?: Link;
  next?: Link;
  last?: Link;
  self?: Link;
  value?: Array<SavedBusinessView> | null;
  nextOffset?: number | null;
  previousOffset?: number | null;
};

