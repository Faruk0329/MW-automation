import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.metawinPasswordBox = page.locator("#password");
  
  }
}

