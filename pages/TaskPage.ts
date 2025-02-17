import { Page, expect } from '@playwright/test';
import { locators } from '../locators/taskLocators'; // Import centralized locators

export class TaskPage {
    constructor(private page: Page) {}

    // Navigate to a specific project
    async navigateToProject(projectName: string) {
        await this.page.click(`text=${projectName}`);
    }

    // Verify that a task is present in the specified column
    async verifyTaskInColumn(taskName: string, columnName: string) {
        const columnSelector = locators.column(columnName);
        const taskSelector = locators.taskInColumn(taskName);
        await expect(this.page.locator(columnSelector)).toBeVisible();
        await expect(this.page.locator(taskSelector)).toBeVisible();
    }

    // Extract and verify task tags
    async verifyTaskTags(taskName: string, expectedTags: string[]) {
        const tags = await this.parseTags(taskName);
        await expect(tags).toEqual(expectedTags);
    }

    // Extract task tags from the UI
    async parseTags(taskName: string): Promise<string[]> {
        return await this.page.locator(locators.taskTags(taskName)).allTextContents();
    }
}