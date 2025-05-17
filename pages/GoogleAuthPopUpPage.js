import { BasePage } from "./BasePage.js";

export class GoogleAuthPopUpPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.googleEmailEnter = page.locator('[aria-label="Email or phone"]');
    this.googlePasswordEnter = page.locator('[aria-label="Enter your password"]');
    this.googleEmailClick=page.locator('//div[@role="link" and @data-identifier="hparouke@metawin.inc"]');
  


  }
}

