/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalServiceModel } from '../models/AdditionalServiceModel';
import type { AdditionalServiceViewStandardResponse } from '../models/AdditionalServiceViewStandardResponse';
import type { BankAccountModel } from '../models/BankAccountModel';
import type { BankAccountViewListStandardResponse } from '../models/BankAccountViewListStandardResponse';
import type { BankAccountViewStandardResponse } from '../models/BankAccountViewStandardResponse';
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { BusinessKYCModel } from '../models/BusinessKYCModel';
import type { BusinessModel } from '../models/BusinessModel';
import type { BusinessViewListStandardResponse } from '../models/BusinessViewListStandardResponse';
import type { BusinessViewPagedCollectionStandardResponse } from '../models/BusinessViewPagedCollectionStandardResponse';
import type { BusinessViewStandardResponse } from '../models/BusinessViewStandardResponse';
import type { GlobalSearchResultViewPagedCollectionStandardResponse } from '../models/GlobalSearchResultViewPagedCollectionStandardResponse';
import type { MediaModel } from '../models/MediaModel';
import type { MediaUpdateModel } from '../models/MediaUpdateModel';
import type { MediaViewStandardResponse } from '../models/MediaViewStandardResponse';
import type { SavedBusinessViewPagedCollectionStandardResponse } from '../models/SavedBusinessViewPagedCollectionStandardResponse';
import type { SavedBusinessViewStandardResponse } from '../models/SavedBusinessViewStandardResponse';
import type { SavedServiceViewPagedCollectionStandardResponse } from '../models/SavedServiceViewPagedCollectionStandardResponse';
import type { SavedServiceViewStandardResponse } from '../models/SavedServiceViewStandardResponse';
import type { ServiceModel } from '../models/ServiceModel';
import type { ServiceTypeViewListStandardResponse } from '../models/ServiceTypeViewListStandardResponse';
import type { ServiceViewPagedCollectionStandardResponse } from '../models/ServiceViewPagedCollectionStandardResponse';
import type { ServiceViewStandardResponse } from '../models/ServiceViewStandardResponse';
import type { TransactionViewPagedCollectionStandardResponse } from '../models/TransactionViewPagedCollectionStandardResponse';
import type { UpdateServiceModel } from '../models/UpdateServiceModel';
import type { WalletPinModel } from '../models/WalletPinModel';
import type { WalletViewStandardResponse } from '../models/WalletViewStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BusinessService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Create a new business
   * @returns BusinessViewStandardResponse OK
   * @throws ApiError
   */
  public createBusiness({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: BusinessModel,
  }): CancelablePromise<BusinessViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/create',
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
   * Get business by id
   * @returns BusinessViewStandardResponse OK
   * @throws ApiError
   */
  public getBusinessById({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BusinessViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/{id}',
      path: {
        'id': id,
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
  /**
   * update business
   * @returns BusinessViewStandardResponse OK
   * @throws ApiError
   */
  public updateBusiness({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: BusinessModel,
  }): CancelablePromise<BusinessViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/update',
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
   * add business kyc
   * @returns BusinessViewStandardResponse OK
   * @throws ApiError
   */
  public addOrUpdateKyc({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: BusinessKYCModel,
  }): CancelablePromise<BusinessViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/kyc',
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
   * delete business
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteBusiness({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/delete/{id}',
      path: {
        'id': id,
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
  /**
   * Create a new service for a business
   * @returns ServiceViewStandardResponse OK
   * @throws ApiError
   */
  public createService({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: ServiceModel,
  }): CancelablePromise<ServiceViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/service/create',
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
   * Get service by id
   * @returns ServiceViewStandardResponse OK
   * @throws ApiError
   */
  public getServiceById({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<ServiceViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/service/{id}',
      path: {
        'id': id,
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
  /**
   * Create a new additional service for a service
   * @returns AdditionalServiceViewStandardResponse OK
   * @throws ApiError
   */
  public createAdditionalService({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: AdditionalServiceModel,
  }): CancelablePromise<AdditionalServiceViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/additional-service/create',
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
   * Update service
   * @returns ServiceViewStandardResponse OK
   * @throws ApiError
   */
  public updateService({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: UpdateServiceModel,
  }): CancelablePromise<ServiceViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/service/update',
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
   * Update additional service
   * @returns AdditionalServiceViewStandardResponse OK
   * @throws ApiError
   */
  public updateAAdditionalService({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: AdditionalServiceModel,
  }): CancelablePromise<AdditionalServiceViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/additional-service/update',
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
   * Update service image
   * @returns MediaViewStandardResponse OK
   * @throws ApiError
   */
  public updateMediaUrl({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: MediaUpdateModel,
  }): CancelablePromise<MediaViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/image/update',
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
   * delete service
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteService({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/service/delete/{id}',
      path: {
        'id': id,
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
  /**
   * delete additional service
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteAdditionalService({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/additional-service/delete/{id}',
      path: {
        'id': id,
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
  /**
   * delete service image file
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteServiceImage({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/service-image/delete/{id}',
      path: {
        'id': id,
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
  /**
   * Get wallet details for a business
   * @returns WalletViewStandardResponse OK
   * @throws ApiError
   */
  public getWallet({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<WalletViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/{id}/wallet',
      path: {
        'id': id,
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
  /**
   * Create pin for a business wallet
   * @returns WalletViewStandardResponse OK
   * @throws ApiError
   */
  public createWalletPin({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: WalletPinModel,
  }): CancelablePromise<WalletViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/wallet/pin/create',
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
   * Verify pin for a business wallet
   * @returns WalletViewStandardResponse OK
   * @throws ApiError
   */
  public verifyPin({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: WalletPinModel,
  }): CancelablePromise<WalletViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/wallet/pin/verify',
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
   * Add bank account for a business
   * @returns BankAccountViewStandardResponse OK
   * @throws ApiError
   */
  public addBankAccount({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: BankAccountModel,
  }): CancelablePromise<BankAccountViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/accounts/add',
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
   * delete bank account
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteBankAccount({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/accounts/delete/{id}',
      path: {
        'id': id,
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
  /**
   * Get bank accounts for a business
   * @returns BankAccountViewListStandardResponse OK
   * @throws ApiError
   */
  public getBankAccounts({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BankAccountViewListStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/{id}/accounts',
      path: {
        'id': id,
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
  /**
   * List transactions for a business
   * @returns TransactionViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public listTransactions({
    id,
    offset,
    limit,
    device,
  }: {
    id: string,
    offset?: number,
    limit?: number,
    device?: any,
  }): CancelablePromise<TransactionViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/{id}/transactions',
      path: {
        'id': id,
      },
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * List user businesses
   * @returns BusinessViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public listUserBusinesses({
    offset,
    limit,
    search,
    device,
  }: {
    offset?: number,
    limit?: number,
    search?: string,
    device?: any,
  }): CancelablePromise<BusinessViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/user/businesses',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'search': search,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * List all businesses
   * @returns BusinessViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public listBusinesses({
    offset,
    limit,
    search,
    city,
    state,
    latitude,
    longitude,
    proximityInMeters,
    device,
  }: {
    offset?: number,
    limit?: number,
    search?: string,
    city?: string,
    state?: string,
    latitude?: number,
    longitude?: number,
    proximityInMeters?: number,
    device?: any,
  }): CancelablePromise<BusinessViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/businesses',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'search': search,
        'City': city,
        'State': state,
        'Latitude': latitude,
        'Longitude': longitude,
        'ProximityInMeters': proximityInMeters,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * List business services
   * @returns ServiceViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public listBusinessServices({
    businessId,
    offset,
    limit,
    device,
  }: {
    businessId: string,
    offset?: number,
    limit?: number,
    device?: any,
  }): CancelablePromise<ServiceViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/{businessId}/services',
      path: {
        'businessId': businessId,
      },
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * List services
   * @returns ServiceViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public listServices({
    offset,
    limit,
    serviceTypeId,
    minPrice,
    maxPrice,
    rating,
    businessId,
    university,
    city,
    state,
    latitude,
    longitude,
    proximityInMeters,
    device,
  }: {
    offset?: number,
    limit?: number,
    serviceTypeId?: string,
    minPrice?: number,
    maxPrice?: number,
    rating?: number,
    businessId?: string,
    university?: string,
    city?: string,
    state?: string,
    latitude?: number,
    longitude?: number,
    proximityInMeters?: number,
    device?: any,
  }): CancelablePromise<ServiceViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/services',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'ServiceTypeId': serviceTypeId,
        'MinPrice': minPrice,
        'MaxPrice': maxPrice,
        'Rating': rating,
        'BusinessId': businessId,
        'University': university,
        'City': city,
        'State': state,
        'Latitude': latitude,
        'Longitude': longitude,
        'ProximityInMeters': proximityInMeters,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * Get list of service types
   * @returns ServiceTypeViewListStandardResponse OK
   * @throws ApiError
   */
  public getServiceTypes({
    device,
  }: {
    device?: any,
  }): CancelablePromise<ServiceTypeViewListStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/service-types',
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * Add service image
   * @returns MediaViewStandardResponse OK
   * @throws ApiError
   */
  public addMediaUrl({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: MediaModel,
  }): CancelablePromise<MediaViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/service/add-image',
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
   * delete service image
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteMediaUrl({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/service/delete-image/{id}',
      path: {
        'id': id,
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
  /**
   * save service
   * @returns SavedServiceViewStandardResponse OK
   * @throws ApiError
   */
  public saveService({
    serviceId,
    device,
  }: {
    serviceId?: string,
    device?: any,
  }): CancelablePromise<SavedServiceViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/save-service',
      headers: {
        'device': device,
      },
      query: {
        'serviceId': serviceId,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * remove from saved service
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public removeSavedService({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/save-service/delete/{id}',
      path: {
        'id': id,
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
  /**
   * List saved service
   * @returns SavedServiceViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public listSavedServices({
    offset,
    limit,
    search,
    device,
  }: {
    offset?: number,
    limit?: number,
    search?: string,
    device?: any,
  }): CancelablePromise<SavedServiceViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/saved-services',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'search': search,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * Perform global search on businesses, services and users
   * @returns GlobalSearchResultViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public globalSearch({
    offset,
    limit,
    search,
    device,
  }: {
    offset?: number,
    limit?: number,
    search?: string,
    device?: any,
  }): CancelablePromise<GlobalSearchResultViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/search',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'search': search,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns BusinessViewListStandardResponse OK
   * @throws ApiError
   */
  public listPopularBusinesses({
    device,
  }: {
    device?: any,
  }): CancelablePromise<BusinessViewListStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/popular',
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns BusinessViewListStandardResponse OK
   * @throws ApiError
   */
  public listPopularBusinessesTest({
    device,
  }: {
    device?: any,
  }): CancelablePromise<BusinessViewListStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/popular/test',
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns BusinessViewListStandardResponse OK
   * @throws ApiError
   */
  public listPopularBusinessesWeekly({
    device,
  }: {
    device?: any,
  }): CancelablePromise<BusinessViewListStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/popular/weekly',
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns BusinessViewListStandardResponse OK
   * @throws ApiError
   */
  public listSimilarBusiness({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BusinessViewListStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/similar/{id}',
      path: {
        'id': id,
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
  /**
   * @returns SavedBusinessViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public listSavedBusinesses({
    offset,
    limit,
    search,
    device,
  }: {
    offset?: number,
    limit?: number,
    search?: string,
    device?: any,
  }): CancelablePromise<SavedBusinessViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/saved-businesses',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'search': search,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns SavedBusinessViewStandardResponse OK
   * @throws ApiError
   */
  public saveBusiness({
    businessId,
    device,
  }: {
    businessId?: string,
    device?: any,
  }): CancelablePromise<SavedBusinessViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/save-business',
      headers: {
        'device': device,
      },
      query: {
        'businessId': businessId,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public updateBusinessesWithCorrectAddress({
    device,
  }: {
    device?: any,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/Business/update-address',
      headers: {
        'device': device,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * remove from saved business
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public removeSavedBusiness({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/Business/save-business/delete/{id}',
      path: {
        'id': id,
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
