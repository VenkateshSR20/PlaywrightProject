import {test, expect, Page} from '@playwright/test'

export class Phptravels {
    readonly page:Page;
    readonly url = 'https://phptravels.org/register.php';
    //readonly link
    //readonly firstname_texboxlocator = '#inputFirstName';
    //static firstname_texboxlocator = 'input[id="inputFirstName"]';
    readonly firstname_texboxlocator = 'input[id="inputFirstName"]';
    readonly firstname_texboxvalue = "Venkatesh";
    readonly lastname_textboxlocator = '#inputLastName';
    readonly lastname_textboxvalue = "Sundarrajuluravee";
    readonly emailid_textboxlocator = '#inputEmail';
    readonly emailid_textboxvalue = "venkateshadhi@gmail.com";
    readonly phonenumber_textboxlocator = '#inputPhone';
    readonly phonenumber_textboxvalue = "5145622991";
    readonly streetaddress_textboxlocator = '#inputAddress1';
    readonly streetaddress_textboxvalue = "154 cadillac";
    readonly streetaddress2_textboxlocator = '#inputAddress2';
    readonly streetaddress2_textboxvalue = "Cres";
    readonly city_textboxlocator = '#inputCity';
    readonly city_textboxvalue = "Brampton";
    readonly state_textboxlocator = '#stateinput';
    readonly state_textboxvalue = "Ontario";
    readonly postcode_textboxlocator = '#inputPostcode';
    readonly postcode_textboxvalue = "L7A3B7";
    readonly country_textboxlocator = '#inputCountry';
    readonly country_textboxvalue = "Canada";
    readonly mobile_textboxlocator = '#customfield2';
    readonly mobile_textboxvalue = "5145622991";
    readonly password_textboxlocator = '#inputNewPassword1';
    readonly password_textboxvalue = "ab@123";
    readonly confirpassword_textboxlocator = '#inputNewPassword2';
    readonly confirmpassword_textboxvalue = "ab@123";
    
    readonly checkbox_textboxlocator = 'div[class="recaptcha-checkbox-border"]';
   
    readonly incorrect_locator = '#abc';

    constructor(page:Page){
        this.page = page;
    }

    async openWebsite(url){
        await this.page.goto(url);
    }

    async enterfirstnameTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async enterlastnameTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async enteremailIDTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async enterphonenumberTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async enterstreetaddressTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async enterstreetaddress2Textbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async entercityTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async enterstateTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async enterpostcodeTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async entercountryTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async entermobileTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async enterpasswordTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async enterconfirpasswordTextbox(selector, value) {
        await this.page.locator(selector).fill(value);
    }

    async checkboxSelect(locator) {
        await this.page.locator(locator).click();
    }
}