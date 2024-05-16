const { test, expect } = require('@playwright/test');

class SharePage {
    constructor(page) {
      this.page = page;
      this.shareLinkSelector = '//input[@id="copyInput"]';
      this.facebookButtonSelector = '//div[normalize-space()="Share On Facebook"]';
      this.twitterButtonSelector = '//div[normalize-space()="Share On Twitter"]';
      this.linkedinButtonSelector = '//body//div[@id="__nuxt"]//div//div//div//div[2]//a[1]//button[1]//div[1]';
      this.copyToClipBoard = '.prefix.absolute.inset-y-0.left-0.flex.w-10.items-center.profile.overflow-hidden.pl-3'
    
    }
  
    async waitForShareLink() {
      await this.page.waitForSelector(this.shareLinkSelector);
    }
  
    async checkShareLink() {
      await this.page.click(this.copyToClipBoard);
      let text = await this.page.evaluate("navigator.clipboard.readText()");
      const re = /^https?:\/\/[^\s$.?#].[^\s]*$/;
      expect(text).toMatch(re);
    }
  
    async shareOnFacebook() {
      const [newPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.page.click(this.facebookButtonSelector)
      ]);
      return newPage;
    }
  
    async shareOnTwitter() {
      const [newPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.page.click(this.twitterButtonSelector)
      ]);
      return newPage;
    }
  
    async shareOnLinkedIn() {
      const [newPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.page.click(this.linkedinButtonSelector)
      ]);
      return newPage;
    }
  }
  
  module.exports = SharePage;
  