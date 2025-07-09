/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountValidationResponseStandardResponse } from '../models/AccountValidationResponseStandardResponse';
import type { BankResponseIEnumerableStandardResponse } from '../models/BankResponseIEnumerableStandardResponse';
import type { Institution } from '../models/Institution';
import type { InstitutionListStandardResponse } from '../models/InstitutionListStandardResponse';
import type { InstitutionStandardResponse } from '../models/InstitutionStandardResponse';
import type { ValidateAccountModel } from '../models/ValidateAccountModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UtilityService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get a list of banks
   * @returns BankResponseIEnumerableStandardResponse OK
   * @throws ApiError
   */
  public getApiUtilityBanks({
    device,
  }: {
    device?: any,
  }): CancelablePromise<BankResponseIEnumerableStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Utility/banks',
      headers: {
        'device': device,
      },
    });
  }
  /**
   * Get a list of institutions
   * @returns InstitutionListStandardResponse Returns a list of institutions
   * @throws ApiError
   */
  public getApiUtilityInstitutions({
    isIntegrated = true,
    device,
  }: {
    isIntegrated?: boolean,
    device?: any,
  }): CancelablePromise<InstitutionListStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Utility/institutions/{IsIntegrated}',
      path: {
        'IsIntegrated': isIntegrated,
      },
      headers: {
        'device': device,
      },
      errors: {
        400: `If the request is invalid`,
        401: `If the user is not authorized`,
        404: `If no institution is found`,
        500: `If there is an internal server error`,
      },
    });
  }
  /**
   * Update an institution
   * @returns InstitutionStandardResponse Returns the updated institution
   * @throws ApiError
   */
  public putApiUtilityInstitutions({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: Institution,
  }): CancelablePromise<InstitutionStandardResponse> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/Utility/institutions',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
      errors: {
        400: `If the request is invalid`,
        401: `If the user is not authorized`,
        404: `If no institution is found`,
        500: `If there is an internal server error`,
      },
    });
  }
  /**
   * validate an account
   * @returns AccountValidationResponseStandardResponse Returns the account validation response
   * @throws ApiError
   */
  public postApiUtilityValidateAccount({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: ValidateAccountModel,
  }): CancelablePromise<AccountValidationResponseStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Utility/validate-account',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
      errors: {
        400: `If the request is invalid`,
        401: `If the user is not authorized`,
        404: `If no account is found`,
        500: `If there is an internal server error`,
      },
    });
  }
}
