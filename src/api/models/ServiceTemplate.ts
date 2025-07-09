/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Service } from './Service';
import type { ServiceCategory } from './ServiceCategory';
export type ServiceTemplate = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  name?: string | null;
  description?: string | null;
  defaultPrice?: number;
  defaultDurationMinutes?: number;
  defaultPricingModel?: string | null;
  isActive?: boolean;
  serviceCategoryId?: string;
  serviceCategory?: ServiceCategory;
  defaultAttributes?: string | null;
  requiredAttributes?: string | null;
  optionalAttributes?: string | null;
  requiresApproval?: boolean;
  minAdvanceBookingHours?: number;
  maxAdvanceBookingDays?: number;
  allowsRecurring?: boolean;
  allowsGroupBooking?: boolean;
  maxGroupSize?: number;
  supportsOnSite?: boolean;
  supportsClientLocation?: boolean;
  supportsVirtual?: boolean;
  services?: Array<Service> | null;
};

