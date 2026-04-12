import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  retries: 0,
  globalSetup: './tests/global-setup.ts',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    // Unauthenticated — public pages, security gates
    {
      name: 'chromium-public',
      use: { browserName: 'chromium' },
      testMatch: ['**/full-audit.spec.ts', '**/security.spec.ts'],
    },
    // Authenticated — reuses session saved by global-setup
    {
      name: 'chromium-auth',
      use: {
        browserName: 'chromium',
        storageState: 'tests/.auth/user.json',
      },
      testMatch: ['**/auth.spec.ts'],
    },
  ],
});
