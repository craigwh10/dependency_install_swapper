import puppeteer from 'puppeteer';
import path from 'path';

export const getBrowser = async (withNoExtension: boolean = false) => {
    const pathToExtension = path.join(process.cwd(), 'output');

    const extensionFlag = withNoExtension ? [] : [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
    ]

    return puppeteer.launch({
        headless: process.env.NODE_ENV === 'prod' ? 'new' : false,
        timeout: 12000,
        args: [
        ...extensionFlag,
        process.env.NODE_ENV === 'prod' ? '--no-sandbox' : '',
        process.env.NODE_ENV === 'prod' ? '--disable-setuid-sandbox' : '',
        process.env.NODE_ENV === 'prod' ? '--enable-features=NetworkService' : '',
        ''
        ],
        // Do not set viewports, messes with selectors.
        defaultViewport: null,
        // Comes from action on creating chrome binary
        executablePath: process.env.CHROME_PATH,
    });
}