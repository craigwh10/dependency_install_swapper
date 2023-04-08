import { hasDevDepInReadme } from "@js/src/content/hasDevDepInReadme";

import { eslintplugin } from "@js/tests/mocks/npm/readmes/eslint-plugin";
import { prosemirror } from "@js/tests/mocks/npm/readmes/prosemirror";
import { react } from "@js/tests/mocks/npm/readmes/react";
import { reacttestinglibrary } from "@js/tests/mocks/npm/readmes/react-testing-library";
import { tsnode } from "@js/tests/mocks/npm/readmes/tsnode";

describe('hasDevDepInReadme', () => {
    it('should identify ts-node as a dev dependency', () => {
        document.body.innerHTML = tsnode;

        expect(hasDevDepInReadme('ts-node')).toEqual(true);
    })

    it('should identify eslint-plugin-jest as a dev dependency', () => {
        document.body.innerHTML = eslintplugin;

        expect(hasDevDepInReadme('eslint-plugin-jest')).toEqual(true);
    })

    it('should identify react as a normal dependency', () => {
        document.body.innerHTML = react;

        expect(hasDevDepInReadme('react')).toEqual(false); 
    })

    it('should identify aditor as normal dependency', () => {
        document.body.innerHTML = prosemirror;

        expect(hasDevDepInReadme('prosemirror')).toEqual(false); 
    })

    it('should identify react testing library as a dev dependency', () => {
        document.body.innerHTML = reacttestinglibrary;

        expect(hasDevDepInReadme('@testing-library/react')).toEqual(true); 
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
    ])('should handle $cmd case', ({cmd, packageOfInterest}) => {
        document.body.innerHTML = `
            <article>
                <div class="highlight highlight-source-shell">
                    <pre>${cmd}</pre>
                </div>
            </article>
        `;

        expect(hasDevDepInReadme(packageOfInterest)).toEqual(true);
    }) 
})
