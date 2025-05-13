import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { mwData } from '../../utilities/qa-data-reader.js';
import { loginPage} from "../../globalPagesSetup.js";
import { GoogleAuthPopUpPage } from "../../pages/GoogleAuthPopUpPage.js";
import dotenv from 'dotenv';
dotenv.config();



Given('User navigate to MetaWin login page', async function () {
  await this.page.goto(process.env.metaWinDevUrl);// data from env file in settings.json
  await loginPage.metawinPasswordBox.fill(process.env.metawinDevPassword);// data from env file in settings.json
  await loginPage.metawinPasswordBox.press('Enter');
});

When('User click the Connect button', async function () {
  await loginPage.noThanksButton.click(); //web element from LoginPage.js
  await loginPage.connectButton.click(); 
  await loginPage.continueWithGoogleButton.click(); 
  
 
});

// Wait for the pop up to open and Google auth page handling
When('User select Google authentication option and login with email {string} and password {string}', async function (string1,string2) {
  const [popup] = await Promise.all([
    this.page.waitForEvent('popup'),
    loginPage.continueButton.click()
  ]);
  const googleAuthPopUpPage = new GoogleAuthPopUpPage(popup);
  
  await googleAuthPopUpPage.googleEmailEnter.fill(process.env.myUserName);
  await googleAuthPopUpPage.googleEmailEnter.press('Enter');
  await googleAuthPopUpPage.googlePasswordEnter.fill(process.env.myPassWord);
  await googleAuthPopUpPage.googlePasswordEnter.press('Enter');

});


Then('User should be redirected to the main dashboard', async function () {
  await expect(this.page).toHaveTitle(mwData.mainPageTitle); // from qa-data-reader.js
  await this.page.close();

   
});