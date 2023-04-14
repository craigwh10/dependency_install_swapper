import { preferredPackageManager } from '../storage'
import { backgroundLogger } from '../utils'

/**
 * On change tabs
 */
chrome.tabs.onActivated.addListener((activeInfo) => {
  preferredPackageManager.get().then((res) => {
    chrome.tabs
      .sendMessage(activeInfo.tabId, { name: 'trigger_active_update_req', payload: res })
      .catch((err) => {
        backgroundLogger('warn', err.message)
      })
  }).catch((err) => {
    backgroundLogger('warn', err.message)
  })
})
