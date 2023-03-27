import {test, expect} from '@playwright/test'

test('tutorials_automation', async ({ page }) => {
    await page.goto('https://tutorialshut.com/demo-website-for-selenium-automation-practice/');

    //await expect(page).toHaveTitle('Demo website for Selenium Automation Practice - Tutorials Hut');
    //await expect(page.locator('#google-center-div').innerText()).toContain('Demo website for Selenium Automation Practice - Tutorials Hut');
    await page.selectOption('#testingDropdown', 'Performance Testing');
    await page.click('#female');
    await page.click('#seleniumtest');
    await page.click('#apitest');
    await page.locator('#num1').fill('100');
    await page.locator('#num2').fill('200');
    await page.click('.btn.btn-default');
    //await page.click('button[onclick="jsConfirm()"]');
    await page.waitForSelector('#abc');

});

