import { availablePackageManagers } from "../storage";
import { contentLogger } from "../utils";
import { getInstallButton } from "./getInstallButton";
import { handleReplaceText } from "./handleReplaceCmdText";

export function handleInstallButton (preferredPackageManager: availablePackageManagers) {
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
            handleReplaceText(installButton.el, packageNameOrDevDep, packageNameOrNull, 'yarn add');
            return;
        case 'npm':
            handleReplaceText(installButton.el, packageNameOrDevDep, packageNameOrNull, 'npm i');
            return;
        case "pnpm":
            handleReplaceText(installButton.el, packageNameOrDevDep, packageNameOrNull, 'pnpm add');
            return;
        case "bower":
            handleReplaceText(installButton.el, packageNameOrDevDep, packageNameOrNull, 'bower install');
            return;
        default:
            return;
        }
}

