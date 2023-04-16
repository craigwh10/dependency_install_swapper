import puppeteer from 'puppeteer';
import path from 'path';

export const getBrowser = async () => {
    const pathToExtension = path.join(process.cwd(), 'output');
    // const chromePath = path.join(__dirname, 'chrome.app');

    console.log('env', process.env.PUPPETEER_EXEC_PATH);
    return puppeteer.launch({
        headless: process.env.NODE_ENV === "prod" ? false : false,
        args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
        '--disable-features=DialMediaRouteProvider',
        '--window-size=5000x800',
        process.env.NODE_ENV === 'prod' ? '--no-sandbox' : ''
        ],
        executablePath: process.env.NODE_ENV === 'prod' ? process.env.PUPPETEER_EXEC_PATH : undefined,
    });
}