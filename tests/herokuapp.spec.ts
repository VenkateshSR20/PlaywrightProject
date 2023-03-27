import {test, expect} from '@playwright/test'
import {Herokuapp} from '../PageObjectModel/herokuapp.page'
//Creating object

test('fromAutomation', async ({ page }) => {
    const hero = new Herokuapp(page);


    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
    //hero.openWebsite(hero.url);

    //await page.locator('input[name="username"]').fill('venkatesh');
    hero.enterUser(hero.username_Locator, hero.username_value);
    //await page.locator('input[name="password"]').fill('canada');
    hero.enterpwd(hero.password_locator, hero.password_value);

    //change line 16 - line 20
    
    //hero.enterComments(hero.comments_locator, hero.comments_value);
    //await page.locator('textarea[name="comments"]').fill("Information text");
    /*
    await page.locator('input[value="cb1"]').click();
    await page.locator('input[value="cb2"]').click();
    await page.locator('input[value="cb3"]').click();
    await page.locator('input[value="rd3"]').click();
    */
    /*
    hero.entercbradiosubmit(hero.cb1);
    hero.entercbradiosubmit(hero.cb2);
    hero.entercbradiosubmit(hero.cb3);
    hero.entercbradiosubmit(hero.rb3);
    */
    //await page.locator('option[value="ms1"]').

    //await page.selectOption('#HTMLFormElements > table > tbody > tr:nth-child(7) > td > select', ['Selection Item 2', 'Selection Item 4']);
    //const selectedValues = await page.$eval('#HTMLFormElements > table > tbody > tr:nth-child(7) > td > select', e => Array.from(e.selectedOptions).map(option => option.value));
    //expect(selectedValues).toEqual(['ginger', 'paprika']);
    
    
    //await page.selectOption('select[name="dropdown"]', 'Drop Down Item 5');
    //hero.selectDropdownValue(hero.dropdown_locator,hero.dropdown_value);
    
    //await page.locator('input[value="submit"]').click();
    //hero.entercbradiosubmit(hero.submit_locator);
    
    //After completed validation
    //expect(await page.locator('//h1[normalize-space()="Processed Form Details"]').innerText()).toBe("Processed Form Details");
    //await expect(page.getByTestId('status')).toHaveText('Submitted');
    //hero.validation(hero.validation_locator, hero.validation_value);
    
    //await page.waitForSelector('#abc');
    //hero.waitforlocator(hero.incorrect_locator);
    
});

/*
test('fromAutomationOne', async ({ page }) => {
    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
    await page.locator('input[name="password"]').fill('canada');
    await page.waitForSelector('#abc');
})*/