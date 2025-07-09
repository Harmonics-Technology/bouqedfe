/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccount } from './BankAccount';
import type { BusinessCategory } from './BusinessCategory';
import type { Point } from './Point';
import type { Service } from './Service';
import type { User } from './User';
export type Business = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  name?: string | null;
  description?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  zipCode?: string | null;
  longitude?: number | null;
  latitude?: number | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  logo?: string | null;
  coverPhoto?: string | null;
  officeAddress?: string | null;
  businessCapacity?: string | null;
  cacDocumentReference?: string | null;
  meansOfIdentification?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  linkedIn?: string | null;
  youTube?: string | null;
  university?: string | null;
  businessTourVideo?: string | null;
  location?: Point;
  userId?: string;
  user?: User;
  businessCategoryId?: string | null;
  businessCategory?: BusinessCategory;
  professionalCredentials?: string | null;
  insuranceInformation?: string | null;
  serviceAreaRadiusKm?: number | null;
  availableEquipment?: string | null;
  teamMembers?: string | null;
  businessHours?: string | null;
  certifications?: string | null;
  isVerified?: boolean;
  verificationDate?: string | null;
  verificationNotes?: string | null;
  services?: Array<Service> | null;
  bankAccounts?: Array<BankAccount> | null;
};

