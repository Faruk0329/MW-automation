import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { mwData } from '../../utilities/qa-data-reader.js';
import { loginPage } from "../../globalPagesSetup.js";
import { competitionsPage } from "../../globalPagesSetup.js";
import { GoogleAuthPopUpPage } from "../../pages/GoogleAuthPopUpPage.js";
import dotenv from 'dotenv';
dotenv.config();

Given('User login to MetaWin',{ timeout: 60 * 1000 }, async function () {
  // 1. Navigate to login page and enter password
  await this.page.goto(process.env.metaWinDevUrl);
  await loginPage.metawinPasswordBox.fill(process.env.metawinDevPassword);
  await loginPage.metawinPasswordBox.press('Enter');
  // 2. Click "No Thanks" and connect buttons
  await loginPage.noThanksButton.click();
  await loginPage.connectButton.click();
  await loginPage.continueWithGoogleButton.click();
  // 3. Handle Google Auth popup
  const [popup] = await Promise.all([
    this.page.waitForEvent('popup'),
    loginPage.continueButton.click()
  ]);
  const googleAuthPopUpPage = new GoogleAuthPopUpPage(popup);
  await googleAuthPopUpPage.googleEmailEnter.fill(process.env.myUserName);
  await googleAuthPopUpPage.googleEmailEnter.press('Enter');
  await googleAuthPopUpPage.googlePasswordEnter.fill(process.env.myPassWord);
  await googleAuthPopUpPage.googlePasswordEnter.press('Enter');
// 4. Verify login success 
  await expect(this.page).toHaveTitle(mwData.mainPageTitle);
});


When('User click the first competition', async function () {

  await competitionsPage.rewardpageButton2.click();
  //await competitionsPage.firstCompetition.nth(1).click();
});


When('User click the Buy button', async function () {


});


Then('User should see thanks message', async function () {

});