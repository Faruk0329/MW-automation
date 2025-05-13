import { BasePage } from "./BasePage.js";

export class CompetitionsPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.competiotionButton = page.locator('//button[contains(@class, "nav-button") and contains(@class, "active") and @size="2xs"]');
    this.firstCompetition = page.locator('//div[contains(@class, "bg-blue-500")]');// it's not unique
    this.thanksMessage = page.locator("//h1[@class='text-3xl uppercase tracking-widest mt-5 text-center mb-4' and text()='Thanks for playing']");
    this.rewardpageButton = page.locator('//button[contains(@class, "nav-button") and @size="2xs" and .//div[contains(@class, "label") and normalize-space()="Rewards"]]');
    this.rewardpageButton2 = page.getByRole('navigation').getByRole('button', { name: 'Rewards' });
    
  
  }
}