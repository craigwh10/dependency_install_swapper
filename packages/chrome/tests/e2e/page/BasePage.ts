import type { Browser as PupBrowser, Page } from 'puppeteer';

export type Browser = PupBrowser;
export class BasePage {
    protected page: Page | undefined;
    protected browser: Browser;
    constructor (browser: Browser) {
        this.browser = browser;
    }

    protected async openPageAsNewTab () {
        this.page = await this.browser.newPage();
    }

    public async switchToTab () {
        await this.page?.bringToFront();
    }

    public async close () {
        await this.page?.close();
    }
}