import { LeftMainPage } from "./pages/MainPage.js";
import { PaymentPlanPage } from "./pages/PaymentPlanPage.js";
import { StartApplicationPage } from "./pages/LoginPage.js";
import { ReviewPaymentPage } from "./pages/ReviewPaymentPage.js";
import { LoginPage } from "./pages/LoginPage.js";
// Import OTHER PAGES CLASSES HERE...



/**
 * @type {import('./pages/MainPage.js').MainPage}
 */
export let leftMainPage;



/**
 * @type {import('./pages/LoginPage.js').StartApplicationPage}
 */
export let startApplicationPage;

/**
 * @type {import('./pages/ReviewPaymentPage.js').ReviewPaymentPage}
 */
export let reviewPaymentPage;

/**
 * @type {import('playwright').Page}
 */
export let page;
// ADD OTHER PAGE CLASS REFERENCES HERE...

/**
 * @type {import('./pages/LoginPage.js').LoginPage}
 */
export let loginPage;


/**
 * Initializes the global page elements and instances for the automation framework.
 * 
 * @param {import('playwright').Page} argPage - The Playwright Page instance to be used for interacting with the web pages.
 * @returns {void} This function does not return any value.
 */
export const initElements = (argPage) => {
    page = argPage;
    leftMainPage = new LeftMainPage(page);
    paymentPlanPage = new PaymentPlanPage(page);
    startApplicationPage = new StartApplicationPage(page);
    reviewPaymentPage = new ReviewPaymentPage(page);
    loginPage = new LoginPage(page);
    // ADD OTHER PAGE CLASS INITIALIZATIONS HERE...



};
