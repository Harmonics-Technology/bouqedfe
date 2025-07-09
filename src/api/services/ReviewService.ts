/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReviewModel } from '../models/ReviewModel';
import type { ReviewViewPagedCollectionStandardResponse } from '../models/ReviewViewPagedCollectionStandardResponse';
import type { ReviewViewStandardResponse } from '../models/ReviewViewStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReviewService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Review a service
   * @returns ReviewViewStandardResponse OK
   * @throws ApiError
   */
  public createReview({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: ReviewModel,
  }): CancelablePromise<ReviewViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Review/create',
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
   * Get all reviews
   * @returns ReviewViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public getReviews({
    offset,
    limit,
    businessId,
    serviceId,
    device,
  }: {
    offset?: number,
    limit?: number,
    businessId?: string,
    serviceId?: string,
    device?: any,
  }): CancelablePromise<ReviewViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Review/reviews',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'businessId': businessId,
        'serviceId': serviceId,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
}
