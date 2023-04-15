import { getBrowser } from "../getBrowser"
import { PopupPage, NpmJsComPage } from "../page";
import { Browser } from "../page/BasePage";
import { YarnPkgComPage } from "../page/YarnPkgComPage";

describe('when a user is changing preferred package', () => {
    let browser: Browser;

    beforeEach(async() => {
        browser = await getBrowser();
    })

    afterEach(async () => {
        await browser.close();
    })

    it('changes the install command to pnpm when pnpm selected', async () => {
        const popupPage = new PopupPage(browser);
        const npmJsComPage = new NpmJsComPage(browser);

        await popupPage.openPopupAsNewTab();
        await popupPage.selectPreference('pnpm');

        await npmJsComPage.openPackageAsNewTab('eslint');
        await npmJsComPage.waitForCommandText('pnpm add eslint');
    })
    it('should persist these between npm and yarn', async () => {
        const popupPage = new PopupPage(browser);
        const npmJsComPage = new NpmJsComPage(browser);
        const yarnPkgComPage = new YarnPkgComPage(browser);

        await popupPage.openPopupAsNewTab();
        await popupPage.selectPreference('pnpm');

        await npmJsComPage.openPackageAsNewTab('eslint');
        await npmJsComPage.waitForCommandText('pnpm add eslint');

        await yarnPkgComPage.openPackageAsNewTab('eslint');
        await yarnPkgComPage.waitForCommandText('pnpm add eslint');
    })
})