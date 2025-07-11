# Bouqed Frontend

This project uses **pnpm** as the exclusive package manager. Please ensure you have pnpm installed and use it for all package management operations.

## Package Manager Policy

This project is configured to **only use pnpm** for package management. The following measures are in place to enforce this:

- ✅ `pnpm-lock.yaml` is the only lock file committed to the repository
- ✅ `package-lock.json` and `yarn.lock` are ignored in `.gitignore`
- ✅ `.npmrc` configuration enforces pnpm usage
- ✅ `package.json` specifies pnpm as the required package manager
- ✅ Engine requirements specify minimum pnpm version

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installing pnpm

If you don't have pnpm installed, you can install it using:

```bash
npm install -g pnpm
```

Or using other methods from the [pnpm installation guide](https://pnpm.io/installation).

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix
```

## Available Scripts

- `pnpm dev` - Start development server on port 3000
- `pnpm start` - Alias for dev command
- `pnpm build` - Build for production
- `pnpm serve` - Preview production build
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:ui` - Run tests with UI
- `pnpm coverage` - Generate test coverage report
- `pnpm lint` - Lint code
- `pnpm lint:fix` - Fix linting issues
- `pnpm generate:api` - Generate API client
- `pnpm generate:api:watch` - Generate API client in watch mode
- `pnpm migrate:api` - Migrate API imports
- `pnpm setup:api` - Setup API environment

## Important Notes

- **Do not use `npm install` or `yarn install`** - this will cause conflicts
- Always use `pnpm` commands for package management
- If you accidentally create `package-lock.json` or `yarn.lock`, delete them immediately
- The project is configured to prevent npm usage through `.npmrc` configuration

## Development

This is a React application built with:

- **React 19**
- **TypeScript**
- **Vite** for build tooling
- **TanStack Router** for routing
- **TanStack Query** for data fetching
- **Tailwind CSS** for styling
- **Vitest** for testing

## Environment Configuration

The project uses environment-specific configuration files:

- `.env.development` - Development environment variables
- `.env.production` - Production environment variables
- `.env` - Local overrides (not committed)

Make sure to configure your API endpoints in the appropriate environment files.
