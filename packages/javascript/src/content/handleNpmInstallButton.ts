import { availablePackageManagers } from "../storage";
import { contentLogger } from "../utils";
import { hasInstallCommandsInReadme } from "./hasInstallCommandsInReadme";

export function handleNpmInstallButton (preferredPackageManager: availablePackageManagers) {
    const installButton = document.querySelector('span[role="button"]');

    if (!installButton) {
        contentLogger('warn', 'no installation button found on page')
        return;
    }

    const npmInstallText = installButton.textContent;

    if (!npmInstallText) {
        contentLogger('warn', 'page has no install text');
        return;
    }

    contentLogger('info', `content on page: ${npmInstallText.trim()}`)

    // npm i -D packagename
    // npm i packagename
    const [
        prefix,
        _install,
        // -D or packagename
        packageNameOrDevDep,
        // packagename or nothing
        packageNameOrNull
    ] = npmInstallText.trim().split(' ') as [
        string,
        string,
        string,
        string | null
    ];

    contentLogger('info', JSON.stringify({
        prefix,
        _install,
        packageNameOrDevDep,
        packageNameOrNull: packageNameOrNull ? packageNameOrNull : ''
    }));

    if (!['yarn', 'npm', 'pnpm', 'bower'].includes(prefix)) {
        contentLogger('warn', `unknown install prefix: ${prefix}`)
        return;
    }

    switch (preferredPackageManager) {
        case 'yarn':
            handleReplaceText(installButton, packageNameOrDevDep, packageNameOrNull, 'yarn add');
            return;
        case 'npm':
            handleReplaceText(installButton, packageNameOrDevDep, packageNameOrNull, 'npm i');
            return;
        case "pnpm":
            handleReplaceText(installButton, packageNameOrDevDep, packageNameOrNull, 'pnpm add');
            return;
        case "bower":
            handleReplaceText(installButton, packageNameOrDevDep, packageNameOrNull, 'bower install');
            return;
        default:
            return;
        }
}

function handleReplaceText (installButton: Element, packageNameOrDevDep: string, packageNameOrNull: string | null, cmdPrefix: string) {
    contentLogger('info', `trying to replace text for npm readme`)

    /**
     * @note
     * Bower does not have dev dependencies.
     * --
     * Hence the logic here.
     */
    if (cmdPrefix === 'bower install') {
        const warning = document.querySelector('#dis-google-ext-warning')
        if (warning) {
            contentLogger('info', `warning found from prior transform, removing potential dev dep warning from ui`)
            warning.remove();
        }

        if (packageNameOrNull) {
            contentLogger('info', `was previously a dev dependency install so using 4th parameter`)

            installButton.textContent = `${cmdPrefix} ${packageNameOrNull}`;
            return;
        }

        contentLogger('info', `was previously a regular dependency install so using 3rd parameter`)
        installButton.textContent = `${cmdPrefix} ${packageNameOrDevDep}`;
        return;
    }

    // hasn't been transformed - yarn add x, need to be dev dep.
    const IS_NON_DEV_DEP_CMD = hasInstallCommandsInReadme(packageNameOrDevDep, true) && !packageNameOrNull; 
    if (IS_NON_DEV_DEP_CMD) {
        contentLogger('info', `hasn't been transformed - e.g yarn add x, transforming to dev dep`)

        installButton.textContent = `${cmdPrefix} -D ${packageNameOrDevDep}`;
        return;
    }

    // has been transformed - yarn add -D x, and needs to be dev dep.
    if (packageNameOrNull && hasInstallCommandsInReadme(packageNameOrNull, true)) {
        contentLogger('info', `has previously been transformed - e.g yarn add -D x, keeping as dev dep`)

        installButton.textContent = `${cmdPrefix} -D ${packageNameOrNull}`;
        return;
    } 

    // has been transformed - yarn add -D x, and no longer needs dev dep.
    if (packageNameOrNull && !hasInstallCommandsInReadme(packageNameOrNull, true)) {
        contentLogger('info', `has previously been transformed - e.g yarn add -D x, removing dev dep`)

        installButton.textContent = `${cmdPrefix} ${packageNameOrNull}`;
        return;
    }

    // No readme reference so warn user about the
    // fact this could be a developer dependency.
    if (!hasInstallCommandsInReadme(packageNameOrDevDep, true) && !hasInstallCommandsInReadme(packageNameOrDevDep, false) && !document.querySelector('#dis-google-ext-warning')) {
        installButton.parentElement?.parentElement?.insertAdjacentHTML(
            'afterend',
            '<div id="dis-google-ext-warning" style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;"><b>Warning:</b><br><br/>No example install commands found in readme.<br/><br/>So this could potentially be a development dependency.</div>'
        )
    }


    contentLogger('info', `has not been transformed, and doesn't need to be a dev dep.`)
    // has not been transformed, and doesn't need to be a dev dep.
    installButton.textContent = `${cmdPrefix} ${packageNameOrDevDep}`;
};