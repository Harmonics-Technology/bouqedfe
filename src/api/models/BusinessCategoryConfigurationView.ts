/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BusinessCategoryConfigurationView = {
  id?: string;
  businessCategoryId?: string;
  businessTerminology?: string | null;
  serviceTerminology?: string | null;
  locationTerminology?: string | null;
  requiredFields?: Array<string> | null;
  optionalFields?: Array<string> | null;
  hiddenFields?: Array<string> | null;
  requiresCertification?: boolean;
  requiresInsurance?: boolean;
  supportsHomeVisits?: boolean;
  supportsVirtualServices?: boolean;
  defaultServiceDurationMinutes?: number;
  defaultCancellationFeePercentage?: number;
  dateCreated?: string;
  dateModified?: string;
};

