import { contentLogger } from '../../utils'
import { handleWarningMessage } from './handleWarningMessage'
import { hasInstallCommandInReadme } from '../readme/hasInstallCommandInReadme'
import { getInstallButton } from './getInstallButton'

function handleReplaceTextFromClipboard(cmdPrefix: string, packageNameOrDevDep: string, packageNameOrNull: string | null) {
    // yarn add -D package
    const cmdGreaterThan3Words = packageNameOrNull != null
    const { installButton: { el } } = getInstallButton();
    const warning = document.querySelector('#dis-google-ext-warning')

    const isDevDependency = cmdGreaterThan3Words && hasInstallCommandInReadme(packageNameOrNull, true)
    const isRegularDependency = !cmdGreaterThan3Words && hasInstallCommandInReadme(packageNameOrDevDep, true)
    const possiblyDevDependency = !hasInstallCommandInReadme(packageNameOrDevDep, true) && !hasInstallCommandInReadme(packageNameOrDevDep, false)

    contentLogger('info', 'trying to replace text for npm readme')

    /**
         * @note
         * Bower does not have dev dependencies.
         * --
         * Hence the logic here.
         */
    if (cmdPrefix === 'bower install') {
        if (warning !== null) {
            contentLogger('info', 'warning found from prior transform, removing potential dev dep warning from ui')
            warning.remove()
        }

        if (cmdGreaterThan3Words) {
            contentLogger('info', 'was previously a dev dependency install so using 4th parameter')

            el.textContent = `${cmdPrefix} ${packageNameOrNull}`
            return
        }

        contentLogger('info', 'was previously a regular dependency install so using 3rd parameter')
        el.textContent = `${cmdPrefix} ${packageNameOrDevDep}`
        return
    }

    // hasn't been transformed - yarn add x, need to be dev dep.
    if (isRegularDependency) {
        contentLogger('info', 'hasn\'t been transformed - e.g yarn add x, transforming to dev dep')

        el.textContent = `${cmdPrefix} -D ${packageNameOrDevDep}`
        return
    }

    // has been transformed - yarn add -D x, and needs to be dev dep.
    if (isDevDependency) {
        contentLogger('info', 'has previously been transformed - e.g yarn add -D x, keeping as dev dep')

        el.textContent = `${cmdPrefix} -D ${packageNameOrNull}`
        return
    }

    // has been transformed - yarn add -D x, and no longer needs dev dep.
    if (cmdGreaterThan3Words && !hasInstallCommandInReadme(packageNameOrNull, true)) {
        contentLogger('info', 'has previously been transformed - e.g yarn add -D x, removing dev dep')

        el.textContent = `${cmdPrefix} ${packageNameOrNull}`
        return
    }

    // No readme reference so warn user about the
    // fact this could be a developer dependency.
    if (possiblyDevDependency && (warning === null)) {
        handleWarningMessage()
    }

    contentLogger('info', 'has not been transformed, and doesn\'t need to be a dev dep.')
    
    // has not been transformed, and doesn't need to be a dev dep.
    el.textContent = `${cmdPrefix} ${packageNameOrDevDep}`
}

function handleReplaceTextFromPath(cmdPrefix: string) {
    const { installButton: { el } } = getInstallButton();
    const warning = document.querySelector('#dis-google-ext-warning')

    const packageFromPath = window.location.pathname.split('/').slice(2, 4).join('/');

    contentLogger('info', `got package from path: ${packageFromPath}`)

    const containsDevDependency = hasInstallCommandInReadme(packageFromPath, true)
    const containsRegularDependency = hasInstallCommandInReadme(packageFromPath, false)
    const possiblyDevDependency = !containsDevDependency && !containsRegularDependency;


    if (containsDevDependency) {
        el.textContent = `${cmdPrefix} -D ${packageFromPath}`
        return;
    }

    el.textContent = `${cmdPrefix} ${packageFromPath}`

    if (possiblyDevDependency && (warning === null)) {
        handleWarningMessage()
    }
}

export const handleReplaceCmdText = {
    fromPath: handleReplaceTextFromPath,
    fromCmdButton: handleReplaceTextFromClipboard
}
