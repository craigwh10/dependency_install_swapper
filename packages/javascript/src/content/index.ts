import { preferredPackageManager } from "../storage";
import { contentLogger } from "../utils";
import { updateCopyToClipboardButton } from "./updateCopyToClipboardButton";

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.name === 'trigger_active_update_req') {
    // after our signal that the page is loaded, we send the persisted state of the
    // package manager to our content script from the service worker.
    contentLogger('info', `recieved from content: ${msg.payload.preferredPackageManager}`);
    updateCopyToClipboardButton(msg.payload.preferredPackageManager);
  }
})


// function onReady() {
//   // CSR solution:
//   // when the DOM changes, signal to run an update
//   // example being when you navigate from one package to another in the same app.

//   // signal to service worker that page has loaded to get initial state.
//   chrome.runtime.sendMessage({name: 'register_cuuid_req'}, (response) => {
//     contentLogger('info', `recieved from content: ${response.payload.preferredPackageManager}`);
//     console.log('response');
//     // updateCopyToClipboardButton(response.payload.preferredPackageManager);
//   });

//   contentLogger('info', 'Content script is ready to receive messages');
// }

window.onload =  function() {
  const observer = new MutationObserver(function(mutations) {
    // if the page is either yarnpkg or npmjsorg.
    // note that this script only runs on those on the whitelist!
    const res = document.querySelectorAll('section > code > span')[0];
    const textContent = res?.textContent;
  
    if (textContent) {
      setTimeout(() => {
        preferredPackageManager.get().then((res) => {
          console.log('res', res);
          updateCopyToClipboardButton(res.preferredPackageManager);
        })
      }, 1000)
    }
  });

  const isYarnPkg = document.querySelectorAll('main');
  if (isYarnPkg) {
    isYarnPkg.forEach((node) => {
      observer.observe(node, { characterData: true, subtree: true }); 
    })
  }

}

// on changes from popup
chrome.runtime.onMessage.addListener(
    function(request, _sender){
        if (request.preferredPackageManager) {
            contentLogger('info', `recieved from popup: ${request.preferredPackageManager}`);
            updateCopyToClipboardButton(request.preferredPackageManager);
        }
    }
 );