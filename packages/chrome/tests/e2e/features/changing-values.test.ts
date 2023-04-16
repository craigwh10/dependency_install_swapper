import { getBrowser } from "../getBrowser"
import { PopupPage, NpmJsComPage } from "../page";
import { Browser } from "../page/BasePage";
import { YarnPkgComPage } from "../page/YarnPkgComPage";

describe('when a user is changing preferred package', () => {
    let browser: Browser;

    beforeAll(async () => {
        browser = await getBrowser();
    })

    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    })

    it('changes the install command to pnpm when pnpm selected', async () => {
        console.log("getting browser");
        console.log("found browser", browser);
        const targets = await browser.targets();

        for (const target of targets) {
            console.log('type', target.type());
          }

        console.log('targets found', targets);
        await setPnpmInitially(browser);
        console.log('set pnpm');
        await pnpmPreferenceOnNpm(browser)
        console.log('preparing to close');
        // close pages.
    })
    // it('should persist these between npm and yarn', async () => {
    //     await pnpmPreferenceOnNpm(browser);
    //     await pnpmPreferenceOnYarn(browser);
    // })

    // it('should should persist on npm and yarn after closing and reopening', async () => {
    //     const npmJsComPage = await pnpmPreferenceOnNpm(browser);
    //     const yarnPkgComPage = await pnpmPreferenceOnYarn(browser);
    //     await npmJsComPage.close();
    //     await yarnPkgComPage.close();

    //     await pnpmPreferenceOnNpm(browser);
    //     await pnpmPreferenceOnYarn(browser);
    // })
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