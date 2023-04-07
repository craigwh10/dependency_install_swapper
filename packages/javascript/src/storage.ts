import { preferenceKey } from "./constants"

export type availablePackageManagers = 'npm' | 'yarn' | 'pnpm';

export const preferredPackageManager = {
    get: async (): Promise<{ preferredPackageManager: availablePackageManagers}> => {
        return chrome.storage.local.get(preferenceKey) as Promise<{ preferredPackageManager: availablePackageManagers}>;
    },
    /**
     * @param val 'npm' | 'yarn'
     */
    set: async (val: string) => {
        await chrome.storage.local.set({
            [preferenceKey]: val
        })
    }
}
