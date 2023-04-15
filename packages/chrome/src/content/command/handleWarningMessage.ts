import { getInstallButton } from './getInstallButton'

/**
 * Gets the install buttom element and then adds the warning to it after it.
 */
export const handleWarningMessage = (): void => {
  const { installButton, site } = getInstallButton()

  if (site === 'npm') {
    installButton.el.parentElement?.parentElement?.insertAdjacentHTML(
      'afterend',
      `
      <div id="dis-google-ext-warning" style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;">
          <strong>Warning:</strong><br><br>
          This package doesn't have instructions for installing it. 
          <br /><br />
          To learn how to deduce whether it's for development or production use, check out <a href="https://stackoverflow.com/a/22004559" target="_blank" rel="noopener" aria-label="Resource on Stack Overflow that explains how to distinguish development and production dependencies">this resource</a> that explains how to tell the difference between the two types of dependencies.
      </div>
      `
    )
  }

  if (site === 'yarn') {
    installButton.el.parentElement?.parentElement?.parentElement?.insertAdjacentHTML(
      'afterend',
      `
      <div id="dis-google-ext-warning" style="margin-bottom: 0.5em; color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;">
          <strong>Warning:</strong><br><br>
          This package doesn't have instructions for installing it. 
          <br /><br />
          To learn how to deduce whether it's for development or production use, check out <a href="https://stackoverflow.com/a/22004559" target="_blank" rel="noopener" aria-label="Resource on Stack Overflow that explains how to distinguish development and production dependencies">this resource</a> that explains how to tell the difference between the two types of dependencies.
      </div>
      `
    )
  }
}
