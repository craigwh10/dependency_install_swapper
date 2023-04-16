import puppeteer from 'puppeteer';
import path from 'path';

export const getBrowser = async () => {
    const pathToExtension = path.join(process.cwd(), 'output');
    console.log('env', process.env.PUPPETEER_EXEC_PATH);

    return puppeteer.launch({
        headless: false,
        timeout: 90000,
        args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
        // '--disable-features=DialMediaRouteProvider',
        process.env.NODE_ENV === 'prod' ? '--no-sandbox' : ''
        ],
        executablePath: process.env.NODE_ENV === 'prod' ? process.env.PUPPETEER_EXEC_PATH : undefined,
    });
}