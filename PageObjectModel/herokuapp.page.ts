import {test, expect, Page} from '@playwright/test'

export class Herokuapp {
    readonly page:Page;
    readonly url = 'https://testpages.herokuapp.com/styled/basic-html-form-test.html';
    readonly username_Locator = 'input[name="username"]';
    readonly username_value = 'Venkat SR';
    readonly password_locator = 'input[name="password"]';
    readonly password_value = 'usa';
    readonly comments_locator = 'textarea[name="comments"]';
    readonly comments_value = 'comment1value';
    readonly cb1 = 'input[value="cb1"]';
    readonly cb2 = 'input[value="cb2"]';
    readonly cb3 = 'input[value="cb3"]';
    readonly rb3 = 'input[value="rd3"]';
    readonly dropdown_locator = 'select[name="dropdown"]';
    readonly dropdown_value = 'Drop Down Item 5';
    readonly submit_locator = 'input[value="submit"]';
    readonly validation_locator = '//h1[normalize-space()="Processed Form Details"]';
    readonly validation_value = 'Processed Form Details';
    readonly incorrect_locator = '#abc';
    
    
    constructor(page:Page){
        this.page = page;
    }

    async openWebsite(url){
     await this.page.goto(url);
    }

    async enterUser(selector,value){
        await this.page.locator(selector).fill(value);

    }

    async enterpwd(selector, value){
        await this.page.locator(selector).fill(value);
    }

    async enterComments(selector, value){
        await this.page.locator(selector).fill(value);
    }

    async entercbradiosubmit(locator){
        await this.page.locator(locator).click();
    }

    async selectDropdownValue(selector,value){
        await this.page.selectOption(selector, value);
    }

    async validation(selector,value){
        //expect(selector).toBe(value);
    }

    async waitforlocator(locator){
        await this.page.waitForSelector(locator);
    }
}