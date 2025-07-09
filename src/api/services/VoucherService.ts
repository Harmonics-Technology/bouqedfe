/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { VoucherModel } from '../models/VoucherModel';
import type { VoucherStandardResponse } from '../models/VoucherStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VoucherService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns VoucherStandardResponse OK
   * @throws ApiError
   */
  public createVoucher({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: VoucherModel,
  }): CancelablePromise<VoucherStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Voucher/create',
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
   * @returns VoucherStandardResponse OK
   * @throws ApiError
   */
  public getVoucher({
    code,
    device,
  }: {
    code: string,
    device?: any,
  }): CancelablePromise<VoucherStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Voucher/{code}',
      path: {
        'code': code,
      },
      headers: {
        'device': device,
      },
    });
  }
  /**
   * @returns VoucherStandardResponse OK
   * @throws ApiError
   */
  public updateVoucher({
    code,
    device,
    requestBody,
  }: {
    code: string,
    device?: any,
    requestBody?: VoucherModel,
  }): CancelablePromise<VoucherStandardResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/Voucher/{code}',
      path: {
        'code': code,
      },
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
  /**
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public pauseVoucher({
    code,
    device,
  }: {
    code: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/Voucher/{code}/pause',
      path: {
        'code': code,
      },
      headers: {
        'device': device,
      },
    });
  }
  /**
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public resumeVoucher({
    code,
    device,
  }: {
    code: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/Voucher/{code}/resume',
      path: {
        'code': code,
      },
      headers: {
        'device': device,
      },
    });
  }
  /**
   * @returns VoucherStandardResponse OK
   * @throws ApiError
   */
  public listVouchers({
    offset,
    limit,
    device,
  }: {
    offset?: number,
    limit?: number,
    device?: any,
  }): CancelablePromise<VoucherStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Voucher',
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
