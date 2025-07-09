/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecentlyViewedModel } from '../models/RecentlyViewedModel';
import type { RecentlyViewedViewIEnumerableStandardResponse } from '../models/RecentlyViewedViewIEnumerableStandardResponse';
import type { RecentlyViewedViewStandardResponse } from '../models/RecentlyViewedViewStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RecentlyViewedService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Create a new recently viewed item
   * @returns RecentlyViewedViewStandardResponse OK
   * @throws ApiError
   */
  public createRecentlyViewed({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: RecentlyViewedModel,
  }): CancelablePromise<RecentlyViewedViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/RecentlyViewed/create',
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
   * Get recently viewed items
   * @returns RecentlyViewedViewIEnumerableStandardResponse OK
   * @throws ApiError
   */
  public getRecentlyViewedItems({
    type,
    device,
  }: {
    type: string,
    device?: any,
  }): CancelablePromise<RecentlyViewedViewIEnumerableStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/RecentlyViewed/get/{type}',
      path: {
        'type': type,
      },
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
}
