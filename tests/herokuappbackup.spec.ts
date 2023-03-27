import {test, expect} from '@playwright/test'
//import {Herokuapp} from './PageObjectModel/herokuapp.page'
//Creating object

test('fromAutomation', async ({ page }) => {
    //const hero = new Herokuapp(page);
    
    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');

    await page.locator('input[name="username"]').fill('venkatesh');
    await page.locator('input[name="password"]').fill('canada');
    await page.locator('textarea[name="comments"]').fill("Information text");
    await page.locator('input[value="cb1"]').click();
    await page.locator('input[value="cb2"]').click();
    await page.locator('input[value="cb3"]').click();
    await page.locator('input[value="rd3"]').click();
    //await page.locator('option[value="ms1"]').

    //await page.selectOption('#HTMLFormElements > table > tbody > tr:nth-child(7) > td > select', ['Selection Item 2', 'Selection Item 4']);
    //const selectedValues = await page.$eval('#HTMLFormElements > table > tbody > tr:nth-child(7) > td > select', e => Array.from(e.selectedOptions).map(option => option.value));
    //expect(selectedValues).toEqual(['ginger', 'paprika']);
    await page.selectOption('select[name="dropdown"]', 'Drop Down Item 5');
    
    await page.locator('input[value="submit"]').click();

    //After completed validation
    expect(await page.locator('//h1[normalize-space()="Processed Form Details"]').innerText()).toBe("Processed Form Details");
    //await page.waitForSelector('#abc');
    
});

/*
test('fromAutomationOne', async ({ page }) => {
    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
    await page.locator('input[name="password"]').fill('canada');
    await page.waitForSelector('#abc');
})*/