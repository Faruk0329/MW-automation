import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { LoginPage, page } from "../../LoginPage.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

// steps/login_steps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I navigate to MetaWin login page', async function () {
  await this.page.goto(process.env.metaWinDevUrl);
});

When('I enter valid password {string}', async function () {
  await LoginPage.metawinPasswordBox.fill(process.env.metawinDevPassword);
});

When('I click the Connect button', async function () {
  await this.page.locator('button:has-text("Connect")').click();
});

When('I select Google authentication option', async function () {
  const [newPage] = await Promise.all([
    this.page.waitForEvent('popup'),
    this.page.locator('button:has-text("Continue with Google")').click()
  ]);
  this.googlePage = newPage;
});
//new practice

When('I handle Google login with email {string} and password {string}', async function (email, password) {
  // Google auth page handling
  await this.googlePage.locator('[aria-label="Email or phone"]').fill(email);
  await this.googlePage.locator('button:has-text("Continue")').click();
  await this.googlePage.locator('[aria-label="Enter your password"]').fill(password);
  await this.googlePage.locator('button:has-text("Continue")').click();
});

Then('I should be redirected to the main dashboard', async function () {
  await expect(this.page).toHaveURL(/dashboard/);
  await this.page.close();
});