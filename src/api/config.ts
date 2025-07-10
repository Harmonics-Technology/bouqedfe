/* Custom API configuration - NOT generated, safe to edit */
import { ApiClient } from './ApiClient';
import type { OpenAPIConfig } from './core/OpenAPI';

/**
 * Get the authentication token from storage
 * Checks both localStorage and sessionStorage for the auth token
 */
function getAuthToken(): string | undefined {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token') || undefined;
    }
    return undefined;
}

/**
 * Get API configuration from environment variables
 * This configuration will persist across API regenerations
 */
function getApiConfig(): Partial<OpenAPIConfig> {
    return {
        BASE: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
        VERSION: import.meta.env.VITE_API_VERSION || '1',
        WITH_CREDENTIALS: import.meta.env.VITE_API_WITH_CREDENTIALS === 'true' || false,
        CREDENTIALS: (import.meta.env.VITE_API_CREDENTIALS as 'include' | 'omit' | 'same-origin') || 'include',
        TOKEN: () => getAuthToken() || import.meta.env.VITE_API_TOKEN,
        USERNAME: import.meta.env.VITE_API_USERNAME,
        PASSWORD: import.meta.env.VITE_API_PASSWORD,
        HEADERS: {
            'Content-Type': 'application/json',
            ...(import.meta.env.VITE_API_CUSTOM_HEADERS ? JSON.parse(import.meta.env.VITE_API_CUSTOM_HEADERS) : {}),
        },
    };
}

/**
 * Pre-configured API client instance using environment variables
 * This is the main export you should use throughout your application
 */
export const apiClient = new ApiClient(getApiConfig());

/**
 * Create a new API client instance with custom configuration
 * Useful for testing or when you need multiple client instances
 */
export function createApiClient(customConfig?: Partial<OpenAPIConfig>): ApiClient {
    const defaultConfig = getApiConfig();
    const mergedConfig = { ...defaultConfig, ...customConfig };
    return new ApiClient(mergedConfig);
}

/**
 * Get the current API base URL
 */
export function getApiBaseUrl(): string {
    return getApiConfig().BASE || 'http://localhost:5000';
}

export { ApiClient };
export type { OpenAPIConfig };
