import { availablePackageManagers } from '../../storage'
import { contentLogger } from '../../utils'
import { getInstallButton } from './getInstallButton'
import { handleReplaceCmdText } from './handleReplaceCmdText'

const PACKAGE_MANAGERS: Record<availablePackageManagers, string> = {
  yarn: 'yarn add',
  npm: 'npm i',
  pnpm: 'pnpm add',
  bower: 'bower install'
}

export const updateCopyToClipboardButton = {
  fromPath: (preferredPackageManager: availablePackageManagers): void => {
    updateCopyToClipboardButtonHandler(
      preferredPackageManager,
      ({ command }) => handleReplaceCmdText.fromPath(
        command
      )
    )
  },
  fromCmdButton: (preferredPackageManager: availablePackageManagers) => {
    updateCopyToClipboardButtonHandler(
      preferredPackageManager,
      ({ command, packageNameOrDevDep, packageNameOrNull }) => {
        handleReplaceCmdText.fromCmdButton(
          command,
          packageNameOrDevDep,
          packageNameOrNull
        )
      }
    )
  }
}

interface UpdateCopyToClipboardButtonCbParams {
  el: Element
  packageNameOrDevDep: string
  packageNameOrNull: string | null
  command: string
}

function updateCopyToClipboardButtonHandler (preferredPackageManager: availablePackageManagers, cb: (params: UpdateCopyToClipboardButtonCbParams) => void): void {
  const { installButton } = getInstallButton()

  // npm i -D packagename
  // npm i packagename
  const [
    prefix,
    _install,
    // -D or packagename
    packageNameOrDevDep,
    // packagename or nothing
    packageNameOrNull
  ] = installButton.splitElText

  contentLogger('info', JSON.stringify({
    prefix,
    _install,
    packageNameOrDevDep,
    packageNameOrNull: packageNameOrNull != null ? packageNameOrNull : ''
  }))

  const command = PACKAGE_MANAGERS[preferredPackageManager]
  if (typeof command !== 'string') {
    throw new Error(`Unknown install prefix: ${preferredPackageManager}`)
  }

  if (!['yarn', 'npm', 'pnpm', 'bower'].includes(prefix)) {
    contentLogger('warn', `unknown install prefix: ${prefix as string}`)
    return
  }

  const res = { el: installButton.el, packageNameOrDevDep, packageNameOrNull, command }
  cb(res)
}
