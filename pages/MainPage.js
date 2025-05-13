import { BasePage } from "./BasePage.js";

export class MainPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.searchbar = page.locator('//input[@placeholder="Search for games..." and @type="text"]');
    this.providersDropdown = page.locator('//span[normalize-space()="Providers"]');
    
  


  }
}

