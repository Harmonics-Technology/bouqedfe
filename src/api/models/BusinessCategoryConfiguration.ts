/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCategory } from './BusinessCategory';
export type BusinessCategoryConfiguration = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  businessCategoryId?: string;
  businessCategory?: BusinessCategory;
  businessTerminology?: string | null;
  serviceTerminology?: string | null;
  locationTerminology?: string | null;
  requiredFields?: string | null;
  optionalFields?: string | null;
  hiddenFields?: string | null;
  requiresCertification?: boolean;
  requiresInsurance?: boolean;
  supportsHomeVisits?: boolean;
  supportsVirtualServices?: boolean;
  defaultServiceDurationMinutes?: number;
  defaultCancellationFeePercentage?: number;
};

