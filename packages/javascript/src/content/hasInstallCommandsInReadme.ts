import { contentLogger } from "../utils";
import { checkReadmeContainsCommand } from "./checkReadmeContainsCommand";

export function hasInstallCommandsInReadme (packageOfInterest: string, checkDev: boolean) {
    const readme = document.querySelector('article');

    if (!readme) {
        contentLogger('warn', 'could not find readme section on page');

        return false;
    }
    contentLogger('info', 'found readme section on page');

    const preElements = readme.querySelectorAll('pre');

    const devDepScripts = Array.from(preElements).map(({textContent}) => {
        if (!textContent) return false;
        if (checkReadmeContainsCommand(textContent, packageOfInterest, checkDev)) return true;
        return false;
    })
    
    return devDepScripts.includes(true);
}