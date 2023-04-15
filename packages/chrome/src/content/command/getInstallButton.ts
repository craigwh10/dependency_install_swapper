import { availablePackageManagers } from '@chrome/src/storage'
import { contentLogger } from '../../utils'

type splitElReturn = [
  availablePackageManagers,
  string,
  string,
  string | null
]

interface GetInstallButton {
  site: 'yarn' | 'npm'
  installButton: {
    el: Element
    elText: string
    splitElText: splitElReturn
  }
}

export const getInstallButton = (): GetInstallButton => {
  const webUrl = window.location.href

  if (webUrl.includes('yarnpkg.com')) {
    return {
      site: 'yarn',
      installButton: validateInstallButtonExistence(
        document.querySelector('section > code > span')
      )
    }
  }

  if (webUrl.includes('npmjs.com')) {
    return {
      site: 'npm',
      installButton: validateInstallButtonExistence(
        document.querySelector('span[role="button"]')
      )
    }
  }

  throw new Error('content script running getInstallButton on unsupported url')
}

interface ValidateInstallButtonReturn {
  el: Element
  elText: string
  splitElText: splitElReturn
}

function validateInstallButtonExistence (installButton: Element | null): ValidateInstallButtonReturn {
  if (installButton === null) {
    contentLogger('warn', 'no installation button found on page')
    throw new Error('content script could not find the install command on page')
  }

  const npmInstallText = installButton?.textContent

  if (typeof npmInstallText !== 'string') {
    contentLogger('warn', 'page has no install text')
    throw new Error('content script could not find the install command text on page')
  }

  contentLogger('info', `content on page: ${npmInstallText}`)

  return {
    el: installButton,
    elText: npmInstallText.trim(),
    splitElText: npmInstallText.trim().split(' ') as splitElReturn
  }
}
