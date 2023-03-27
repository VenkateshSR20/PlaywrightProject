import {test, expect, Page} from '@playwright/test'

export class Artoftesting {
    readonly page:Page;
    readonly url = 'https://artoftesting.com/sampleSiteForSelenium';
    //readonly link
    readonly textBox_locator = '//input[@id="fname"]';
    readonly textBox_value = "This is text inside textBox";
    readonly submit_locator = '#idOfButton';
    readonly doublclick_alertBox_locator = '#dblClkBtn';
    readonly radioBtn = 'input[value="male"]';
    readonly checkBoxAuto = 'input[value="Automation"]';
    readonly checkBoxPerf = 'input[value="Performance"]';
    readonly dropdown_locator = 'select[name="#testingDropdown"]';
    readonly dropdown_value = 'Manual Testing';
    readonly alertbox_locator = 'button[onclick="generateAlertBox()"]';
    readonly confirmbox_locator = 'button[onclick="generateConfirmBox()"]';

    readonly incorrect_locator = '#abc';

    constructor(page:Page) {
        this.page = page;
    }

    async openWebsite(url) {
        await this.page.goto(url);
    }

    async enterTextBox(selector, value){
        await this.page.locator(selector).fill(value);
    }

    //enter submit locator
    //async 
    
    //double click on the alert box
    async selectDoubliClickAlertBox(locator) {
        await this.page.waitForSelector(locator);
    }

    //radio button
    async enterCheckBoxRadioButton(locator){
        await this.page.locator(locator).click();
    }
    
    async selectDropDownValue(selector, value) {
        await this.page.selectOption(selector, value);
    }
    
    async selectAlertBox(locator) {
        //await this.page.locator(locator).click();
        await this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByRole(locator).click();
    }

    async selectConfirmBox(locator) {
        await this.page.locator(locator).click();
        
    }
}