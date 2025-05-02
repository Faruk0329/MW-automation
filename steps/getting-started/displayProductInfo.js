import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

import { BasePage } from "../BasePage.js";

// create a logic to log in to the application by using login function from basepage
Given('I navigate to MetaWin login page', async function () {
  await this.page.goto(process.env.metaWinDevUrl);
  const basePage = new BasePage(this.page);
  await basePage.login();
  await this.page.waitForTimeout(700);
});

When('I enter valid password {string}', async function (password) {
  await this.page.locator('#password').fill(password);
});

When('I click the Connect button', async function () {
  await this.page.locator('button:has-text("Connect")').click();
});