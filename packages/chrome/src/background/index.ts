/// <reference lib="webworker" />

import { preferredPackageManager } from "../storage";

/**
 * On change tabs
 */
chrome.tabs.onActivated.addListener((activeInfo) => {
    preferredPackageManager.get().then((res) => {
        chrome.tabs.sendMessage(activeInfo.tabId, {name: 'trigger_active_update_req', payload: res})
    });
})