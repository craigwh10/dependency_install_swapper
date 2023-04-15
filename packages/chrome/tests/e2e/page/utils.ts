import type { Page } from 'puppeteer';

export const waitForElementToContainText = async (page: Page, selector: string, text: string) => {
    try {
        await page.waitForFunction(
            ({text, selector}) => {
              const element = document.querySelector(selector);
              return element && element.textContent?.includes(text);
            },
            {
                timeout: 9000,
            },
            {text, selector}
        );
    } catch (err) {
        throw new Error(`could not find ${text} in ${selector}, timeout after 6 seconds`)
    }
}