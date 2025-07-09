/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Service } from './Service';
export type PricingConfiguration = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  serviceId?: string;
  service?: Service;
  pricingModel?: string | null;
  basePrice?: number;
  hourlyRate?: number | null;
  minimumDurationMinutes?: number | null;
  maximumDurationMinutes?: number | null;
  tierPricing?: string | null;
  timeBasedRules?: string | null;
  packageSessionCount?: number | null;
  packagePrice?: number | null;
  packageDiscount?: number | null;
  addOnServices?: string | null;
  discountRules?: string | null;
  currency?: string | null;
  taxRate?: number;
  isTaxInclusive?: boolean;
  requiresDeposit?: boolean;
  depositAmount?: number;
  depositPercentage?: number;
  isActive?: boolean;
};

