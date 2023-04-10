import { hasInstallCommandsInReadme } from "@js/src/content/hasInstallCommandsInReadme";

import { eslintplugin } from "@js/tests/mocks/npm/readmes/eslint-plugin";
import { prosemirror } from "@js/tests/mocks/npm/readmes/prosemirror";
import { react } from "@js/tests/mocks/npm/readmes/react";
import { reacttestinglibrary } from "@js/tests/mocks/npm/readmes/react-testing-library";
import { tsnode } from "@js/tests/mocks/npm/readmes/tsnode";

describe('hasInstallCommandsInReadme', () => {
    it('should identify ts-node as a dev dependency', () => {
        document.body.innerHTML = tsnode;
        expect(hasInstallCommandsInReadme('ts-node', true)).toEqual(true);
    })

    it('should identify eslint-plugin-jest as a dev dependency', () => {
        document.body.innerHTML = eslintplugin;

        expect(hasInstallCommandsInReadme('eslint-plugin-jest', true)).toEqual(true);
    })

    it('should identify react as a normal dependency', () => {
        document.body.innerHTML = react;

        expect(hasInstallCommandsInReadme('react', true)).toEqual(false); 
    })

    it('should identify aditor as normal dependency', () => {
        document.body.innerHTML = prosemirror;

        expect(hasInstallCommandsInReadme('prosemirror', true)).toEqual(false); 
    })

    it('should identify react testing library as a dev dependency', () => {
        document.body.innerHTML = reacttestinglibrary;

        expect(hasInstallCommandsInReadme('@testing-library/react', true)).toEqual(true); 
    })

    it.each([
        // yarn
        {
            packageOfInterest: 'eslint',
            cmd: 'yarn add --dev eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'yarn add --dev eslint'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'yarn add -D eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'yarn add -D eslint-plugin-jest eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'yarn add -D eslint'
        },
        // npm
        // / i
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i -D eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i -D eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'npm i --save-dev eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i --save-dev eslint-plugin-jest eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i --save-dev eslint'
        },
        //// install
        {
            packageOfInterest: 'eslint',
            cmd: 'npm install -D eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm install -D eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'npm install --save-dev eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm install --save-dev eslint-plugin-jest eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm install --save-dev eslint'
        },
        // pnpm
        {
            packageOfInterest: 'eslint',
            cmd: 'pnpm add -D eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'pnpm add -D eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'pnpm add --dev eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'pnpm add --dev eslint-plugin-jest eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'pnpm add --dev eslint'
        }
    ])('[checking if is dev install] should handle $cmd case', ({cmd, packageOfInterest}) => {
        document.body.innerHTML = `
            <article>
                <div class="highlight highlight-source-shell">
                    <pre>${cmd}</pre>
                </div>
            </article>
        `;

        expect(hasInstallCommandsInReadme(packageOfInterest, true)).toEqual(true);
        expect(hasInstallCommandsInReadme(packageOfInterest, false)).toEqual(false);
    }) 

    it.each([
        // yarn
        {
            packageOfInterest: 'eslint',
            cmd: 'yarn add eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'yarn add eslint'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'yarn add eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'yarn add eslint-plugin-jest eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'yarn add eslint'
        },
        // npm
        // / i
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'npm i eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i eslint-plugin-jest eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i eslint'
        },
        //// install
        {
            packageOfInterest: 'eslint',
            cmd: 'npm install eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm install eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'npm install eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm install eslint-plugin-jest eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm install eslint'
        },
        // pnpm
        {
            packageOfInterest: 'eslint',
            cmd: 'pnpm add eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'pnpm add eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint-plugin-jest',
            cmd: 'pnpm add eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'pnpm add eslint-plugin-jest eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'pnpm add eslint'
        }
    ])('[checking if regular install] should handle $cmd case', ({cmd, packageOfInterest}) => {
        document.body.innerHTML = `
            <article>
                <div class="highlight highlight-source-shell">
                    <pre>${cmd}</pre>
                </div>
            </article>
        `;

        expect(hasInstallCommandsInReadme(packageOfInterest, false)).toEqual(true);
        expect(hasInstallCommandsInReadme(packageOfInterest, true)).toEqual(false);
    }) 
})
