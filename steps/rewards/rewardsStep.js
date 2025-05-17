import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { rewardsPage} from "../../globalPagesSetup.js";

Given('User click the Rewards page button', async function () {
  await  rewardsPage.rewardDropdown.first().click();
  await rewardsPage.viewDashBoardButton.click();
});

Given('User click on see all button', async function () {
  await rewardsPage.seeAllButton.click();
  // assertion to check rewards previllege title exists
    await expect(rewardsPage.rewardsPrevillegeTitle).toBeVisible();
    await rewardsPage.seeAllCloseButton.click();
});

Given('User click on all ranks button', async function () {
  await rewardsPage.allRanksButton.click();
  // assertion to check all ranks title exists
    await expect(rewardsPage.allRanksTitle).toBeVisible();
    await rewardsPage.allRanksCloseButton.click();
});

Then('User should able to see Leaderboard ranks', async function () {
  await expect(rewardsPage.leaderboardHeader).toBeVisible();
});
