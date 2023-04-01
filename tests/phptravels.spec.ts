import {test, expect} from '@playwright/test'
import {Phptravels} from '../PageObjectModel/phptravels.page'


test('fromAutomation', async ({ page }) => {
    const phptravels = new Phptravels(page);

    await phptravels.openWebsite(phptravels.url);
    await page.waitForURL(phptravels.url);

    phptravels.enterfirstnameTextbox(phptravels.firstname_texboxlocator, phptravels.firstname_texboxvalue);
    phptravels.enterlastnameTextbox(phptravels.lastname_textboxlocator, phptravels.lastname_textboxvalue);
    phptravels.enteremailIDTextbox(phptravels.emailid_textboxlocator, phptravels.emailid_textboxvalue);
    phptravels.enterphonenumberTextbox(phptravels.phonenumber_textboxlocator, phptravels.phonenumber_textboxvalue);
    phptravels.enterstreetaddressTextbox(phptravels.streetaddress_textboxlocator, phptravels.streetaddress_textboxvalue);
    phptravels.enterstreetaddress2Textbox(phptravels.streetaddress2_textboxlocator, phptravels.streetaddress2_textboxvalue);
    phptravels.entercityTextbox(phptravels.city_textboxlocator, phptravels.city_textboxvalue);
    phptravels.enterstateTextbox(phptravels.state_textboxlocator, phptravels.state_textboxvalue);
    phptravels.enterpostcodeTextbox(phptravels.postcode_textboxlocator, phptravels.postcode_textboxvalue);
    //phptravels.entercountryTextbox(phptravels.country_textboxlocator, phptravels.country_textboxvalue);
    phptravels.entermobileTextbox(phptravels.mobile_textboxlocator, phptravels.mobile_textboxvalue);
    phptravels.enterpasswordTextbox(phptravels.password_textboxlocator, phptravels.password_textboxvalue);
    phptravels.enterconfirpasswordTextbox(phptravels.confirpassword_textboxlocator, phptravels.confirmpassword_textboxvalue);
    phptravels.checkboxSelect(phptravels.checkbox_textboxlocator);

    //await page.waitForSelector('#abc');

});
