import {test, expect} from "@playwright/test";

test.skip("Advanced Interactions", async ({page}) => {
    await page.goto("file:///F:/Code/Playwright/Playwright%20with%20Typescript%20-%20Vasyl%20Shpak/tests/workshop_3/index.html");
    await page.waitForTimeout(3000);
    await page.hover("button#hover-me");
    await page.waitForTimeout(3000);
    expect(await page.textContent("button#hover-me")).toContain('Text Changed!');
    
    await page.click('button#context-menu', {button: 'right'});
    expect(await page.getByText('Context Menu Appears!').textContent()).toContain('Context Menu Appears!');

    await page.dblclick('button#double-click');
    expect(await page.locator('img').count()).toBe(1);
    await page.waitForTimeout(3000);
})

test.skip("Drag And Drop", async ({page}) => {
    await page.goto('file:///F:/Code/Playwright/Playwright%20with%20Typescript%20-%20Vasyl%20Shpak/tests/workshop_3/index.html');
    await page.locator('.drag-source').hover();
    await page.mouse.down();
    await page.locator('.drop-target').hover();
    await page.mouse.up();
    expect(await page.textContent('.drop-target')).toContain('Success');
    await page.waitForTimeout(3000);
})

test.skip("Iframe Handling", async ({page}) => {
    await page.goto('file:///F:/Code/Playwright/Playwright%20with%20Typescript%20-%20Vasyl%20Shpak/tests/workshop_3/index.html');
    const iframeElement = await page.frame({name: 'iframeName'});
    const inputSelector = '#iframe-input';
    if (iframeElement) {
        await iframeElement.type(inputSelector, 'Hello World');
        expect(await iframeElement.locator(inputSelector).inputValue()).toContain('Hello World');
    } else {
        console.error('iframe is NULL');
    }

    await page.waitForTimeout(3000);
})