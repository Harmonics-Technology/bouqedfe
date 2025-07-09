/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { NotificationViewPagedCollectionStandardResponse } from '../models/NotificationViewPagedCollectionStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NotificationService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get a notifications by it's userId
   * @returns NotificationViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public getUserNotification({
    userId,
    offset,
    limit,
    isRead,
    device,
  }: {
    userId: string,
    offset?: number,
    limit?: number,
    isRead?: boolean,
    device?: any,
  }): CancelablePromise<NotificationViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Notification/{userId}',
      path: {
        'userId': userId,
      },
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'isRead': isRead,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Get users booking notifications
   * @returns NotificationViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public getUserBookingNotification({
    userId,
    offset,
    limit,
    isRead,
    device,
  }: {
    userId: string,
    offset?: number,
    limit?: number,
    isRead?: boolean,
    device?: any,
  }): CancelablePromise<NotificationViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Notification/bookings/{userId}',
      path: {
        'userId': userId,
      },
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'isRead': isRead,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Mark notification as read
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public markAsRead({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Notification/read/{id}',
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
   * Delete notification
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteNotification({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Notification/delete/{id}',
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
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public sendNotification({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Notification/send',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
}
