import { BasePage, Browser } from './BasePage';
import { waitForElementToContainText } from './utils';

export class NpmJsComPage extends BasePage {
    constructor (browser: Browser) {
        super(browser);
    }
    public async openPackageAsNewTab (packageName: string) {
        await this.openPageAsNewTab();
        await this.page!.goto(`https://npmjs.com/package/${packageName}`);
    }

    public async waitForCommandText (text: string) {
        await waitForElementToContainText(
            this.page!,
            'span[role="button"]',
            text
        )
    }
}