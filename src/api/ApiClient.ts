/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { BookingService } from './services/BookingService';
import { BusinessService } from './services/BusinessService';
import { BusinessCategoryService } from './services/BusinessCategoryService';
import { DashboardService } from './services/DashboardService';
import { NotificationService } from './services/NotificationService';
import { PaymentService } from './services/PaymentService';
import { RecentlyViewedService } from './services/RecentlyViewedService';
import { ReviewService } from './services/ReviewService';
import { UserService } from './services/UserService';
import { UtilityService } from './services/UtilityService';
import { VoucherService } from './services/VoucherService';
import { WaitListService } from './services/WaitListService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ApiClient {
  public readonly booking: BookingService;
  public readonly business: BusinessService;
  public readonly businessCategory: BusinessCategoryService;
  public readonly dashboard: DashboardService;
  public readonly notification: NotificationService;
  public readonly payment: PaymentService;
  public readonly recentlyViewed: RecentlyViewedService;
  public readonly review: ReviewService;
  public readonly user: UserService;
  public readonly utility: UtilityService;
  public readonly voucher: VoucherService;
  public readonly waitList: WaitListService;
  public readonly request: BaseHttpRequest;
  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '',
      VERSION: config?.VERSION ?? '1',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });
    this.booking = new BookingService(this.request);
    this.business = new BusinessService(this.request);
    this.businessCategory = new BusinessCategoryService(this.request);
    this.dashboard = new DashboardService(this.request);
    this.notification = new NotificationService(this.request);
    this.payment = new PaymentService(this.request);
    this.recentlyViewed = new RecentlyViewedService(this.request);
    this.review = new ReviewService(this.request);
    this.user = new UserService(this.request);
    this.utility = new UtilityService(this.request);
    this.voucher = new VoucherService(this.request);
    this.waitList = new WaitListService(this.request);
  }
}

