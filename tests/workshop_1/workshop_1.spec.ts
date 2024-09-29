import {expect, test} from '@playwright/test';

test('Basic Navigation', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.waitForTimeout(3000);
    await page.reload()
})

test('Interacting with Web Element on Github', async ({page})=>{
    await page.goto('https://gitlab.com/');
    // await page.locator('role="banner"');
    // const bannerLocator = page.locator('[role="banner"]');
    // await expect(bannerLocator).toBeVisible();
    // await page.waitForTimeout(3000);
    await page.locator('#be-navigation-desktop').getByRole('link', {name: ' Get free trial '}).click();
    await page.locator('[name="new_user[first_name]"]').fill('testerdonasirofirst');
    await page.locator('#new_user_last_name').fill('testerdonasirolast');
    await page.waitForTimeout(3000);
})

test('Using Various Locator Methods', async ({page})=>{
    await page.goto('https://gitlab.com/')
    await page.getByRole('button', {name: 'Main menu'}).click();
    await page.getByRole('link', {name: 'Sign in'}).click();
})