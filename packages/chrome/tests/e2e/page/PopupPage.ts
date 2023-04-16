import { availablePackageManagers } from "@chrome/src/storage";
import { BasePage, Browser } from "./BasePage";

export class PopupPage extends BasePage {
    constructor (browser: Browser) {
        super(browser);
    }

    public async openPopupAsNewTab () {
        await this.openPageAsNewTab();
        const extensionTarget = await this.browser.waitForTarget(target => target.type() === 'service_worker');
        const partialExtensionUrl = extensionTarget?.url() || '';
        const [, , extensionId] = partialExtensionUrl.split('/');
    
        const extensionUrl = `chrome-extension://${extensionId}/popup.html`;
    
        await this.page!.goto(extensionUrl, {waitUntil: ['domcontentloaded', "networkidle2"]});
    }

    public async selectPreference (choice: availablePackageManagers) {
        await this.page!.waitForSelector(`input[value="${choice}"]`);
        await this.page!.click(`input[value="${choice}"]`);
    }
}
