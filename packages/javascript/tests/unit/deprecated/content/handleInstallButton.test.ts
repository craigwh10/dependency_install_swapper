import { handleInstallButton } from "@js/src/content/updateCopyToClipboardButton";
import { hasInstallCommandsInReadme } from "@js/src/content/hasInstallCommandsInReadme";
import { handleWarningMessage } from "@js/src/content/handleWarningMessage";
import { availablePackageManagers } from "@js/src/storage";

import { contentLogger } from "@js/src/utils";

jest.mock('@js/src/utils');
const mockContentLogger = jest.mocked(contentLogger);
jest.mock('@js/src/content/hasInstallCommandsInReadme');
const mockHasInstallCommandsInReadme = jest.mocked(hasInstallCommandsInReadme);
jest.mock('@js/src/content/handleWarningMessage');
const mockHandleWarningMessage = jest.mocked(handleWarningMessage);

// @NOTE: Not mocking getInstallButton rather mocking window.location.href
// @REASON: More rich test that are closer to the behaviour
// @CAVEAT: getInstallButton still has good coverage

describe('content', () => {
    describe('for npmjs.com', () => {

        describe('given the install field exists and there is no reference of dev dep in readme', () => {
            it('should not trigger handleWarningMessage when error is not there', () => {
                mockHasInstallCommandsInReadme.mockReturnValue(false);
    
                document.body.innerHTML = `
                    <div>
                        <div>
                            <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                                <span role="button" tabindex="0" aria-label="Install, yarn add test">
                                    yarn add test
                                </span>
                            </code>
                        </div>
                    </div>
                `;
    
                handleInstallButton('yarn');
    
                expect(document.body.textContent).toContain('yarn add test');
                expect(mockHandleWarningMessage).not.toBeCalled();
            })
            it('should not show a warning if readme does not contain a reference to a regular install command for package', () => {
                mockHasInstallCommandsInReadme
                .mockReturnValueOnce(false) // check for dev command false
                .mockReturnValueOnce(true); // check for regular command true
    
                document.body.innerHTML = `
                    <div>
                        <div>
                            <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                                <span role="button" tabindex="0" aria-label="Install, yarn add test">
                                    yarn add test
                                </span>
                            </code>
                        </div>
                    </div>
                `;
    
                handleInstallButton('yarn');
    
                expect(document.body.textContent).toContain('yarn add test');
                expect(mockHandleWarningMessage).not.toBeCalled();
            })
            it('if the warning already exists dont add it again', () => {
                document.body.innerHTML = `
                    <div>
                        <div>
                            <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                                <span role="button" tabindex="0" aria-label="Install, yarn add test">
                                    yarn add test
                                </span>
                            </code>
                            <div id="dis-google-ext-warning" style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;">
                                <b>Warning:</b><br><br/>No example install commands found in readme.<br/><br/>So this could potentially be a development dependency.
                            </div>
                        </div>
                    </div>
                `;
    
                handleInstallButton('yarn');
    
                expect(document.body.textContent).toContain('yarn add test');
                expect(mockHandleWarningMessage).toBeCalled();
            })
        })
        describe('given the install field exists with varying package managers', () => {
            it.each([
                // yarn
                ...testCaseGroup('yarn add cellular-automata-react', false),
                ...testCaseGroup('yarn add cellular-automata-react', true),
                ...testCaseGroup('yarn add -D cellular-automata-react', true),
                ...testCaseGroup('yarn add -D cellular-automata-react', false),
                // npm
                ...testCaseGroup('npm i cellular-automata-react', false),
                ...testCaseGroup('npm i cellular-automata-react', true),
                ...testCaseGroup('npm i -D cellular-automata-react', true),
                ...testCaseGroup('npm i -D cellular-automata-react', false),
                // pnpm
                ...testCaseGroup('pnpm add cellular-automata-react', false),
                ...testCaseGroup('pnpm add cellular-automata-react', true),
                ...testCaseGroup('pnpm add -D cellular-automata-react', true),
                ...testCaseGroup('pnpm add -D cellular-automata-react', false),
                // bower
                ...testCaseGroup('bower install cellular-automata-react', false),
            ])('for $initialCmd with pkg manager $preferredPkgManager it should return $expectedResultingTextContent', ({
                initialCmd,
                preferredPkgManager,
                expectedResultingTextContent,
                hasDevDep
            }) => {
                mockHasInstallCommandsInReadme.mockReturnValue(hasDevDep);
                document.body.innerHTML = `
                    <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                        <span role="button" tabindex="0" aria-label="Install, ${initialCmd}">
                            ${initialCmd}
                        </span>
                    </code>
                `;
    
                handleInstallButton(preferredPkgManager);
    
                expect(document.body.textContent).toContain(expectedResultingTextContent)
            })
        })
    
        describe('given a bower install command is provided', () => {
            it('should not show the dev dependency warning even when readme contains dev commands', () => {
                document.body.innerHTML = `
                <div>
                    <div>
                        <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                            <span role="button" tabindex="0" aria-label="Install, bower install cellular-automata-react">
                                bower install cellular-automata-react
                            </span>
                        </code>
                    </div>
                </div>
            `;
                
                mockHasInstallCommandsInReadme.mockReturnValue(true);
    
                handleInstallButton('bower');
    
                expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(0);
            })

            it('should remove dev warning if one exists on it', () => {
                document.body.innerHTML = `
                <div>
                    <div>
                        <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                            <span role="button" tabindex="0" aria-label="Install, bower install cellular-automata-react">
                                bower install cellular-automata-react
                            </span>
                        </code>
                        <div id="dis-google-ext-warning" style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;">
                            <b>Warning:</b><br><br/>No example install commands found in readme.<br/><br/>So this could potentially be a development dependency.
                        </div>
                    </div>
                </div>
            `;
                
                mockHasInstallCommandsInReadme.mockReturnValue(true);
    
                handleInstallButton('bower');
    
                expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(0);
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
                handleInstallButton('yarn');
    
                expect(mockContentLogger).toBeCalledWith('warn', 'no installation button found on page');
            })
        })
    })

    describe('for yarnpkg.com', () => {
        describe('given the install field exists and there is no reference of dev dep in readme', () => {
            it('should show a warning that this could still be a dev dependency', () => {
                mockHasInstallCommandsInReadme.mockReturnValue(false);
    
                document.body.innerHTML = `
                    <div>
                        <div>
                            <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                                <span role="button" tabindex="0" aria-label="Install, yarn add test">
                                    yarn add test
                                </span>
                            </code>
                        </div>
                    </div>
                `;
    
                handleInstallButton('yarn');
    
                expect(document.body.textContent).toContain('yarn add test');
                expect(document.body.querySelector('b')?.textContent).toContain('Warning:');
                expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(1);
            })
            it('should not show a warning if readme does not contain a reference to a regular install command for package', () => {
                mockHasInstallCommandsInReadme
                .mockReturnValueOnce(false) // check for dev command false
                .mockReturnValueOnce(true); // check for regular command true
    
                document.body.innerHTML = `
                    <div>
                        <div>
                            <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                                <span role="button" tabindex="0" aria-label="Install, yarn add test">
                                    yarn add test
                                </span>
                            </code>
                        </div>
                    </div>
                `;
    
                handleInstallButton('yarn');
    
                expect(document.body.textContent).toContain('yarn add test');
                expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(0);
            })
            it('if the warning already exists dont add it again', () => {
                document.body.innerHTML = `
                    <div>
                        <div>
                            <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                                <span role="button" tabindex="0" aria-label="Install, yarn add test">
                                    yarn add test
                                </span>
                            </code>
                            <div id="dis-google-ext-warning" style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;">
                                <b>Warning:</b><br><br/>No example install commands found in readme.<br/><br/>So this could potentially be a development dependency.
                            </div>
                        </div>
                    </div>
                `;
    
                handleInstallButton('yarn');
    
                expect(document.body.textContent).toContain('yarn add test');
                expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(1);
            })
        })
        describe('given the install field exists with varying package managers', () => {
            it.each([
                // yarn
                ...testCaseGroup('yarn add cellular-automata-react', false),
                ...testCaseGroup('yarn add cellular-automata-react', true),
                ...testCaseGroup('yarn add -D cellular-automata-react', true),
                ...testCaseGroup('yarn add -D cellular-automata-react', false),
                // npm
                ...testCaseGroup('npm i cellular-automata-react', false),
                ...testCaseGroup('npm i cellular-automata-react', true),
                ...testCaseGroup('npm i -D cellular-automata-react', true),
                ...testCaseGroup('npm i -D cellular-automata-react', false),
                // pnpm
                ...testCaseGroup('pnpm add cellular-automata-react', false),
                ...testCaseGroup('pnpm add cellular-automata-react', true),
                ...testCaseGroup('pnpm add -D cellular-automata-react', true),
                ...testCaseGroup('pnpm add -D cellular-automata-react', false),
                // bower
                ...testCaseGroup('bower install cellular-automata-react', false),
            ])('for $initialCmd with pkg manager $preferredPkgManager it should return $expectedResultingTextContent', ({
                initialCmd,
                preferredPkgManager,
                expectedResultingTextContent,
                hasDevDep
            }) => {
                mockHasInstallCommandsInReadme.mockReturnValue(hasDevDep);
                document.body.innerHTML = `
                    <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                        <span role="button" tabindex="0" aria-label="Install, ${initialCmd}">
                            ${initialCmd}
                        </span>
                    </code>
                `;
    
                handleInstallButton(preferredPkgManager);
    
                expect(document.body.textContent).toContain(expectedResultingTextContent)
            })
        })
    
        describe('given a bower install command is provided', () => {
            it('should not show the dev dependency warning even when readme contains dev commands', () => {
                document.body.innerHTML = `
                <div>
                    <div>
                        <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                            <span role="button" tabindex="0" aria-label="Install, bower install cellular-automata-react">
                                bower install cellular-automata-react
                            </span>
                        </code>
                    </div>
                </div>
            `;
                
                mockHasInstallCommandsInReadme.mockReturnValue(true);
    
                handleInstallButton('bower');
    
                expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(0);
            })
    
            it('should remove dev warning if one exists on it', () => {
                document.body.innerHTML = `
                <div>
                    <div>
                        <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                            <span role="button" tabindex="0" aria-label="Install, bower install cellular-automata-react">
                                bower install cellular-automata-react
                            </span>
                        </code>
                        <div id="dis-google-ext-warning" style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;">
                            <b>Warning:</b><br><br/>No example install commands found in readme.<br/><br/>So this could potentially be a development dependency.
                        </div>
                    </div>
                </div>
            `;
                
                mockHasInstallCommandsInReadme.mockReturnValue(true);
    
                handleInstallButton('bower');
    
                expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(0);
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
                handleInstallButton('yarn');
    
                expect(mockContentLogger).toBeCalledWith('warn', 'no installation button found on page');
            })
        })
    })
})

function testCase (preferredPkgManager: availablePackageManagers, initialCmd: string, expectedResultingTextContent: string, hasDevDep: boolean) {
    return {
        initialCmd,
        preferredPkgManager,
        expectedResultingTextContent,
        hasDevDep
    }
}

function testCaseGroup (inputCmd: string, hasDevDep: boolean) {
    return [
        testCase('npm', inputCmd, `npm ${hasDevDep ? 'i -D' : 'i'} cellular-automata-react`, hasDevDep),
        testCase('yarn', inputCmd, `yarn ${hasDevDep ? 'add -D' : 'add'} cellular-automata-react`, hasDevDep),
        testCase('pnpm', inputCmd, `pnpm ${hasDevDep ? 'add -D' : 'add'} cellular-automata-react`, hasDevDep),
        testCase('bower', inputCmd, `bower install cellular-automata-react`, hasDevDep)
    ]
}