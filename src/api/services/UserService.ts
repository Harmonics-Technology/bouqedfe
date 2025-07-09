/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { InitiateResetModel } from '../models/InitiateResetModel';
import type { LoginModel } from '../models/LoginModel';
import type { PasswordReset } from '../models/PasswordReset';
import type { PasswordVerificationModel } from '../models/PasswordVerificationModel';
import type { RegisterModel } from '../models/RegisterModel';
import type { SecurityQuestionModel } from '../models/SecurityQuestionModel';
import type { StringStandardResponse } from '../models/StringStandardResponse';
import type { UpdateUserModel } from '../models/UpdateUserModel';
import type { UserProfileViewStandardResponse } from '../models/UserProfileViewStandardResponse';
import type { UserViewStandardResponse } from '../models/UserViewStandardResponse';
import type { VendorRegisterModel } from '../models/VendorRegisterModel';
import type { VendorUpgradeModel } from '../models/VendorUpgradeModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Create a new user
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public create({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: RegisterModel,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/register',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
  /**
   * Login a user
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public loginUser({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: LoginModel,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/login',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
  /**
   * Verify a user
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public verify({
    token,
    device,
  }: {
    token: string,
    device?: any,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/User/verifyUser/{token}',
      path: {
        'token': token,
      },
      headers: {
        'device': device,
      },
    });
  }
  /**
   * Initiate password reset
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public initiateReset({
    redirectUrl,
    device,
    requestBody,
  }: {
    redirectUrl?: string,
    device?: any,
    requestBody?: InitiateResetModel,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/reset/initiate',
      headers: {
        'device': device,
      },
      query: {
        'redirectUrl': redirectUrl,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
  /**
   * Complete password reset
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public completeReset({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: PasswordReset,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/reset/complete',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
  /**
   * Update a user
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public updateUser({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: UpdateUserModel,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/update',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
  /**
   * Update   users password
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public updatePassword({
    oldPassword,
    newPassword,
    device,
  }: {
    oldPassword?: string,
    newPassword?: string,
    device?: any,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/User/change_password',
      headers: {
        'device': device,
      },
      query: {
        'OldPassword': oldPassword,
        'NewPassword': newPassword,
      },
    });
  }
  /**
   * Get a user profile
   * @returns UserProfileViewStandardResponse OK
   * @throws ApiError
   */
  public userProfile({
    userId,
    device,
  }: {
    userId: string,
    device?: any,
  }): CancelablePromise<UserProfileViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/User/user-profile/{userId}',
      path: {
        'userId': userId,
      },
      headers: {
        'device': device,
      },
    });
  }
  /**
   * Get a user by id
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public getUserById({
    userId,
    device,
  }: {
    userId: string,
    device?: any,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/User/{userId}',
      path: {
        'userId': userId,
      },
      headers: {
        'device': device,
      },
    });
  }
  /**
   * Validate a token
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public validateToken({
    device,
  }: {
    device?: any,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/validate-token',
      headers: {
        'device': device,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  /**
   * Upgrade a user from customer to vendor
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public becomeVendor({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: VendorUpgradeModel,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/become-vendor',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
  /**
   * Create a vendor user
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public createVendor({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: VendorRegisterModel,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/create-vendor',
      headers: {
        'device': device,
      },
      body: requestBody,
      mediaType: 'application/json-patch+json',
    });
  }
  /**
   * Get otp
   * @returns UserViewStandardResponse OK
   * @throws ApiError
   */
  public getOtp({
    device,
  }: {
    device?: any,
  }): CancelablePromise<UserViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/get-otp',
      headers: {
        'device': device,
      },
    });
  }
  /**
   * Create or update security question
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public createSecurityQuestion({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: SecurityQuestionModel,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/security-question/create-or-update',
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
   * verify answer
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public verifySecurityQuestionAnswer({
    answer,
    device,
  }: {
    answer?: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/security-question/verify-answer',
      headers: {
        'device': device,
      },
      query: {
        'answer': answer,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Get user question
   * @returns StringStandardResponse OK
   * @throws ApiError
   */
  public getUserSecurityQuestion({
    device,
  }: {
    device?: any,
  }): CancelablePromise<StringStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/security-question/question',
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
  /**
   * Verify user password
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public verifyPassword({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: PasswordVerificationModel,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/verify-user-password',
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
   * Resend Verification Email
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public resendEmailVerification({
    email,
    device,
  }: {
    email?: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/User/resend-email-verification',
      headers: {
        'device': device,
      },
      query: {
        'email': email,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }
}
