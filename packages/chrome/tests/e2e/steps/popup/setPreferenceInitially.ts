import { availablePackageManagers } from "@chrome/src/storage";
import { PopupPage } from "../../page";
import { Browser } from "../../page/BasePage";

export async function setPreferenceInitially (browser: Browser, preference: availablePackageManagers) {
    const popupPage = new PopupPage(browser);

    await popupPage.openPopupAsNewTab();
    await popupPage.selectPreference(preference);

    return popupPage;
}