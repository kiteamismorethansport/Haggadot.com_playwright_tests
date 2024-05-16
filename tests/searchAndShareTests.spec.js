const { test, expect } = require('@playwright/test');
const HomePage = require('../pageObjects/HomePage');
const SearchResultsPage = require('../pageObjects/SearchResultsPage');
const SharePage = require('../pageObjects/SharePage');

test.describe('Search and Share Haggadah tests', () => {

  let page;
  let homePage;
  let searchResultsPage;
  let sharePage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    sharePage = new SharePage(page);
    await homePage.goto();
  });

  test('Search for a Haggadah using a keyword', async () => {
    await homePage.searchForHaggadah('Kids haggaddah');
    await searchResultsPage.waitForResults();
  });

  test('Verify that the search results match the keyword', async () => {
    await homePage.searchForHaggadah('Kids haggaddah');
    await searchResultsPage.waitForResults();
    const results = await searchResultsPage.getResultsText();
    for (const result of results) {
      expect(result.toLowerCase()).toContain('kids'||'children'||'family');
    }
  });

  test('Share a specific Haggadah from the search results', async () => {
    await homePage.searchForHaggadah('Kids haggaddah');
    await searchResultsPage.waitForResults();
    await searchResultsPage.shareFirstResult();
    await sharePage.waitForShareLink();
    await sharePage.checkShareLink();
  });

  test('Verify sharing on Facebook, Twitter, and LinkedIn', async () => {
    await homePage.searchForHaggadah('Kids haggaddah');
    await searchResultsPage.waitForResults();
    await searchResultsPage.shareFirstResult();
    await sharePage.waitForShareLink();
    // Verify Facebook share
    const facebookPage = await sharePage.shareOnFacebook();
    expect(facebookPage.url()).toContain('facebook.com');
    await facebookPage.close();
    // Verify Twitter share
    const twitterPage = await sharePage.shareOnTwitter();
    expect(twitterPage.url()).toContain('twitter.com');
    await twitterPage.close();
    // Verify LinkedIn share
    const linkedInPage = await sharePage.shareOnLinkedIn();
    expect(linkedInPage.url()).toContain('linkedin.com');
    await linkedInPage.close();
  });

  test.afterEach(async () => {
    await page.close();
  });
});

