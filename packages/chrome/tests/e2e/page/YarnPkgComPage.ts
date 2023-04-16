import { BasePage, Browser } from './BasePage';
import { waitForElementToContainText } from './utils';

export class YarnPkgComPage extends BasePage {
    constructor (browser: Browser) {
        super(browser);
    }

    public async openPackageAsNewTab (packageName: string) {
        await this.openPageAsNewTab();
        await this.page?.goto(`https://yarnpkg.com/package/${packageName}`);
    }

    public async waitForCommandText (text: string) {
        await waitForElementToContainText(
            'section > code > span',
            text,
            this.page
        )
    }

    public async clickAndTypePackageNameOnSearch (packageName: string) {
        const selector = 'form input[type="search"]';
        await this.page?.waitForSelector(selector);

        await this.page?.type(selector, packageName);
    }

    public async clickPackageOptionFromPage (packageName: string) {
        const selector = `a[href="/package/${packageName}"]`;
        await this.page?.waitForSelector(selector);

        await this.page?.click(selector)
    }

    public async hitEnter () {
        await this.page?.keyboard.press('Enter');
    }
}