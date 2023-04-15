import { BasePage, Browser } from './BasePage';
import { waitForElementToContainText } from './utils';

export class YarnPkgComPage extends BasePage {
    constructor (browser: Browser) {
        super(browser);
    }
    public async openPackageAsNewTab (packageName: string) {
        await this.openPageAsNewTab();
        await this.page!.goto(`https://yarnpkg.com/package/${packageName}`);
    }
    public async waitForCommandText (text: string) {
        await waitForElementToContainText(
            this.page!,
            'section > code > span',
            text
        )
    }
}