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

    contentLogger('info', JSON.stringify({prefix, _install, packageNameOrDevDep, packageNameOrNull}));

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

    // hasn't been transformed - yarn add x
    const IS_NON_DEV_DEP_CMD = hasDevDepInReadme(packageNameOrDevDep) && !packageNameOrNull; 
    if (IS_NON_DEV_DEP_CMD) {
        installButton.textContent = `${cmdPrefix} -D ${packageNameOrDevDep}`;
        return;
    }

    // has been transformed - yarn add -D x
    const IS_DEV_DEP_CMD = packageNameOrNull && hasDevDepInReadme(packageNameOrNull);
    if (IS_DEV_DEP_CMD) {
        installButton.textContent = `${cmdPrefix} -D ${packageNameOrNull}`;
        return;
    } 

    installButton.textContent = `${cmdPrefix} ${packageNameOrDevDep}`;
}