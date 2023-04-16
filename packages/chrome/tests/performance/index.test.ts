import { getBrowser } from "../e2e/getBrowser";
import { PopupPage } from "../e2e/page";
import { Browser } from "../e2e/page/BasePage";
const { performance } = require('perf_hooks');

describe('performance testing', () => {
    it('does not significantly slow down the browser for npmjs', async () => {
        await testCase('https://npmjs.com/package/eslint')
    })

    it('does not significantly slow down the browser for yarnpkg', async () => {
        await testCase('https://yarnpkg.com/package/eslint')
    })
})

const testCase = async (url: string) => {
    let noExtRes = null;
    let extRes = null;
    
    try {
        const { loadTime: withNoExtension, browser: withNoExtensionBrowser } = await runPerfTest(true, url);
        noExtRes = withNoExtension;
        await withNoExtensionBrowser.close();
    } catch ({ browser, err}: any) {
        await browser?.close();
        throw new Error(err);
    }

    try {
        const { loadTime: withExtension, browser: withExtensionBrowser } = await runPerfTest(false, url);
        extRes = withExtension;
        await withExtensionBrowser.close()
    } catch ({ browser, err}: any) {
        await browser?.close();
        throw new Error(err);
    }

    if (noExtRes && extRes) {
        console.log(url, {extRes, noExtRes});
        const acceptableMs = 100;
        expect(extRes < (noExtRes + acceptableMs)).toBe(true);
    }
}

const runPerfTest = async (withNoExtension: boolean, url: string) => {
    let browser: Browser | null = null;

    try {
        browser = await getBrowser(withNoExtension);


        if (withNoExtension === false) {
            await setPnpmInitially(browser);
        }

        const page = await browser.newPage();

        const navigationStart = performance.now();

        await page.goto(url);

        const loadTime = performance.now() - navigationStart;

        return {loadTime, browser};
    } catch (err) {
        throw { browser, err };
    }
}

export const setPnpmInitially = async (browser: Browser) => {
    const popupPage = new PopupPage(browser);

    await popupPage.openPopupAsNewTab();
    await popupPage.selectPreference('pnpm');

    return popupPage;
}