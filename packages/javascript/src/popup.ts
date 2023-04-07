import { preferredPackageManager } from "./storage";
import { popupLogger } from "./utils";

const packageChoiceEl: HTMLSelectElement = (
    document.querySelector('select[name="preferred-package-manager"]')!
);

preferredPackageManager.get().then((res) => {
    if (packageChoiceEl) {
        popupLogger('info', `setting initial ${JSON.stringify(res)}`)
        packageChoiceEl.value = res.preferredPackageManager;

        packageChoiceEl.addEventListener('change', async (e) => {
            const current = e.target as HTMLSelectElement;
            popupLogger('info', `select changed to ${current.value}`)
            await preferredPackageManager.set(current.value);
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id!, {"preferredPackageManager": current.value}, function(response) {
                popupLogger('info', 'message sent to page content script')
            });
            });
        }, false)

    } else {
        popupLogger('warn', 'missing select element')
    }
}).catch((err) => {
    popupLogger('warn', err.message);
})