import { updateCopyToClipboardButton } from "@chrome/src/content/command/updateCopyToClipboardButton"
import { availablePackageManagers } from "@chrome/src/storage"

interface Params {
    html: string
    selector: string
    packageName: string
    withWarning: boolean
}

export const shouldTransformToRegularDep = ({
    html,
    selector,
    packageName,
    withWarning
}: Params) => {
    it.each([
        {
          prefPkgManager: 'yarn',
          expectedCmd: `yarn add ${packageName}`
        },
        {
          prefPkgManager: 'npm',
          expectedCmd: `npm i ${packageName}`
        },
        {
          prefPkgManager: 'bower',
          expectedCmd: `bower install ${packageName}`
        },
        {
          prefPkgManager: 'pnpm',
          expectedCmd: `pnpm add ${packageName}`
        }
      ])(`for non dev dep readme and preferred package $prefPkgManager: npm install ${packageName} becomes $expectedCmd with no warning`, ({ prefPkgManager, expectedCmd }) => {
        document.body.innerHTML = html
    
        updateCopyToClipboardButton.fromCmdButton(prefPkgManager as availablePackageManagers)
    
        expect(document.querySelector(selector)).toBeDefined()
        expect(document.querySelector(selector)?.textContent).toEqual(expectedCmd)
        
        if (withWarning) {
          expect(document.querySelector('#dis-google-ext-warning')).toBeDefined()
        } else {
          expect(document.querySelector('#dis-google-ext-warning')).toBeNull()
        }
      })
}