import { contentLogger } from "../utils";

export function hasDevDepInReadme (packageOfInterest: string) {
    const readme = document.querySelector('article');

    if (!readme) {
        contentLogger('warn', 'could not find readme section on page');

        return false;
    }
    contentLogger('info', 'found readme section on page');

    const preElements = readme.querySelectorAll('pre');

    const devDepScripts = Array.from(preElements).map(({textContent}) => {
        if (!textContent) return false;
        if (textContent.match(stringContainsTheseWords('--save-dev', packageOfInterest))) return true;
        if (textContent.match(stringContainsTheseWords('-D', packageOfInterest))) return true;
        if (textContent.match(stringContainsTheseWords('--dev', packageOfInterest))) return true;
        return false;
    })
    
    return devDepScripts.includes(true);
}

const stringContainsTheseWords = (suffix: '-D' | '--save-dev' | '--dev', packageOfInterest: string) => {
    const string = `(?=.*${suffix})(?=.*${packageOfInterest})`;
    return new RegExp(string, 'g');
};