/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceView } from './ServiceView';
import type { UserView } from './UserView';
export type ReviewView = {
  userId?: string;
  user?: UserView;
  serviceId?: string;
  service?: ServiceView;
  reviewNote?: string | null;
  reviewCount?: number;
  dateCreated?: string;
};

