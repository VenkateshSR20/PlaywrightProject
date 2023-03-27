import {test, expect} from '@playwright/test'

test('Bank Login Website', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    //await page.locator('button[ng-click="customer()"]').click();
    await page.click('button[ng-click="customer()"]');
    await page.waitForSelector('#userSelect');
    
    await page.selectOption('#userSelect', 'Harry Potter');
    await page.click('button[type="submit"]');
    await page.selectOption('#accountSelect', '1005');
    //await page.waitForSelector('.btn.btn-lg.tab[ng-class=btnClass2]');
    await page.click('.btn.btn-lg.tab[ng-class="btnClass2"]');

    await page.locator('input[placeholder="amount"]').fill('1000');
    await page.click('button[type="submit"]');
    expect(page.locator('[ng-show = "message"]')).toBe('Deposit Successful');
});

