import { availablePackageManagers } from "../storage";
import { contentLogger } from "../utils";
import { getInstallButton } from "./getInstallButton";
import { handleReplaceText } from "./handleReplaceCmdText";

const PACKAGE_MANAGERS: Record<availablePackageManagers, string> = {
    yarn: 'yarn add',
    npm: 'npm i',
    pnpm: 'pnpm add',
    bower: 'bower install'
};

export function updateCopyToClipboardButton (preferredPackageManager: availablePackageManagers) {
    const {installButton } = getInstallButton();

    // npm i -D packagename
    // npm i packagename
    const [
        prefix,
        _install,
        // -D or packagename
        packageNameOrDevDep,
        // packagename or nothing
        packageNameOrNull
    ] = installButton.elText.split(' ') as [
        availablePackageManagers,
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

    const command = PACKAGE_MANAGERS[preferredPackageManager];
    if (!command) {
      throw new Error(`Unknown install prefix: ${preferredPackageManager}`);
    }

    if (!['yarn', 'npm', 'pnpm', 'bower'].includes(prefix)) {
        contentLogger('warn', `unknown install prefix: ${prefix}`)
        return;
    }

    handleReplaceText(installButton.el, packageNameOrDevDep, packageNameOrNull, command);

}

