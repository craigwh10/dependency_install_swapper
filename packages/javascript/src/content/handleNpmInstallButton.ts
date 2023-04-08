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

    const [ prefix, _install, packageName ] = npmInstallText.trim().split(' ');
    
    contentLogger('warn', JSON.stringify({prefix, _install, packageName}));

    if (preferredPackageManager === 'yarn' && prefix === 'npm') {
        if (hasDevDepInReadme(packageName)) {
            installButton.textContent = `yarn add -D ${packageName}`;
        } 

        installButton.textContent = `yarn add ${packageName}`;

        return;
    }

    if (preferredPackageManager === 'npm' && prefix === 'yarn') {
        if (hasDevDepInReadme(packageName)) {
            installButton.textContent = `npm add -D ${packageName}`;
        } 

        installButton.textContent = `npm i ${packageName}`;

        return;
    }

    contentLogger('warn', 'unknown install prefix')
    return;
}