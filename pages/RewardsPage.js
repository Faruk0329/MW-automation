import { BasePage } from "./BasePage.js";

export class RewardsPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    
    this.rewardDropdown = page.locator("//button[@type='button' and div/span[text()='1']]");
    this.viewDashBoardButton= page.getByRole('button', { name: 'View Dashboard' });
    this.seeAllButton= page.getByRole('button', { name: 'See All' });
    this.allRanksButton= page.getByRole('button', { name: 'All Ranks' });
    this.rewardsPrevillegeTitle= page.locator("//th[contains(@class, 'title') and contains(text(), 'Rewards') and contains(., 'Privileges')]");
    this.seeAllCloseButton= page.locator('button[aria-label="Close modal"]');
    this.allRanksTitle= page.locator("h1.text-2xl.font-bold");
    this.allRanksCloseButton= page.locator('//button[contains(@class, "z-10") and contains(@class, "bg-black/20") and .//span[contains(@class, "icon-ico-x")]]');
  
    this.leaderboardHeader= page.locator("h2.flex.font-bold.text-2xl.mb-2");
}
}



