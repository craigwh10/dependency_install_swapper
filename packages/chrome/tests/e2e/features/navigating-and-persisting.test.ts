import { getBrowser } from "../getBrowser"
import { PopupPage, NpmJsComPage } from "../page";
import { Browser } from "../page/BasePage";
import { YarnPkgComPage } from "../page/YarnPkgComPage";

describe('when a user is changing preferred package', () => {
    let browser: Browser

    beforeEach(async () => {
        browser = await getBrowser()
        await setPnpmInitially(browser)
    })

    afterEach(async () => {
        if (browser) {
            await browser.close()
        }
    })

    it('should persist between packages navigating internally on npm', async () => {
        const npmPage = await pnpmPreferenceOnNpm(browser)

        await npmPage.clickAndTypePackageNameOnSearch('react');

        await npmPage.clickPackageOption('react');

        await npmPage.waitForCommandText('pnpm add react');
    })

    it('should persist between packages navigating internally on yarn via search then clicking option', async () => {
        const yarnPkgPage = await pnpmPreferenceOnYarn(browser);

        await yarnPkgPage.clickAndTypePackageNameOnSearch('react');

        await yarnPkgPage.clickPackageOptionFromPage('react');

        await yarnPkgPage.waitForCommandText('pnpm add react');
    })

    it('should persist between packages navigating internally via search then enter key', async () => {
        const yarnPkgPage = await pnpmPreferenceOnYarn(browser);

        await yarnPkgPage.clickAndTypePackageNameOnSearch('react');

        await yarnPkgPage.hitEnter();

        await yarnPkgPage.waitForCommandText('pnpm add react');
    })
})


const pnpmPreferenceOnNpm = async (browser: Browser) => {
    const npmJsComPage = new NpmJsComPage(browser);

    await npmJsComPage.openPackageAsNewTab('eslint');
    await npmJsComPage.waitForCommandText('pnpm add eslint');

    return npmJsComPage;
}

async function setPnpmInitially (browser: Browser) {
    const popupPage = new PopupPage(browser);

    await popupPage.openPopupAsNewTab();
    await popupPage.selectPreference('pnpm');

    return popupPage;
}

const pnpmPreferenceOnYarn = async (browser: Browser) => {
    const yarnPkgComPage = new YarnPkgComPage(browser);

    await yarnPkgComPage.openPackageAsNewTab('eslint');
    await yarnPkgComPage.waitForCommandText('pnpm add eslint');

    return yarnPkgComPage;
}