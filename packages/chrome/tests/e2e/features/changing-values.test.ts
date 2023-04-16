import { getBrowser } from "../getBrowser"
import { PopupPage, NpmJsComPage } from "../page";
import { Browser } from "../page/BasePage";
import { YarnPkgComPage } from "../page/YarnPkgComPage";
import { setPreferenceInitially } from "../steps/popup/setPreferenceInitially";

describe('when a user is changing preferred package', () => {
    let browser: Browser;
    let popup: PopupPage;

    beforeEach(async () => {
        browser = await getBrowser();
        popup = await setPreferenceInitially(browser, 'pnpm');
    })

    afterEach(async () => {
        if (browser) {
            await browser.close();
        }
    })

    it('changes the install command to pnpm when pnpm selected', async () => {
        await pnpmPreferenceOnNpm(browser)
    })

    it('should persist these between npm and yarn', async () => {
        await pnpmPreferenceOnNpm(browser);
        await pnpmPreferenceOnYarn(browser);
    })

    it('should should persist on npm and yarn after closing and reopening', async () => {
        const npmJsComPage = await pnpmPreferenceOnNpm(browser);
        const yarnPkgComPage = await pnpmPreferenceOnYarn(browser);
        await npmJsComPage.close();
        await yarnPkgComPage.close();

        await pnpmPreferenceOnNpm(browser);
        await pnpmPreferenceOnYarn(browser);
    })

    it('should change the preferrence appropriately on both sites if changed on popup', async () => {
        const npmJsComPage = await pnpmPreferenceOnNpm(browser);
        const yarnPkgComPage = await pnpmPreferenceOnYarn(browser);

        await popup.switchToTab();
        await popup.selectPreference('yarn');

        await npmJsComPage.switchToTab();
        await npmJsComPage.waitForCommandText('yarn add eslint');

        await yarnPkgComPage.switchToTab();
        await yarnPkgComPage.waitForCommandText('yarn add eslint');
    })
})

const pnpmPreferenceOnNpm = async (browser: Browser) => {
    const npmJsComPage = new NpmJsComPage(browser);

    await npmJsComPage.openPackageAsNewTab('eslint');
    await npmJsComPage.waitForCommandText('pnpm add eslint');

    return npmJsComPage;
}

const pnpmPreferenceOnYarn = async (browser: Browser) => {
    const yarnPkgComPage = new YarnPkgComPage(browser);

    await yarnPkgComPage.openPackageAsNewTab('eslint');
    await yarnPkgComPage.waitForCommandText('pnpm add eslint');

    return yarnPkgComPage;
}