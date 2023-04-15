import { contentLogger } from '../../utils'
import { checkReadmeContainsCommand } from './checkReadmeContainsCommand'

export function hasInstallCommandInReadme (packageOfInterest: string, checkDev: boolean): boolean {
  const readme = document.querySelector('article')

  if (readme == null) {
    contentLogger('warn', 'could not find readme section on page')

    return false
  }
  contentLogger('info', 'found readme section on page')

  const preElements = readme.querySelectorAll('pre')

  return Array.from(preElements).some(({ textContent }) => {
    if (textContent == null) return false
    return checkReadmeContainsCommand(textContent, packageOfInterest, checkDev)
  })
}
