import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    reporter: [
        ['line'],
        ['allure-playwright'],
    ],
    use: {
        baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app',
        headless: true,
        trace: 'on-first-retry',
    },
});