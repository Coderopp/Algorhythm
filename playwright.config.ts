import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/integration',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 390, height: 844 }, // mobile viewport
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000'
  },
  projects: [
    {
      name: 'chromium-mobile',
      use: { ...devices['Pixel 5'] }
    }
  ]
});
