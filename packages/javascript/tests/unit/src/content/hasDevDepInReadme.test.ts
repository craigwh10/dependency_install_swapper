import { hasDevDepInReadme } from "@js/src/content/hasDevDepInReadme";

describe('hasDevDepInReadme', () => {
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
            packageOfInterest: 'eslint',
            cmd: 'yarn add -D eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'yarn add -D eslint'
        },
        // npm
        /// i
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i -D eslint'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i -D eslint eslint-plugin-jest'
        },
        {
            packageOfInterest: 'eslint',
            cmd: 'npm i --save-dev eslint eslint-plugin-jest'
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
            packageOfInterest: 'eslint',
            cmd: 'npm install --save-dev eslint eslint-plugin-jest'
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
            packageOfInterest: 'eslint',
            cmd: 'pnpm add --dev eslint eslint-plugin-jest'
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