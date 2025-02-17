export const locators = {
    column: (columnName: string) => `//h2[text()="${columnName}"]/parent::div`,
    taskInColumn: (taskName: string) => `//div//div//h3[contains(text(),'${taskName}')]/parent::div`,
    taskTags: (taskName: string) => `//h3[contains(text(),'${taskName}')]/parent::div/div[1]/span`,
};