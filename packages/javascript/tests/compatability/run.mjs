import puppeteer from 'puppeteer';
import path from 'path';

/**
 * Resource:
 * - https://www.youtube.com/watch?v=l6cZ6zs7dTg&ab_channel=RustyZone (really good)
 */

(async () => {
  const pathToExtension = path.join(process.cwd(), 'output');

  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });

await browser.newPage();

const extensionName = 'dependency_install_swapper' // For instance, 'GreetMe'

const targets = await browser.targets();
const extensionTarget = targets.find(({ _targetInfo }) => {
    return _targetInfo?.title === extensionName && _targetInfo?.type === 'background_page';
});

const extensionUrl = extensionTarget._targetInfo.url || '';
const [,, extensionID] = extensionUrl.split('/');

const extensionPopupHtml = 'index.html'

const extensionPage = await browser.newPage();
await extensionPage.goto(`chrome-extension://${extensionID}/${extensionPopupHtml}`);

  await browser.close();
})();

