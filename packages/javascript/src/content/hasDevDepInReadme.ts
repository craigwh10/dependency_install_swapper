import { availablePackageManagers } from "../storage";

export function hasDevDepInReadme (packageOfInterest: string) {
    const readme = document.querySelector('article');

    if (!readme) return false;

    const textContent = readme.innerHTML;

    if (textContent.includes(`--save-dev ${packageOfInterest}`)) return true;
    if (textContent.includes(`-D ${packageOfInterest}`)) return true;
    if (textContent.includes(`--dev ${packageOfInterest}`)) return true;
    
    return false;
}