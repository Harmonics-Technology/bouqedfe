/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorDashboardViewStandardResponse } from '../models/VendorDashboardViewStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DashboardService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get a vendor dashboard metrics
   * @returns VendorDashboardViewStandardResponse OK
   * @throws ApiError
   */
  public vendoDashboardMetrics({
    device,
  }: {
    device?: any,
  }): CancelablePromise<VendorDashboardViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Dashboard/vendor-dashboard',
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Get a vendor business dashboard metrics
   * <param name="businessId"></param>
   * @returns VendorDashboardViewStandardResponse OK
   * @throws ApiError
   */
  public vendorBusinessDashboardMetrics({
    businessId,
    device,
  }: {
    businessId: string,
    device?: any,
  }): CancelablePromise<VendorDashboardViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Dashboard/vendor-dashboard/{businessId}',
      path: {
        'businessId': businessId,
      },
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
}
