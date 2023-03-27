import {test, expect} from '@playwright/test'
import {Artoftesting} from '../PageObjectModel/artoftesting.page'
//Creating object

test('fromAutomation', async ({ page }) => {
    const artof = new Artoftesting(page);

    //await page.goto('https://artoftesting.com/samplesiteforselenium');
    await artof.openWebsite(artof.url);
    
    //await page.locator('#fname').fill('venkatesh');
    //await page.locator('input[name="firstName"]').fill('venkatesh');
    artof.enterTextBox(artof.textBox_locator, artof.textBox_value);
    //artof.selectDoubliClickAlertBox(artof.doublclick_alertBox_locator);
    artof.enterCheckBoxRadioButton(artof.radioBtn);
    artof.enterCheckBoxRadioButton(artof.checkBoxAuto);
    artof.enterCheckBoxRadioButton(artof.checkBoxPerf);

    artof.selectDropDownValue(artof.dropdown_locator, artof.dropdown_value);
    //artof.selectAlertBox(artof.alertbox_locator);


    //await page.waitForSelector('#abc');
});

//Cre
//link - https://artoftesting.com/sampleSiteForSelenium (change to capital) from small (https://artoftesting.com/samplesiteforselenium)
