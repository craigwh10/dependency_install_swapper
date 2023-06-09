import { preferenceKey } from './constants'

export type availablePackageManagers = 'npm' | 'yarn' | 'pnpm' | 'bower'

export const preferredPackageManager = {
  get: async (): Promise<{ preferredPackageManager: availablePackageManagers }> => {
    return await (chrome.storage.local.get(preferenceKey) as Promise<{ preferredPackageManager: availablePackageManagers }>)
  },
  /**
     * @param val either 'npm' | 'yarn' | 'bower' | 'pnpm'
     */
  set: async (val: string) => {
    await chrome.storage.local.set({
      [preferenceKey]: val
    })
  }
}
