import {test, expect} from '@playwright/test'

test('has title', async ({ page }) => {
    await page.goto('https://www.google.ca/');
    await page.locator('.gLFyf').fill('playwright jobs');
    //await page.locator('.gNO89b').click();
    //id use #
    //class use .
    
})