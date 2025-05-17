import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { mwData } from '../../utilities/qa-data-reader.js';
import { loginPage } from "../../globalPagesSetup.js";
import { competitionsPage } from "../../globalPagesSetup.js";
import { GoogleAuthPopUpPage } from "../../pages/GoogleAuthPopUpPage.js";
import dotenv from 'dotenv';
dotenv.config();
//import fs from 'fs';// use it when cookies needed




Given('User login to MetaWin', async function () {
  //Adding cookies
 //const rawCookies = fs.readFileSync('cookies.json', 'utf-8');
 //const cookies = JSON.parse(rawCookies);
  //await this.page.context().addCookies(cookies);
 

  // 1. Navigate to login page / enter password if needed
  await this.page.goto(process.env.metaWinDevUrl);
  await loginPage.metawinPasswordBox.fill(process.env.metawinDevPassword); //after cookies this is not needed
  await loginPage.metawinPasswordBox.press('Enter');//after cookies this is not needed

  // 2. Click "No Thanks" and connect buttons
  await loginPage.noThanksButton.click();//after cookies this is not needed
  await loginPage.connectButton.click();
  await loginPage.continueWithGoogleButton.click()
  // 3. Handle Google Auth popup
  const [popup] = await Promise.all([
    this.page.waitForEvent('popup'),
    loginPage.continueButton.click() // no need after cookie implemented, should be altered with loginPage.continueWithGoogleButton.click()
    
  ]);

  const googleAuthPopUpPage = new GoogleAuthPopUpPage(popup);
 
  await googleAuthPopUpPage.googleEmailEnter.fill(process.env.myUserName);//not using after cookies
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