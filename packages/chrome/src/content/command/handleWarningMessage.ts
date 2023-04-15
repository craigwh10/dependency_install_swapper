import { getInstallButton } from './getInstallButton'

/**
 * Gets the install buttom element and then adds the warning to it after it.
 */
export const handleWarningMessage = (): void => {
  const { installButton, site } = getInstallButton()

  if (site === 'npm') {
    installButton.el.parentElement?.parentElement?.insertAdjacentHTML(
      'afterend',
      '<div id="dis-google-ext-warning" style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;"><b>Warning:</b><br><br/>No example install commands found in readme.<br/><br/>So this could potentially be a development dependency.</div>'
    )
  }

  if (site === 'yarn') {
    installButton.el.parentElement?.parentElement?.parentElement?.insertAdjacentHTML(
      'afterend',
      '<div id="dis-google-ext-warning" style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;"><b>Warning:</b><br><br/>No example install commands found in readme.<br/><br/>So this could potentially be a development dependency.</div>'
    )
  }
}
