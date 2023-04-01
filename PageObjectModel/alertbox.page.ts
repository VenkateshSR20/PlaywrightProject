import {test, expect, Page} from '@playwright/test'

export class AlertBox {
    readonly page:Page;
    readonly url = 'https://demo.automationtesting.in/Alerts.html';
    
    //readonly link
    readonly alertwithok = '.analystic[href="#OKTab"]';
    readonly alertwithokcancel = '.analystic[href="#CancelTab"]';
    readonly alertwithtextbox = '.analystic[href="#Textbox"]';

    readonly incorrect_locator = '#abc';

    constructor(page:Page) {
        this.page = page;
    }

    async openWebsite(url){
        await this.page.goto(url);
    }

    async selectAlertwithok(locator) {
        //await this.page.locator(locator).click();
        await this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByRole(locator).click();
    }

    async selectAlertwithokcancel(locator) {
        //await this.page.locator(locator).click();
        await this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByRole(locator).click();
    }

    async selectAlertwithtextbox(locator) {
        //await this.page.locator(locator).click();
        await this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByRole(locator).click();
    }
}