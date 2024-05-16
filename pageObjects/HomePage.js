class HomePage {
    constructor(page) {
      this.page = page;
      this.searchLink = '.icon-search.text-lg.leading-none';
      this.searchInput= '//input[@id="field"]'
      this.searchButton = '//div[normalize-space()="Search"]';
    }
  
    async goto() {
      await this.page.goto('https://www.haggadot.com');
    }
  
    async searchForHaggadah(keyword) {
      await this.page.click(this.searchLink);
      await this.page.fill(this.searchInput, keyword);
      await this.page.click(this.searchButton);
    }
  }
  
  module.exports = HomePage;
  