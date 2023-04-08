import { handleNpmInstallButton } from "@js/src/content/handleNpmInstallButton";
import { hasDevDepInReadme } from "@js/src/content/hasDevDepInReadme";
import { availablePackageManagers } from "@js/src/storage";

import { contentLogger } from "@js/src/utils";

jest.mock('@js/src/utils');
const mockContentLogger = jest.mocked(contentLogger);
jest.mock('@js/src/content/hasDevDepInReadme');
const mockHasDevDepInReadme = jest.mocked(hasDevDepInReadme);

describe('content', () => {
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
        ])('for $initialCmd with pkg manager $preferredPkgManager it should return $expectedResultingTextContent', ({
            initialCmd,
            preferredPkgManager,
            expectedResultingTextContent,
            hasDevDep
        }) => {
            mockHasDevDepInReadme.mockReturnValue(hasDevDep);
            document.body.innerHTML = `
                <code class="flex-auto truncate db" title="Copy Command to Clipboard">
                    <span role="button" tabindex="0" aria-label="Install, ${initialCmd}">
                        ${initialCmd}
                    </span>
                </code>
            `;

            handleNpmInstallButton(preferredPkgManager);

            expect(document.body.textContent).toContain(expectedResultingTextContent)
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
    ]
}