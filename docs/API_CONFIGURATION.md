# API Configuration Guide

This project uses environment-based API configuration that persists across API regenerations.

## Quick Start

1. Copy the example environment file for your environment:
   ```bash
   # For development
   cp .env.development.example .env.development

   # For production
   cp .env.production.example .env.production
   ```

2. Update the API base URL in the appropriate file:
   ```bash
   # .env.development
   VITE_API_BASE_URL=http://localhost:5000

   # .env.production
   VITE_API_BASE_URL=https://your-production-api.com
   ```

3. Use the pre-configured API client in your code:
   ```typescript
   import { apiClient } from '@/api/client';

   // The client is automatically configured with environment variables
   const response = await apiClient.user.getUsers();
   ```

## Environment Variables

### Required Variables
- `VITE_API_BASE_URL`: The base URL for your API (e.g., `http://localhost:5000`)
- `VITE_API_VERSION`: API version (default: `1`)

### Optional Variables
- `VITE_API_WITH_CREDENTIALS`: Include credentials in requests (`true`/`false`)
- `VITE_API_CREDENTIALS`: Credentials mode (`include`/`omit`/`same-origin`)
- `VITE_API_TOKEN`: API token for authentication
- `VITE_API_USERNAME`: Username for basic auth
- `VITE_API_PASSWORD`: Password for basic auth
- `VITE_API_CUSTOM_HEADERS`: Custom headers as JSON string

## API Client Usage

### Using the Pre-configured Client (Recommended)
```typescript
import { apiClient } from '@/api/client';

// All API calls use environment configuration
const users = await apiClient.user.getUsers();
const bookings = await apiClient.booking.getBookings();
```

### Creating Custom Client Instances
```typescript
import { createApiClient } from '@/api/client';

// Create a client with custom configuration
const customClient = createApiClient({
  BASE: 'https://different-api.com',
  TOKEN: 'custom-token'
});
```

### Getting Current Configuration
```typescript
import { getApiBaseUrl } from '@/api/client';

console.log('Current API URL:', getApiBaseUrl());
```

## API Regeneration

When you regenerate the API using `npm run generate:api`, your custom configuration in:
- `src/api/config.ts`
- `src/api/client.ts`

Will **NOT** be overwritten. Only the generated files in:
- `src/api/ApiClient.ts`
- `src/api/index.ts`
- `src/api/models/`
- `src/api/services/`
- `src/api/core/`

Will be regenerated.

## File Structure

```
src/api/
├── client.ts          # Custom API exports (safe to edit)
├── config.ts          # Environment-based config (safe to edit)
├── index.ts           # Generated exports (do not edit)
├── ApiClient.ts       # Generated client (do not edit)
├── core/              # Generated core files (do not edit)
├── models/            # Generated models (do not edit)
└── services/          # Generated services (do not edit)
```

## Troubleshooting

### API calls failing with CORS errors
Make sure your `VITE_API_WITH_CREDENTIALS` and `VITE_API_CREDENTIALS` are set correctly for your backend configuration.

### Environment variables not loading
- Ensure your `.env.development` or `.env.production` files are in the project root
- Restart your development server after changing environment variables
- Make sure environment variable names start with `VITE_` to be accessible in the browser

### Different URLs for different environments
Use the appropriate environment file:
- `.env.development` for `npm run dev`
- `.env.production` for `npm run build`
- `.env.local` for local overrides (ignored by git)
