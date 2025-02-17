import { test, expect } from '@playwright/test';
import testData from "../testData/testData.json" with { type: "json" }; // Import test data
import { login } from '../utils/auth'; // Import login function
import { TaskPage } from '../pages/TaskPage'; // Import Page Object Model for task interactions

test.describe('Task Verification', () => {
    for (const data of testData) {
        test(`Verify task: ${data.task}`, async ({ page }) => {
            await login(page); // Perform login before verifying tasks
            const taskPage = new TaskPage(page);

            // Navigate to the specified project
            await taskPage.navigateToProject(data.project);

            // Verify that the task is in the expected column
            await taskPage.verifyTaskInColumn(data.task, data.column);

            // Confirm the task's associated tags
            await taskPage.verifyTaskTags(data.task, data.tags);
        });
    }
});