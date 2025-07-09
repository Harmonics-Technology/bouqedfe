/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessView } from './BusinessView';
import type { ServiceView } from './ServiceView';
import type { UserView } from './UserView';
export type RecentlyViewedView = {
  userId?: string;
  serviceId?: string | null;
  businessId?: string | null;
  user?: UserView;
  service?: ServiceView;
  business?: BusinessView;
};

