import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { mainPage} from "../../globalPagesSetup.js";
import { loginPage} from "../../globalPagesSetup.js";
import { GoogleAuthPopUpPage } from "../../pages/GoogleAuthPopUpPage.js";
import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';// use it when cookies needed




Given('User login to MetaWin with cookies',{ timeout: 60 * 1000 }, async function () {
  //Adding cookies
 const rawCookies = fs.readFileSync('cookies.json', 'utf-8');
 const cookies = JSON.parse(rawCookies);
await this.page.context().addCookies(cookies);
 

  // 1. Navigate to login page / enter password if needed
  await this.page.goto(process.env.metaWinDevUrl);
  //await loginPage.metawinPasswordBox.fill(process.env.metawinDevPassword); //after cookies this is not needed
  //await loginPage.metawinPasswordBox.press('Enter');//after cookies this is not needed

  // 2. Click "No Thanks" and connect buttons
  //await loginPage.noThanksButton.click();//after cookies this is not needed
  await loginPage.connectButton.click();
 
  // 3. Handle Google Auth popup
  const [popup] = await Promise.all([
    this.page.waitForEvent('popup'),
    //loginPage.continueButton.click() // no need after cookie implemented, should be altered with loginPage.continueWithGoogleButton.click()
    loginPage.continueWithGoogleButton.click()
  ]);

  const googleAuthPopUpPage = new GoogleAuthPopUpPage(popup);
  
  await googleAuthPopUpPage.googleEmailEnter.fill(process.env.myUserName);//not using after cookies
  await googleAuthPopUpPage.googleEmailEnter.press('Enter');
  await googleAuthPopUpPage.googlePasswordEnter.fill(process.env.myPassWord);
  await googleAuthPopUpPage.googlePasswordEnter.press('Enter');

});



// User clicks providers dropdown button
When('User click providers dropdown button', async function () {
    await mainPage.providersDropdown.click();

});

// User selects a provider from dropdown
When('User select {string} from dropdown', async function (providerName) {
  await mainPage.metawinStudio.click();
});

// User should be able to see Metawin games
Then('User should able to see Metawin games', async function () {
    await expect(this.page).toHaveURL("https://dev.metawin.com/?provider=metawinstudios"); 
    //await this.page.close();
 
});

Then('User should able to search {string} game', async function (gameName) {
  // develop this for dynamic game name
  await mainPage.filterClrearButton.click(); // clrear the filter
  gameName = String(gameName);
  await mainPage.searchbar.fill(gameName);
  let resultGame = this.page.locator(`img[alt="${gameName}"]`);
  await expect(resultGame).toHaveAttribute('alt', new RegExp(gameName));
 }
);
Then('User should able write on ChatBox', async function () {
// 1. Locate the iframe by title
const frame = this.page.frameLocator('iframe[title="WidgetBot Discord chat embed"]');

// 2. Interact with elements inside the iframe
// Example: Type a message into the chat input (adjust selector as needed)
await frame.locator('textarea').fill('Hello from Playwright!');

// Example: Click the send button (you may need to inspect and adjust the selector)
await frame.locator('button[type="submit"]').click();



});


