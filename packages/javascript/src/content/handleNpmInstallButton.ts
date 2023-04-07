import { availablePackageManagers } from "../storage";
import { contentLogger } from "../utils";

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
    
    contentLogger('info', JSON.stringify({prefix, _install, packageName}));

    if (!['yarn', 'npm', 'pnpm'].includes(prefix)) {
        contentLogger('warn', `unknown install prefix: ${prefix}`)
        return;
    }

    if (preferredPackageManager === 'yarn') {
        installButton.textContent = `yarn add ${packageName}`;

        return;
    }

    if (preferredPackageManager === 'npm') {
        installButton.textContent = `npm i ${packageName}`;

        return;
    }

    if (preferredPackageManager === 'pnpm') {
        installButton.textContent = `pnpm add ${packageName}`;

        return;
    }
}