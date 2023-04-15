import { updateCopyToClipboardButton } from "@chrome/src/content/command/updateCopyToClipboardButton"
import { availablePackageManagers } from "@chrome/src/storage"

interface Params {
    html: string
    selector: string
    packageName: string
}

export const shouldTransformToDevDepCmd = ({
    html,
    selector,
    packageName
}: Params) => {
    it.each([
        {
          prefPkgManager: 'yarn',
          expectedCmd: `yarn add -D ${packageName}`
        },
        {
          prefPkgManager: 'npm',
          expectedCmd: `npm i -D ${packageName}`
        },
        {
          prefPkgManager: 'bower',
          expectedCmd: `bower install ${packageName}`
        },
        {
          prefPkgManager: 'pnpm',
          expectedCmd: `pnpm add -D ${packageName}`
        }
      ])(`for dev dep readme and preferred package $prefPkgManager: npm install ${packageName} becomes $expectedCmd with no warning`, ({ prefPkgManager, expectedCmd }) => {
        document.body.innerHTML = html
    
        updateCopyToClipboardButton.fromCmdButton(prefPkgManager as availablePackageManagers)
    
        expect(document.querySelector(selector)).toBeDefined()
        expect(document.querySelector(selector)?.textContent).toEqual(expectedCmd)
        expect(document.querySelector('#dis-google-ext-warning')).toBeNull()
      })
}
