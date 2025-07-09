/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { ObjectStandardResponse } from '../models/ObjectStandardResponse';
import type { WithdrawalModel } from '../models/WithdrawalModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PaymentService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Verify payment using the transaction reference and transaction id
   * @returns ObjectStandardResponse OK
   * @throws ApiError
   */
  public verifyPayment({
    transactionReference,
    device,
  }: {
    transactionReference: string,
    device?: any,
  }): CancelablePromise<ObjectStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Payment/verify/{transactionReference}',
      path: {
        'transactionReference': transactionReference,
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
   * Withdraw from wallet
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public withdrawFromWallet({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: WithdrawalModel,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Payment/wallet/withdraw',
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
