
import { loginPage } from "../globalPagesSetup.js";
import dotenv from 'dotenv';
dotenv.config();

export class BasePage {

  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.page = page;

  }
  async loginWithGoogle(email, password) {
    await this.page.goto(process.env.metaWinDevUrl);
    await loginPage.metawinPasswordBox.fill(process.env.metawinDevPassword);
    await loginPage.metawinPasswordBox.press('Enter');
    await loginPage.noThanksButton.click();
    await loginPage.connectButton.click();
    await loginPage.continueWithGoogleButton.click();

    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.continueButton.click()
    ]);

    // GoogleAuthPopUpPage should be imported and instantiated here
    const googleAuthPopUpPage = new GoogleAuthPopUpPage(popup);
    email= process.env.myUserName;
    this.email = email;
    password= process.env.myPassWord;
    this.password = password;
    await googleAuthPopUpPage.googleEmailEnter.fill(email);
    await googleAuthPopUpPage.googleEmailEnter.press('Enter');
    await googleAuthPopUpPage.googlePasswordEnter.fill(password);
    await googleAuthPopUpPage.googlePasswordEnter.press('Enter');
  }

  
};

  
