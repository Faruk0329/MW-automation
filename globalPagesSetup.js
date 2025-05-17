import { LoginPage } from "./pages/LoginPage.js";
import { GoogleAuthPopUpPage } from "./pages/GoogleAuthPopUpPage.js";
import { CompetitionsPage } from "./pages/CompetitionsPage.js";
import {MainPage} from "./pages/MainPage.js";
import { RewardsPage } from "./pages/RewardsPage.js";


//import { SalonRougePage} from "./pages/SalonRougePage.js";

// Import OTHER PAGES CLASSES HERE...

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
 * @type {import('./pages/CompetitionsPage.js').CompetitionsPage}
 */
export let competitionsPage;


/**
 * @type {import('./pages/RewardsPage.js').RewardsPage}
 */
export let rewardsPage;


/**
 * @type {import('./pages/SalonRougePage.js').SalonRougePage}
 */
//export let salonRougePage;

/**
 * @type {import('./pages/GoogleAuthPopUpPage.js').GoogleAuthPopUpPage}
 */
export let googleAuthPopUpPage;

/**
 * @type {import('./pages/MainPage.js').MainPage}
 */
export let mainPage;

/**
 * Initializes the global page elements and instances for the automation framework.
 * 
 * @param {import('playwright').Page} argPage - The Playwright Page instance to be used for interacting with the web pages.
 * @returns {void} This function does not return any value.
 */
export const initElements = (argPage) => {
    page = argPage;
    loginPage = new LoginPage(page);
    googleAuthPopUpPage = new GoogleAuthPopUpPage(page);
    competitionsPage = new CompetitionsPage(page);
    mainPage= new MainPage(page);
    rewardsPage = new RewardsPage(page);
    //salonRougePage = new SalonRougePage(page);
    // ADD OTHER PAGE CLASS INITIALIZATIONS HERE...



};
