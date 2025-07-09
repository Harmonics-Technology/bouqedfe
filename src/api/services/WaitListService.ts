/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WaitList } from '../models/WaitList';
import type { WaitListPagedCollectionStandardResponse } from '../models/WaitListPagedCollectionStandardResponse';
import type { WaitListStandardResponse } from '../models/WaitListStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WaitListService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Create a new studio
   * @returns WaitListStandardResponse OK
   * @throws ApiError
   */
  public createWaitList({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: WaitList,
  }): CancelablePromise<WaitListStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/WaitList/create',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
  /**
   * Get a list of waitLists
   * @returns WaitListPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public list({
    offset,
    limit,
    device,
  }: {
    offset?: number,
    limit?: number,
    device?: any,
  }): CancelablePromise<WaitListPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/WaitList/list-waitlist',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
      },
    });
  }
}
