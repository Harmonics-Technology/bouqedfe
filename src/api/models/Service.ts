/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalService } from './AdditionalService';
import type { Business } from './Business';
import type { Media } from './Media';
import type { PricingConfiguration } from './PricingConfiguration';
import type { Review } from './Review';
import type { ServiceAttributeValue } from './ServiceAttributeValue';
import type { ServiceTemplate } from './ServiceTemplate';
import type { ServiceType } from './ServiceType';
import type { User } from './User';
export type Service = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  name?: string | null;
  description?: string | null;
  price?: number;
  bannerImageURL?: string | null;
  university?: string | null;
  durationMinutes?: number;
  pricingModel?: string | null;
  minDurationMinutes?: number | null;
  maxDurationMinutes?: number | null;
  maxCapacity?: number;
  locationType?: string | null;
  requiresApproval?: boolean;
  minAdvanceBookingHours?: number;
  maxAdvanceBookingDays?: number;
  isActive?: boolean;
  skillLevel?: string | null;
  ageRestriction?: string | null;
  equipmentIncluded?: string | null;
  preBookingQuestions?: string | null;
  serviceTemplateId?: string | null;
  serviceTemplate?: ServiceTemplate;
  media?: Array<Media> | null;
  additionalServices?: Array<AdditionalService> | null;
  attributeValues?: Array<ServiceAttributeValue> | null;
  pricingConfigurations?: Array<PricingConfiguration> | null;
  userId?: string;
  user?: User;
  businessId?: string;
  business?: Business;
  serviceTypeId?: string;
  serviceType?: ServiceType;
  reviews?: Array<Review> | null;
};

