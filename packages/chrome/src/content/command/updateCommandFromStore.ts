import { availablePackageManagers, preferredPackageManager } from '@chrome/src/storage'
import { contentLogger } from '@chrome/src/utils'

export const updateCommandFromStore = (timeout: number, updateHandler: (preferredPackageManager: availablePackageManagers) => void): void => {
  setTimeout(() => {
    preferredPackageManager.get().then((res) => {
      updateHandler(res.preferredPackageManager)
    }).catch((err) => {
      contentLogger('warn', err.message)
    })
  }, timeout)
}
