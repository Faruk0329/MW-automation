import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';

export class BasePage {

  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;

  }
  
  async login(){
    await this.page.goto(process.env.metaWinDevUrl);
    BrowserUtility.verify_title(this.page, ',MetaWin');
    await this.page.waitForTimeout(700);
  }

}