/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingConfigurationModel } from '../models/BookingConfigurationModel';
import type { BookingConfigurationViewStandardResponse } from '../models/BookingConfigurationViewStandardResponse';
import type { BooleanStandardResponse } from '../models/BooleanStandardResponse';
import type { BusinessCategoryConfigurationModel } from '../models/BusinessCategoryConfigurationModel';
import type { BusinessCategoryConfigurationViewStandardResponse } from '../models/BusinessCategoryConfigurationViewStandardResponse';
import type { BusinessCategoryModel } from '../models/BusinessCategoryModel';
import type { BusinessCategoryViewPagedCollectionStandardResponse } from '../models/BusinessCategoryViewPagedCollectionStandardResponse';
import type { BusinessCategoryViewStandardResponse } from '../models/BusinessCategoryViewStandardResponse';
import type { ObjectStandardResponse } from '../models/ObjectStandardResponse';
import type { ServiceAttributeModel } from '../models/ServiceAttributeModel';
import type { ServiceAttributeViewStandardResponse } from '../models/ServiceAttributeViewStandardResponse';
import type { ServiceCategoryModel } from '../models/ServiceCategoryModel';
import type { ServiceCategoryViewStandardResponse } from '../models/ServiceCategoryViewStandardResponse';
import type { ServiceTemplateModel } from '../models/ServiceTemplateModel';
import type { ServiceTemplateViewStandardResponse } from '../models/ServiceTemplateViewStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BusinessCategoryService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get all active business categories
   * @returns BusinessCategoryViewStandardResponse OK
   * @throws ApiError
   */
  public getBusinessCategories({
    device,
  }: {
    device?: any,
  }): CancelablePromise<BusinessCategoryViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory',
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
   * Get business category by ID
   * @returns BusinessCategoryViewStandardResponse OK
   * @throws ApiError
   */
  public getBusinessCategoryById({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BusinessCategoryViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/{id}',
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
   * Create a new business category
   * @returns BusinessCategoryViewStandardResponse OK
   * @throws ApiError
   */
  public createBusinessCategory({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: BusinessCategoryModel,
  }): CancelablePromise<BusinessCategoryViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/create',
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
   * Update business category
   * @returns BusinessCategoryViewStandardResponse OK
   * @throws ApiError
   */
  public updateBusinessCategory({
    id,
    device,
    requestBody,
  }: {
    id: string,
    device?: any,
    requestBody?: BusinessCategoryModel,
  }): CancelablePromise<BusinessCategoryViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/update/{id}',
      path: {
        'id': id,
      },
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
   * Delete business category
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteBusinessCategory({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/delete/{id}',
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
   * List business categories with pagination
   * @returns BusinessCategoryViewPagedCollectionStandardResponse OK
   * @throws ApiError
   */
  public listBusinessCategories({
    offset,
    limit,
    isActive,
    search,
    device,
  }: {
    offset?: number,
    limit?: number,
    isActive?: boolean,
    search?: string,
    device?: any,
  }): CancelablePromise<BusinessCategoryViewPagedCollectionStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/list',
      headers: {
        'device': device,
      },
      query: {
        'Offset': offset,
        'Limit': limit,
        'IsActive': isActive,
        'Search': search,
      },
      errors: {
        400: `Bad Request`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * Get business category configuration
   * @returns BusinessCategoryConfigurationViewStandardResponse OK
   * @throws ApiError
   */
  public getBusinessCategoryConfiguration({
    categoryId,
    device,
  }: {
    categoryId: string,
    device?: any,
  }): CancelablePromise<BusinessCategoryConfigurationViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/{categoryId}/configuration',
      path: {
        'categoryId': categoryId,
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
   * Create or update business category configuration
   * @returns BusinessCategoryConfigurationViewStandardResponse OK
   * @throws ApiError
   */
  public createOrUpdateBusinessCategoryConfiguration({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: BusinessCategoryConfigurationModel,
  }): CancelablePromise<BusinessCategoryConfigurationViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/configuration',
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
   * Get service categories for a business category
   * @returns ServiceCategoryViewStandardResponse OK
   * @throws ApiError
   */
  public getServiceCategories({
    categoryId,
    device,
  }: {
    categoryId: string,
    device?: any,
  }): CancelablePromise<ServiceCategoryViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/{categoryId}/service-categories',
      path: {
        'categoryId': categoryId,
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
   * Get service category by ID
   * @returns ServiceCategoryViewStandardResponse OK
   * @throws ApiError
   */
  public getServiceCategoryById({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<ServiceCategoryViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/service-category/{id}',
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
   * Create service category
   * @returns ServiceCategoryViewStandardResponse OK
   * @throws ApiError
   */
  public createServiceCategory({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: ServiceCategoryModel,
  }): CancelablePromise<ServiceCategoryViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/service-category/create',
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
   * Update service category
   * @returns ServiceCategoryViewStandardResponse OK
   * @throws ApiError
   */
  public updateServiceCategory({
    id,
    device,
    requestBody,
  }: {
    id: string,
    device?: any,
    requestBody?: ServiceCategoryModel,
  }): CancelablePromise<ServiceCategoryViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/service-category/update/{id}',
      path: {
        'id': id,
      },
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
   * Delete service category
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteServiceCategory({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/service-category/delete/{id}',
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
   * Get service category hierarchy
   * @returns ServiceCategoryViewStandardResponse OK
   * @throws ApiError
   */
  public getServiceCategoryHierarchy({
    businessCategoryId,
    device,
  }: {
    businessCategoryId: string,
    device?: any,
  }): CancelablePromise<ServiceCategoryViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/{businessCategoryId}/service-category-hierarchy',
      path: {
        'businessCategoryId': businessCategoryId,
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
   * Get service templates for a category
   * @returns ServiceTemplateViewStandardResponse OK
   * @throws ApiError
   */
  public getServiceTemplates({
    categoryId,
    device,
  }: {
    categoryId: string,
    device?: any,
  }): CancelablePromise<ServiceTemplateViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/{categoryId}/service-templates',
      path: {
        'categoryId': categoryId,
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
   * Get service template by ID
   * @returns ServiceTemplateViewStandardResponse OK
   * @throws ApiError
   */
  public getServiceTemplateById({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<ServiceTemplateViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/service-template/{id}',
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
   * Create service template
   * @returns ServiceTemplateViewStandardResponse OK
   * @throws ApiError
   */
  public createServiceTemplate({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: ServiceTemplateModel,
  }): CancelablePromise<ServiceTemplateViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/service-template/create',
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
   * Update service template
   * @returns ServiceTemplateViewStandardResponse OK
   * @throws ApiError
   */
  public updateServiceTemplate({
    id,
    device,
    requestBody,
  }: {
    id: string,
    device?: any,
    requestBody?: ServiceTemplateModel,
  }): CancelablePromise<ServiceTemplateViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/service-template/update/{id}',
      path: {
        'id': id,
      },
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
   * Delete service template
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteServiceTemplate({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/service-template/delete/{id}',
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
   * Get service attributes for a business category
   * @returns ServiceAttributeViewStandardResponse OK
   * @throws ApiError
   */
  public getServiceAttributes({
    businessCategoryId,
    device,
  }: {
    businessCategoryId: string,
    device?: any,
  }): CancelablePromise<ServiceAttributeViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/{businessCategoryId}/service-attributes',
      path: {
        'businessCategoryId': businessCategoryId,
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
   * Get service attribute by ID
   * @returns ServiceAttributeViewStandardResponse OK
   * @throws ApiError
   */
  public getServiceAttributeById({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<ServiceAttributeViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/service-attribute/{id}',
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
   * Create service attribute
   * @returns ServiceAttributeViewStandardResponse OK
   * @throws ApiError
   */
  public createServiceAttribute({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: ServiceAttributeModel,
  }): CancelablePromise<ServiceAttributeViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/service-attribute/create',
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
   * Update service attribute
   * @returns ServiceAttributeViewStandardResponse OK
   * @throws ApiError
   */
  public updateServiceAttribute({
    id,
    device,
    requestBody,
  }: {
    id: string,
    device?: any,
    requestBody?: ServiceAttributeModel,
  }): CancelablePromise<ServiceAttributeViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/service-attribute/update/{id}',
      path: {
        'id': id,
      },
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
   * Delete service attribute
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public deleteServiceAttribute({
    id,
    device,
  }: {
    id: string,
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/service-attribute/delete/{id}',
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
   * Get booking configuration for a business category
   * @returns BookingConfigurationViewStandardResponse OK
   * @throws ApiError
   */
  public getBookingConfiguration({
    businessCategoryId,
    device,
  }: {
    businessCategoryId: string,
    device?: any,
  }): CancelablePromise<BookingConfigurationViewStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/{businessCategoryId}/booking-configuration',
      path: {
        'businessCategoryId': businessCategoryId,
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
   * Create or update booking configuration
   * @returns BookingConfigurationViewStandardResponse OK
   * @throws ApiError
   */
  public createOrUpdateBookingConfiguration({
    device,
    requestBody,
  }: {
    device?: any,
    requestBody?: BookingConfigurationModel,
  }): CancelablePromise<BookingConfigurationViewStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/booking-configuration',
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
   * Get terminology for a business category
   * @returns ObjectStandardResponse OK
   * @throws ApiError
   */
  public getTerminologyForCategory({
    businessCategoryId,
    device,
  }: {
    businessCategoryId: string,
    device?: any,
  }): CancelablePromise<ObjectStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/{businessCategoryId}/terminology',
      path: {
        'businessCategoryId': businessCategoryId,
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
   * Get field configuration for a business category
   * @returns ObjectStandardResponse OK
   * @throws ApiError
   */
  public getCategoryFieldConfiguration({
    businessCategoryId,
    device,
  }: {
    businessCategoryId: string,
    device?: any,
  }): CancelablePromise<ObjectStandardResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/BusinessCategory/{businessCategoryId}/field-configuration',
      path: {
        'businessCategoryId': businessCategoryId,
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
   * Seed default business categories
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public seedDefaultBusinessCategories({
    device,
  }: {
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/seed-defaults',
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
   * Migrate existing studios to default category
   * @returns BooleanStandardResponse OK
   * @throws ApiError
   */
  public migrateExistingStudiosToDefaultCategory({
    device,
  }: {
    device?: any,
  }): CancelablePromise<BooleanStandardResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/BusinessCategory/migrate-existing-studios',
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
