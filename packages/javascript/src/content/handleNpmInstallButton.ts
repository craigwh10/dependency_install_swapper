import { availablePackageManagers } from "../storage";
import { contentLogger } from "../utils";
import { hasDevDepInReadme } from "./hasDevDepInReadme";

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

    if (!['yarn', 'npm', 'pnpm'].includes(prefix)) {
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
        default:
            return;
        }
}

function handleReplaceText (installButton: Element, packageNameOrDevDep: string, packageNameOrNull: string | null, cmdPrefix: string) {
    contentLogger('info', `trying to replace text for ${JSON.stringify({readMeHasDevDep: hasDevDepInReadme(packageNameOrDevDep),packageNameOrDevDep, packageNameOrNull, cmdPrefix})}`)

    // hasn't been transformed - yarn add x, need to be dev dep.
    const IS_NON_DEV_DEP_CMD = hasDevDepInReadme(packageNameOrDevDep) && !packageNameOrNull; 
    if (IS_NON_DEV_DEP_CMD) {
        contentLogger('info', `hasn't been transformed - e.g yarn add x, transforming to dev dep`)

        installButton.textContent = `${cmdPrefix} -D ${packageNameOrDevDep}`;
        return;
    }

    // has been transformed - yarn add -D x, and needs to be dev dep.
    if (packageNameOrNull && hasDevDepInReadme(packageNameOrNull)) {
        contentLogger('info', `has previously been transformed - e.g yarn add -D x, keeping as dev dep`)

        installButton.textContent = `${cmdPrefix} -D ${packageNameOrNull}`;
        return;
    } 

    // has been transformed - yarn add -D x, and no longer needs dev dep.
    if (packageNameOrNull && !hasDevDepInReadme(packageNameOrNull)) {
        contentLogger('info', `has previously been transformed - e.g yarn add -D x, removing dev dep`)

        installButton.textContent = `${cmdPrefix} ${packageNameOrNull}`;
        return;
    }

    // No readme reference so warn user about the
    // fact this could be a developer dependency.
    if (!hasDevDepInReadme(packageNameOrDevDep)) {
        installButton!.parentElement!.parentElement!.insertAdjacentHTML(
            'afterend',
            '<div style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;"><b>Warning:</b><br><br/>No example install commands found in readme.<br/><br/>So this could potentially be a development dependency.</div>'
        )
    }


    contentLogger('info', `has not been transformed, and doesn't need to be a dev dep.`)
    // has not been transformed, and doesn't need to be a dev dep.
    installButton.textContent = `${cmdPrefix} ${packageNameOrDevDep}`;
};