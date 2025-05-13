// Import the required 'fs' module to read the file
import { readFileSync } from 'fs';

/**
 * @typedef {Object} MWData
 * @property {string} mainPageTitle
 * @property {string} mainPageUrl
 * @property {string} metaWinDevUrl
 * @property {string} metawinDevPassword
 * @property {string} myUserName
 * @property {string} myPassWord
 * @property {string} firstCompetitonName
 * @property {string} firstCompetitonUrl
 * @property {string} firstCompetitonPrizeCurrency

 */
class QAData {
  /**
   * @param {MWData} mwData
   */
  constructor({
  
    mainPageTitle,
    mainPageUrl,
    metaWinDevUrl,
    metawinDevPassword,
    myUserName,
    myPassWord,
    firstCompetitonName,
    firstCompetitonUrl,
    firstCompetitonPrizeCurrency

  }) {
    this.mainPageTitle = mainPageTitle;
    this.mainPageUrl = mainPageUrl;
    this.metaWinDevUrl = metaWinDevUrl;
    this.metawinDevPassword = metawinDevPassword;
    this.myUserName = myUserName;
    this.myPassWord = myPassWord;
    this.firstCompetitonName = firstCompetitonName;
    this.firstCompetitonUrl = firstCompetitonUrl;
    this.firstCompetitonPrizeCurrency = firstCompetitonPrizeCurrency;
    // Add other properties as needed

  }
}




// Instantiate the QAData object with the data from the JSON file and export it use something like this: export const productInfo = new Product(JSON.parse(readFileSync('./test-data/qa_data.json', 'utf8')));
export const mwData = new QAData(JSON.parse(readFileSync('./test-data/qa_data.json', 'utf8')));

// create an import statement for the mwData object
// import { mwData } from '../../utilities/qa-data-reader.js';
// use it in your test file like this:
// console.log(mwData.baseAmount);

