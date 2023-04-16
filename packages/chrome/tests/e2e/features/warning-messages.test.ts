import { getBrowser } from "../getBrowser"
import { NpmJsComPage, PopupPage } from "../page"
import { Browser } from "../page/BasePage"
import { YarnPkgComPage } from "../page/YarnPkgComPage"
import { setPreferenceInitially } from "../steps/popup/setPreferenceInitially"

describe('warning message display feature', () => {
    describe('if preferred package manager is initially bower', () => {
        let browser: Browser
        let popup: PopupPage

        beforeEach(async () => {
            browser = await getBrowser()
            popup = await setPreferenceInitially(browser, 'bower');
        })
    
        afterEach(async () => {
            if (browser) {
                await browser.close()
            }
        })

        it('should show no warnings initially, but then changing to yarn will display warnings', async () => {
            const npmJsComPage = new NpmJsComPage(browser); 
            const yarnJsComPage = new YarnPkgComPage(browser);

            await npmJsComPage.openPackageAsNewTab('react');

            expect(await npmJsComPage.getWarningVisibility(1000)).toEqual(false);

            await yarnJsComPage.openPackageAsNewTab('react');

            expect(await yarnJsComPage.getWarningVisibility(2000)).toEqual(false);

            await popup.switchToTab();
            await popup.selectPreference('yarn');

            // does not have readme with install so warning should show
            // for non bower.
            await npmJsComPage.switchToTab();

            expect(await npmJsComPage.getWarningVisibility(1000)).toEqual(true);

            await yarnJsComPage.switchToTab();

            expect(await yarnJsComPage.getWarningVisibility(2000)).toEqual(false);
        })

        it('should not show warning on either site, even after searching for a package and navigating to it', async () => {
            const npmJsComPage = new NpmJsComPage(browser); 
            const yarnJsComPage = new YarnPkgComPage(browser);

            // check npmjs navigation non visibility of warning
            await npmJsComPage.openPackageAsNewTab('react');
            await npmJsComPage.clickAndTypePackageNameOnSearch('eslint');
            await npmJsComPage.clickPackageOption('eslint');

            expect(await npmJsComPage.getWarningVisibility(1000)).toEqual(false);

            // check yarnpkg navigation non visibility of warning
            await yarnJsComPage.openPackageAsNewTab('react');
            await yarnJsComPage.clickAndTypePackageNameOnSearch('eslint');
            await yarnJsComPage.clickPackageOptionFromPage('eslint');

            expect(await yarnJsComPage.getWarningVisibility(1000)).toEqual(false);

            // hitting enter with exact name has different behaviour in rendering
            await yarnJsComPage.clickAndTypePackageNameOnSearch('react');
            await yarnJsComPage.hitEnter();

            expect(await yarnJsComPage.getWarningVisibility(1000)).toEqual(false);
        })
    })
})
