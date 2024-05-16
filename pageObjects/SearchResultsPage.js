class SearchResultsPage {
    constructor(page) {
      this.page = page;
      this.resultsSelector = 'div[class="mt-20 pb-20"] div[class="grid grid-cols-1 place-items-start gap-8 md:grid-cols-2 lg:grid-cols-3"]';
      this.resultItemSelector = '//body/div/div/div/main/div/div/div/div[1]/div[1]/div[1]';
      this.shareButtonSelector = '//body//div[@id="__nuxt"]//div//div//div//div//div//div//div//div//div[1]//div[1]//div[1]//div[2]//button[3]';
    }
  
    async waitForResults() {
      await this.page.waitForSelector(this.resultsSelector);
    }
  
    async getResultsText() {
      return this.page.$$eval(this.resultItemSelector, items => items.map(item => item.textContent));
    }
  
    async shareFirstResult() {
      await this.page.click(this.shareButtonSelector);
    }
  }
  
  module.exports = SearchResultsPage;
  