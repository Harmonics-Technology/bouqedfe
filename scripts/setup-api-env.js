#!/usr/bin/env node
/**
 * Setup script for API environment configuration
 * This script helps initialize the environment files and configuration
 */

import { copyFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

function setupEnvironmentFiles() {
  console.log('🔧 Setting up API environment configuration...\n');

  const envFiles = [
    {
      source: '.env.development.example',
      target: '.env.development',
      description: 'Development environment'
    },
    {
      source: '.env.production.example',
      target: '.env.production',
      description: 'Production environment'
    }
  ];

  for (const { source, target, description } of envFiles) {
    const sourcePath = join(projectRoot, source);
    const targetPath = join(projectRoot, target);

    if (!existsSync(targetPath)) {
      if (existsSync(sourcePath)) {
        copyFileSync(sourcePath, targetPath);
        console.log(`✅ Created ${target} for ${description}`);
      } else {
        console.log(`⚠️  Warning: ${source} not found, skipping ${target}`);
      }
    } else {
      console.log(`ℹ️  ${target} already exists, skipping`);
    }
  }

  console.log('\n📝 Environment files setup complete!');
  console.log('\n🔍 Next steps:');
  console.log('1. Update the API URLs in your environment files:');
  console.log('   - .env.development (for local development)');
  console.log('   - .env.production (for production builds)');
  console.log('\n2. Use the configured API client in your code:');
  console.log('   import { apiClient } from "@/api/client";');
  console.log('\n3. Your API calls will automatically use the environment configuration!');

  // Check if .env exists and suggest configuration
  const envPath = join(projectRoot, '.env');
  if (existsSync(envPath)) {
    console.log('\n💡 Tip: You have a .env file. Make sure it includes:');
    console.log('   VITE_API_BASE_URL=your-api-url');
    console.log('   VITE_API_VERSION=1');
  }
}

setupEnvironmentFiles();
