import { availablePackageManagers, preferredPackageManager } from '../storage'
import { contentLogger } from '../utils'
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
    updateCopyToClipboardButton(msg.payload.preferredPackageManager)
  }
})

let observer: MutationObserver

/**
 * Handles on load, and CSR navigation.
 * @since
 * yarnpkg.com support
 * @satisfies
 * CSR only yarnpkg, not SSR such as npmjs
 */
window.onload = function () {
  contentLogger('info', 'onload browser event triggered')

  const npmjsCmd = document.querySelector('code > span') // this exists on yarnpkg also!
  const npmjsOnlyEl = document.querySelector('#main')

  if ((npmjsCmd != null) && (npmjsOnlyEl != null)) {
    contentLogger('info', 'npmjs loaded')
    setTimeout(() => {
      preferredPackageManager.get().then((res) => {
        updateCopyToClipboardButton(res.preferredPackageManager)
      }).catch((err) => {
        contentLogger('warn', err.message)
      })
    }, 300)

    // ignore observer usage.
    return
  }

  observer = new MutationObserver(function () {
    // if the page is either yarnpkg or npmjsorg.
    // note that this script only runs on those on the whitelist!
    const yarnPkgCmd = document.querySelectorAll('section > code > span')[0]
    const yarnPkgCmdText = yarnPkgCmd?.textContent

    if (yarnPkgCmdText != null || yarnPkgCmdText !== '') {
      contentLogger('info', 'found yarnpkg cmd text, triggering update handler')

      setTimeout(() => {
        preferredPackageManager.get().then((res) => {
          updateCopyToClipboardButton(res.preferredPackageManager)
        }).catch((err) => {
          contentLogger('warn', err.message)
        })
      }, 1500)
    }
  })

  const availableDOM = document.querySelectorAll('main')
  if (availableDOM.length !== 0) {
    contentLogger('info', 'observer attached')

    availableDOM.forEach((node) => {
      observer.observe(node, { characterData: true, subtree: true })
    })
  }
}

// Cleanup observer
window.onunload = function () {
  if (observer != null) {
    contentLogger('info', 'removing observer on unload')
    observer.disconnect()
  }
}

interface FromPopupMessage {
  preferredPackageManager: availablePackageManagers
}

// on changes from popup
chrome.runtime.onMessage.addListener(
  function (request: FromPopupMessage) {
    if (request.preferredPackageManager != null) {
      contentLogger('info', `recieved from popup: ${request.preferredPackageManager}`)
      updateCopyToClipboardButton(request.preferredPackageManager)
    }
  }
)
