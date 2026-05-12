import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: '.',
  testMatch: /pw-.*\.spec\.ts$/,
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:8000',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'python -m http.server 8000',
    port: 8000,
    timeout: 120 * 1000,
    reuseExistingServer: true,
    cwd: __dirname,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
