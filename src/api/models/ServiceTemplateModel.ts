/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ServiceTemplateModel = {
  name: string;
  description?: string | null;
  defaultPrice: number;
  defaultDurationMinutes?: number;
  defaultPricingModel?: string | null;
  isActive?: boolean;
  serviceCategoryId: string;
  defaultAttributes?: Record<string, any> | null;
  requiredAttributes?: Array<string> | null;
  optionalAttributes?: Array<string> | null;
  requiresApproval?: boolean;
  minAdvanceBookingHours?: number;
  maxAdvanceBookingDays?: number;
  allowsRecurring?: boolean;
  allowsGroupBooking?: boolean;
  maxGroupSize?: number;
  supportsOnSite?: boolean;
  supportsClientLocation?: boolean;
  supportsVirtual?: boolean;
};

