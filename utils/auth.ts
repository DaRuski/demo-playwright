export async function login(page: Page) {
    await page.goto('/');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle'); // Wait until page is fully loaded
}