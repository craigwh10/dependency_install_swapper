import { preferredPackageManager } from './storage'
import { popupLogger } from './utils'

preferredPackageManager.get().then((res) => {
  const packageChoiceEl: HTMLSelectElement | null = (
    document.querySelector('select[name="preferred-package-manager"]')
  )

  if (packageChoiceEl == null) {
    throw new Error('cannot find preferred package manager select element from popup script')
  }

  popupLogger('info', `setting initial ${JSON.stringify(res)}`)
  packageChoiceEl.value = res.preferredPackageManager

  packageChoiceEl.addEventListener('change', (e): void => {
    const current = e.target as HTMLSelectElement
    popupLogger('info', `select changed to ${current.value}`)
    preferredPackageManager.set(current.value).catch((err) => {
      popupLogger('warn', err.message)
    })
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (typeof tabs[0].id === 'number') {
        chrome.tabs.sendMessage(tabs[0].id, { preferredPackageManager: current.value }, function (response) {
          popupLogger('info', 'message sent to page content script')
        })
      }
    })
  }, false)
}).catch((err) => {
  popupLogger('warn', err.message)
})
