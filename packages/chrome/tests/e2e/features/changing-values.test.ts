import { getBrowser } from "../getBrowser"
import { PopupPage, NpmJsComPage } from "../page";
import { Browser } from "../page/BasePage";
import { YarnPkgComPage } from "../page/YarnPkgComPage";

describe('when a user is changing preferred package', () => {
    let browser: Browser;

    beforeEach(async () => {
        browser = await getBrowser();
        await setPnpmInitially(browser);
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
})

export const setPnpmInitially = async (browser: Browser) => {
    const popupPage = new PopupPage(browser);

    await popupPage.openPopupAsNewTab();
    await popupPage.selectPreference('pnpm');

    return popupPage;
}

export const pnpmPreferenceOnNpm = async (browser: Browser) => {
    const npmJsComPage = new NpmJsComPage(browser);

    await npmJsComPage.openPackageAsNewTab('eslint');
    await npmJsComPage.waitForCommandText('pnpm add eslint');

    return npmJsComPage;
}

export const pnpmPreferenceOnYarn = async (browser: Browser) => {
    const yarnPkgComPage = new YarnPkgComPage(browser);

    await yarnPkgComPage.openPackageAsNewTab('eslint');
    await yarnPkgComPage.waitForCommandText('pnpm add eslint');

    return yarnPkgComPage;
}