import {expect, test} from '@playwright/test';

test.skip('Automation Form Submissions', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const newTodo = await page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('Todo First');
    await newTodo.press('Enter');
    await newTodo.fill('Todo Second');
    await newTodo.press('Enter');
    await page.waitForTimeout(3000);

    //const firstTodo = page.getByTestId('todo-item');
    const firstTodo = await page.getByTestId('todo-item').nth(0);
    await firstTodo.getByRole('checkbox').check();

    const secondTodo = await page.getByTestId('todo-item').nth(1);

    await expect(firstTodo).toHaveClass('completed');
    await expect(secondTodo).not.toHaveClass('completed');
})

test.only('Handling Form', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const placeHolder = '[placeholder="What needs to be done?"]';
    await page.fill(placeHolder, 'Tester1');
    await page.locator(placeHolder).press('Enter');

    const checkbox = await page.locator('.toggle');
    await checkbox.check();

    await page.waitForTimeout(5000);
})