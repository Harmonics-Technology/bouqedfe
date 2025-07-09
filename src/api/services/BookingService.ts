/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingModel } from '../models/BookingModel';
import type { BookingStatus } from '../models/BookingStatus';
import type { BookingTransferModel } from '../models/BookingTransferModel';
import type { BookingViewPagedCollectionStandardResponse } from '../models/BookingViewPagedCollectionStandardResponse';
import type { BookingViewStandardResponse } from '../models/BookingViewStandardResponse';
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { LookupModel } from '../models/LookupModel';
import type { ManualBookingModel } from '../models/ManualBookingModel';
import type { StringStandardResponse } from '../models/StringStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BookingService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Lookup for a date and time to see if it is available
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public dateTimeLookup({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: LookupModel,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Booking/lookup',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Create a new booking
   * @returns BookingViewStandardResponse OK
   * @throws ApiError
   */
  public createBooking({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: BookingModel,
  }): CancelablePromise<BookingViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Booking/create',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Get a booking by it's id
   * @returns BookingViewStandardResponse OK
   * @throws ApiError
   */
  public getBooking({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BookingViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Booking/{id}',
      path: {
        'id': id,
      },
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Cancel a booking by id
   * @returns BookingViewStandardResponse OK
   * @throws ApiError
   */
  public cancelBookings({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BookingViewStandardResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/Booking/cancel/{id}',
      path: {
        'id': id,
      },
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Accept a booking by id
   * @returns BookingViewStandardResponse OK
   * @throws ApiError
   */
  public acceptBooking({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BookingViewStandardResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/Booking/accept/{id}',
      path: {
        'id': id,
      },
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Reject a booking by id
   * @returns BookingViewStandardResponse OK
   * @throws ApiError
   */
  public rejectBooking({
    id,
    reason,
    device,
  }: {
    id: string,
    reason?: string,
    device?: any,
  }): CancelablePromise<BookingViewStandardResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/Booking/reject/{id}',
      path: {
        'id': id,
      },
      headers: {
        'device': device,
      },
      query: {
        'reason': reason,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Check in a booking by id, this returns a payment link
   * @returns StringStandardResponse OK
   * @throws ApiError
   */
  public checkout({
    id,
    frontEndBaseUrl,
    device,
  }: {
    id: string,
    frontEndBaseUrl?: string,
    device?: any,
  }): CancelablePromise<StringStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Booking/checkout/{id}',
      path: {
        'id': id,
      },
      headers: {
        'device': device,
      },
      query: {
        'frontEndBaseUrl': frontEndBaseUrl,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Get all service bookings
   * @returns BookingViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public getBookingsByServiceId({
    offset,
    limit,
    businessId,
    serviceId,
    status,
    filterBy,
    search,
    startDate,
    endDate,
    device,
  }: {
    offset?: number,
    limit?: number,
    businessId?: string,
    serviceId?: string,
    status?: BookingStatus,
    filterBy?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    device?: any,
  }): CancelablePromise<BookingViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Booking/bookings',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'BusinessId': businessId,
        'ServiceId': serviceId,
        'Status': status,
        'FilterBy': filterBy,
        'Search': search,
        'StartDate': startDate,
        'EndDate': endDate,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * Get all bookings for a user
   * @returns BookingViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public getBookingsByUser({
    offset,
    limit,
    businessId,
    serviceId,
    status,
    filterBy,
    search,
    startDate,
    endDate,
    device,
  }: {
    offset?: number,
    limit?: number,
    businessId?: string,
    serviceId?: string,
    status?: BookingStatus,
    filterBy?: number,
    search?: string,
    startDate?: string,
    endDate?: string,
    device?: any,
  }): CancelablePromise<BookingViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Booking/bookings/user',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'BusinessId': businessId,
        'ServiceId': serviceId,
        'Status': status,
        'FilterBy': filterBy,
        'Search': search,
        'StartDate': startDate,
        'EndDate': endDate,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * Complete bookings for a user
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public completeBooking({
    bookingId,
    device,
  }: {
    bookingId?: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Booking/bookings/complete',
      headers: {
        'device': device,
      },
      query: {
        'bookingId': bookingId,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * Transfer booking to another user
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public transferBooking({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: BookingTransferModel,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Booking/transfer',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * Create a manual booking for businesses to add bookings that happen outside the app
   * @returns BookingViewStandardResponse OK
   * @throws ApiError
   */
  public createManualBooking({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: ManualBookingModel,
  }): CancelablePromise<BookingViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Booking/manual',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
}
