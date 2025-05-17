import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

Given('User login to MetaMask', { timeout: 120 * 1000 }, async function () {
  // Assuming your Playwright context is already launched with MetaMask extension loaded
  // and this.page is a page in that context

  // 1. Navigate to your DApp or platform that triggers MetaMask login
  await this.page.goto(process.env.metaWinDevUrl);

  // 2. Click the button on your platform that triggers MetaMask connection popup
  await this.page.click('button#connect-wallet'); // Adjust selector accordingly

  // 3. Wait for MetaMask popup page to open
  const metamaskPopup = await this.page.context().waitForEvent('page', { timeout: 60000 });

  // 4. Automate MetaMask login steps inside the popup
  // Example selectors based on MetaMask UI - adjust if needed

  // Wait for MetaMask popup to load
  await metamaskPopup.waitForLoadState();

  // If this is first time login, you may need to import wallet or create wallet:
  // Here is an example of importing wallet with seed phrase and setting password

  // Fill seed phrase
  await metamaskPopup.fill('input[placeholder="Paste seed phrase from clipboard"]', process.env.METAMASK_SEED_PHRASE);

  // Fill new password
  await metamaskPopup.fill('input[id="password"]', process.env.METAMASK_PASSWORD);

  // Confirm password
  await metamaskPopup.fill('input[id="confirm-password"]', process.env.METAMASK_PASSWORD);

  // Agree to terms checkbox
  await metamaskPopup.click('input[type="checkbox"]');

  // Click Import button
  await metamaskPopup.click('button[type="submit"]');

  // Wait for import success screen and click "All Done"
  await metamaskPopup.click('button:has-text("All Done")');

  // Close popup or switch back to main page
  await metamaskPopup.close();

  // 5. Back to main page, wait for wallet connection confirmation
  // This depends on your platform UI, example:
  await expect(this.page.locator('text=Wallet Connected')).toBeVisible({ timeout: 30000 });

  // 6. Optionally verify page title or user state after login
  await expect(this.page).toHaveTitle(/MetaWin/i);
});


