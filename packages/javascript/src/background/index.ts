/// <reference lib="webworker" />

// import { message } from "../shared/message";
import { preferredPackageManager } from "../storage";

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     console.log({tabId, changeInfo, tab})
//     if (changeInfo.status === 'complete') {
//         chrome.tabs.sendMessage(tabId, { type: 'extensionInstalled' }, (response) => {
//             console.log('Response received:', response);
//         });
//     }
// })

// let activeTabId: number | undefined = undefined;

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.name === 'register_cuuid_req') {
//         // get the id of the active tab, as we only want this to
//         // run on active tabs.
//         // why? so that it doesn't do side-effects to other tabs and add elements.
//         chrome.tabs.query(
//             {currentWindow: true, active : true},
//             function(tabArray){
//                 if (activeTabId === tabArray[0].id) {
//                     preferredPackageManager.get().then((res) => {
//                         // send the state of the store to the content script that
//                         // requested this.
//                         sendResponse({payload: res})
    
//                         // important to ensure asynchronicity
//                         return true;
//                     })
//                 }
//                 // important to ensure asynchronicity
//                 return true;
//             }
//         )

//         // important to ensure asynchronicity
//         return true;
//     }
//     // if (message.name === 'unregister_cuuid_req') {
//     //     console.log('unload tab')
//     //     delete activeTabContentMap[message.payload.contentId];
//     //     return;
//     // }
// })

/**
 * On change tabs
 */
chrome.tabs.onActivated.addListener((activeInfo) => {
    // activeTabId = activeInfo.tabId;

    console.log('active');
    preferredPackageManager.get().then((res) => {
        chrome.tabs.sendMessage(activeInfo.tabId, {name: 'trigger_active_update_req', payload: res})
    });
})