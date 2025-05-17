import { BasePage } from "./BasePage.js";

export class MainPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.searchbar = page.locator('//input[@placeholder="Search for games..." and @type="text"]');
    this.providersDropdown = page.locator('//span[normalize-space()="Providers"]');
    this.metawinStudio= page.locator('//ul[contains(@class,"overflow-y-auto")]/li[div[contains(text(),"MetaWin Studio")]]');
    //this.resultGame = page.locator(`img[alt="${gameName}"]`);// dynamic game name
    this.resultDice = page.locator(`img[alt="Dice"]`);
    this.resultMine = page.locator('//img[alt="Mine"]');
    this.filterClrearButton = page.locator("//button[@type='button' and .//span[contains(@class, 'icon-ico-x')]]");
    this.chatBox = page.locator("//textarea[@placeholder='Message #website-chat']");

  }
}

