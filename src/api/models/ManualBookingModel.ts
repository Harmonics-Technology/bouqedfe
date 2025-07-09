/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeOnlyModel } from './TimeOnlyModel';
export type ManualBookingModel = {
  serviceId: string;
  date: string;
  inputTime: TimeOnlyModel;
  durationMinutes?: number;
  amount: number;
  tax?: number;
  totalAmount?: number;
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhone?: string | null;
  additionalServices?: Array<string> | null;
  specialRequests?: string | null;
  locationType?: string | null;
  clientAddress?: string | null;
  virtualMeetingLink?: string | null;
  participantCount?: number;
  participantDetails?: string | null;
  depositAmount?: number | null;
  isDepositPaid?: boolean;
  depositPaidDate?: string | null;
  bookingSource?: string | null;
  bookingNotes?: string | null;
  autoAccept?: boolean;
  isPaymentReceived?: boolean;
  paymentMethod?: string | null;
  paymentReference?: string | null;
};

