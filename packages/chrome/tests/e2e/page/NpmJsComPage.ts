import { BasePage, Browser } from './BasePage';
import { waitForElementToContainText } from './utils';

export class NpmJsComPage extends BasePage {
    constructor (browser: Browser) {
        super(browser);
    }
    public async openPackageAsNewTab (packageName: string) {
        await this.openPageAsNewTab();
        await this.page?.goto(`https://npmjs.com/package/${packageName}`);
    }

    public async waitForCommandText (text: string) {
        await waitForElementToContainText(
            'span[role="button"]',
            text,
            this.page
        )
    }

    public async clickAndTypePackageNameOnSearch (packageName: string) {
        const selector = 'form[id="search"] input[type="search"]';
        await this.page?.waitForSelector(selector);

        await this.page?.type(selector, packageName);
    }

    public async clickPackageOption (packageName: string) {
        const selector = `form[id="search"] ul > li[aria-label="${packageName}"]`;
        await this.page?.waitForSelector(selector);

        await this.page?.click(selector)
    }
}