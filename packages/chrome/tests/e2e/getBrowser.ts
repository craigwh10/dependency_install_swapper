import puppeteer from 'puppeteer';
import path from 'path';

export const getBrowser = async () => {
    const pathToExtension = path.join(process.cwd(), 'output');
    console.log('env', process.env.CHROME_PATH);
    console.log('nodeenv', process.env.NODE_ENV);
    return puppeteer.launch({
        headless: process.env.NODE_ENV === 'prod' ? 'new' : false,
        timeout: 120000,
        args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
        // '--disable-features=DialMediaRouteProvider',
        process.env.NODE_ENV === 'prod' ? '--no-sandbox' : '',
        process.env.NODE_ENV === 'prod' ? '--disable-setuid-sandbox' : ''
        ],
        defaultViewport: {
            width: 1280,
            height: 800,
          },
        slowMo: 100,
        executablePath: process.env.NODE_ENV === 'prod' ? process.env.CHROME_PATH : undefined,
    });
}