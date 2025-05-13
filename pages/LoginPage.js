import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.metawinPasswordBox = page.locator("#password");
    this.noThanksButton = page.getByRole("button", {name: "No, thanks",});
    this.connectButton = page.getByRole("button", {name: "Connect"});
    this.continueWithGoogleButton = page.locator("button:has-text('Continue with Google')");
    this.continueButton = page.getByText("Continue");
    this.googleEmailEnter = page.locator('[aria-label="Email or phone"]');
    this.googlePasswordEnter = page.locator('[aria-label="Enter your password"]');
  


  }
} 

