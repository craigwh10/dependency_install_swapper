import { preferredPackageManager } from "../storage";
import { contentLogger } from "../utils";
import { handleNpmInstallButton } from "./handleNpmInstallButton";

// only works for initial
preferredPackageManager.get().then((preferredPackageManager) => {
    // MVP: only supporting npm.com
    contentLogger('info', `got preferred package manager for initial - ${preferredPackageManager.preferredPackageManager}`)
    handleNpmInstallButton(preferredPackageManager.preferredPackageManager);
}).catch((err) => {
    contentLogger('warn', err.message);
})

// on changes from popup
chrome.runtime.onMessage.addListener(
    function(request, _sender, _sendResponse){
        // MVP: only supporting npmjs.com
        contentLogger('info', `recieved from content: ${request.preferredPackageManager}`);
        handleNpmInstallButton(request.preferredPackageManager);
    }
 );