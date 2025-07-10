#!/usr/bin/env node
/**
 * Migration script to update API imports across the codebase
 * This script helps migrate from direct ApiClient usage to the new environment-based configuration
 */

import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function migrateApiImports() {
  console.log('🔄 Starting API import migration...');

  // Find all TypeScript/JavaScript files except generated API files
  const files = await glob('src/**/*.{ts,tsx,js,jsx}', {
    cwd: projectRoot,
    ignore: [
      'src/api/index.ts',
      'src/api/ApiClient.ts',
      'src/api/core/**',
      'src/api/models/**',
      'src/api/services/**',
      'src/api/config.ts',
      'src/api/client.ts'
    ]
  });

  let updatedFiles = 0;

  for (const file of files) {
    const filePath = join(projectRoot, file);
    const content = readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;

    // Replace direct ApiClient imports
    if (content.includes("import { ApiClient } from '@/api")) {
      updatedContent = updatedContent.replace(
        /import\s*{\s*ApiClient\s*}\s*from\s*['"]@\/api[^'"]*['"];?/g,
        "import { apiClient } from '@/api/client';"
      );
      hasChanges = true;
      console.log(`  📝 Updated ApiClient import in ${file}`);
    }

    // Replace new ApiClient() usage
    if (content.includes('new ApiClient(')) {
      updatedContent = updatedContent.replace(
        /const\s+\w+\s*=\s*new\s+ApiClient\(\s*\)\s*;?/g,
        '// Using pre-configured apiClient from environment'
      );
      updatedContent = updatedContent.replace(
        /new\s+ApiClient\(\s*\)/g,
        'apiClient'
      );
      hasChanges = true;
      console.log(`  🔧 Updated ApiClient instantiation in ${file}`);
    }

    if (hasChanges) {
      writeFileSync(filePath, updatedContent, 'utf8');
      updatedFiles++;
    }
  }

  console.log(`✅ Migration completed! Updated ${updatedFiles} files.`);

  if (updatedFiles > 0) {
    console.log('\n📋 Next steps:');
    console.log('1. Review the changes in your files');
    console.log('2. Make sure to import any other needed types from @/api/client');
    console.log('3. Test your API calls to ensure they work with environment configuration');
    console.log('4. Update your environment files (.env.development, .env.production) with correct API URLs');
  }
}

migrateApiImports().catch(console.error);
