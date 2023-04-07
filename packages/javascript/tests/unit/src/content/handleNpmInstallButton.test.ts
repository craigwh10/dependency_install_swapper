import { handleNpmInstallButton } from "../../../../src/content/handleNpmInstallButton";

import { contentLogger } from "../../../../src/utils";

jest.mock('../../../../src/utils');
const mockContentLogger = jest.mocked(contentLogger);

describe('content', () => {
    describe('given the npm install field exists on the page as an npm command', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                    <span role="button" tabindex="0" aria-label="Install, npm i cellular-automata-react">
                        npm i cellular-automata-react
                    </span>
                </code>
            `;
        })

        it('should set the text content as an npm command if that is the preferred package manager', () => {
            handleNpmInstallButton('npm');

            expect(document.body.textContent).toContain('npm i cellular-automata-react')
        })

        it('should set the text content as a yarn command if that is the preferred package manager', () => {
            handleNpmInstallButton('yarn');

            expect(document.body.textContent).toContain('yarn add cellular-automata-react')
        })
    })

    describe('given the npm install field exists on the page as an yarn command', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                    <span role="button" tabindex="0" aria-label="Install, npm i cellular-automata-react">
                        yarn add cellular-automata-react
                    </span>
                </code>
            `;
        })

        it('should set the text content as an npm command if that is the preferred package manager', () => {
            handleNpmInstallButton('npm');

            expect(document.body.textContent).toContain('npm i cellular-automata-react')
        })

        it('should set the text content as a yarn command if that is the preferred package manager', () => {
            handleNpmInstallButton('yarn');

            expect(document.body.textContent).toContain('yarn add cellular-automata-react')
        })
    })

    describe('given the npm install does not exist on the page', () => {
        beforeEach(() => {
            document.body.innerHTML = `
                <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                </code>
            `;
        })

        it('should not change the inner content and warn the client', () => {
            handleNpmInstallButton('yarn');

            expect(mockContentLogger).toBeCalledWith('warn', 'no installation button found on page');
        })
    })

})