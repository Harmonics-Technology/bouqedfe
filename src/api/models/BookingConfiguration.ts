/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessCategory } from './BusinessCategory';
export type BookingConfiguration = {
  id?: string;
  dateCreated?: string;
  dateModified?: string;
  businessCategoryId?: string;
  businessCategory?: BusinessCategory;
  requiresInstantBooking?: boolean;
  requiresApproval?: boolean;
  minAdvanceBookingHours?: number;
  maxAdvanceBookingDays?: number;
  cancellationDeadlineHours?: number;
  cancellationFeePercentage?: number;
  allowsRescheduling?: boolean;
  reschedulingDeadlineHours?: number;
  requiresDeposit?: boolean;
  depositPercentage?: number;
  requiresFullPaymentUpfront?: boolean;
  supportsRecurringBookings?: boolean;
  supportsPackageBookings?: boolean;
  supportsGroupBookings?: boolean;
  maxGroupSize?: number;
  bufferTimeBeforeMinutes?: number;
  bufferTimeAfterMinutes?: number;
  preparationTimeMinutes?: number;
  sendReminderEmails?: boolean;
  reminderSchedule?: string | null;
  sendFollowUpEmails?: boolean;
  followUpDelayHours?: number;
  supportsWaitlist?: boolean;
  waitlistExpiryHours?: number;
};

