import type { Browser as PupBrowser, Page } from 'puppeteer';

// https://vivrichards.co.uk/automation/e2e-testing-chrome-extension-using-puppeteer
export type Browser = PupBrowser;
export class BasePage {
    protected page: Page | undefined;
    protected browser: Browser;
    constructor (browser: Browser) {
        this.browser = browser;
    }

    protected async openPageAsNewTab () {
        this.page = await this.browser.newPage();
        await this.page.setViewport({
            width: 1400,
            height: 800
        })
    }

    protected async switchToTab () {
        await this.page!.bringToFront();
    }
}