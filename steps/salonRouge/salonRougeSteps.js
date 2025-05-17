import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { mainPage} from "../../globalPagesSetup.js";
import { loginPage} from "../../globalPagesSetup.js";
import { mwData } from '../../utilities/qa-data-reader.js';
import { GoogleAuthPopUpPage } from "../../pages/GoogleAuthPopUpPage.js";
import dotenv from 'dotenv';
dotenv.config();