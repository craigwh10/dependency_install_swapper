import { availablePackageManagers } from '../storage'
import { contentLogger } from '../utils'
import { updateCommandFromStore } from './command/updateCommandFromStore'
import { updateCopyToClipboardButton } from './command/updateCopyToClipboardButton'

interface MessageType {
  name: string
  payload: {
    preferredPackageManager: availablePackageManagers
  }
}

// Recieves signals from service worker that active tab has changed.
chrome.runtime.onMessage.addListener((msg: MessageType) => {
  if (msg.name === 'trigger_active_update_req') {
    contentLogger('info', `recieved from content: ${msg.payload.preferredPackageManager}`)
    updateCopyToClipboardButton.fromCmdButton(msg.payload.preferredPackageManager)
  }
})

let prevUrl: string | undefined = undefined;
let interval: NodeJS.Timer;

window.onload = function () {
  contentLogger('info', 'onload browser event triggered')

  // URL polling clock.
  setInterval(() => {
    const activeUrl = window.location.href;

    if (activeUrl != prevUrl) {
      // URL changed
      prevUrl = activeUrl;
      contentLogger('info', `url clock picked up url change to ${activeUrl} from ${prevUrl}`);
      updateCommandFromStore(0, updateCopyToClipboardButton.fromPath);
    }
  }, 200);
}

window.onunload = function () {
  // cleanup URL polling clocks
  contentLogger('info', 'unload event called');
  clearInterval(interval)
}

interface FromPopupMessage {
  preferredPackageManager: availablePackageManagers
}

// on changes from popup
chrome.runtime.onMessage.addListener(
  function (request: FromPopupMessage) {
    if (request.preferredPackageManager !== null) {
      contentLogger('info', `recieved from popup: ${request.preferredPackageManager}`)
      updateCopyToClipboardButton.fromCmdButton(request.preferredPackageManager)
    }
  }
)
