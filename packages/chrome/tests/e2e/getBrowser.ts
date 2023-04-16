import puppeteer from 'puppeteer';
import path from 'path';

export const getBrowser = async () => {
    const pathToExtension = path.join(process.cwd(), 'output');

    return puppeteer.launch({
        headless: process.env.NODE_ENV === "prod" ? 'new' : false,
        args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
        '--disable-features=DialMediaRouteProvider',
        '--window-size=5000x800'
        ],
        executablePath: process.env.NODE_ENV === 'prod' ?  "./chrome" : undefined
    });
}