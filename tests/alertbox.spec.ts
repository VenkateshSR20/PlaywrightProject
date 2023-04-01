import {test, expect} from '@playwright/test'
import {AlertBox} from '../PageObjectModel/artoftesting.page'
//Creating object

test('fromAutomation', async ({ page }) => {
    const artof = new AlertBox(page);

    

}