import puppeteer from 'puppeteer';
import path from 'path';

export const getBrowser = async () => {
    const pathToExtension = path.join(process.cwd(), 'output');

    return puppeteer.launch({
        headless: process.env.NODE_ENV === 'prod' ? 'new' : false,
        timeout: 12000,
        args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
        process.env.NODE_ENV === 'prod' ? '--no-sandbox' : '',
        process.env.NODE_ENV === 'prod' ? '--disable-setuid-sandbox' : '',
        process.env.NODE_ENV === 'prod' ? '--enable-features=NetworkService' : '',
        ''
        ],
        defaultViewport: null,
        executablePath: process.env.CHROME_PATH,
    });
}