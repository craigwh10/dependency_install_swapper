import { updateCopyToClipboardButton } from '@chrome/src/content/command/updateCopyToClipboardButton'
import { devDepHtml, devDepWithNoReferenceInReadme, nonDevDepHtml } from './yarnpkghtml'
import { availablePackageManagers } from '@chrome/src/storage'

describe('when on yarnpkg.com', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://yarnpkg.com/packages/package'
      },
      writable: true
    })
    // hide console logs
    console.log = jest.fn()
  })

  afterAll(() => {
    Object.defineProperty(window, 'location', {
      value: {
        href: undefined
      },
      writable: true
    })
  })

  it.each([
    {
      prefPkgManager: 'yarn',
      expectedCmd: 'yarn add cellular-automata-react'
    },
    {
      prefPkgManager: 'npm',
      expectedCmd: 'npm i cellular-automata-react'
    },
    {
      prefPkgManager: 'bower',
      expectedCmd: 'bower install cellular-automata-react'
    },
    {
      prefPkgManager: 'pnpm',
      expectedCmd: 'pnpm add cellular-automata-react'
    }
  ])('for non dev dep readme and preferred package $prefPkgManager: npm install cellular-automata-react becomes $expectedCmd with no warning', ({ prefPkgManager, expectedCmd }) => {
    document.body.innerHTML = nonDevDepHtml

    updateCopyToClipboardButton.fromCmdButton(prefPkgManager as availablePackageManagers)

    expect(document.querySelector('section > code > span')).toBeDefined()
    expect(document.querySelector('section > code > span')?.textContent).toEqual(expectedCmd)
    expect(document.querySelector('#dis-google-ext-warning')).toBeNull()
  })

  it.each([
    {
      prefPkgManager: 'yarn',
      expectedCmd: 'yarn add -D eslint-plugin-jest'
    },
    {
      prefPkgManager: 'npm',
      expectedCmd: 'npm i -D eslint-plugin-jest'
    },
    {
      prefPkgManager: 'bower',
      expectedCmd: 'bower install eslint-plugin-jest'
    },
    {
      prefPkgManager: 'pnpm',
      expectedCmd: 'pnpm add -D eslint-plugin-jest'
    }
  ])('for dev dep readme and preferred package $prefPkgManager: npm install eslint-plugin-jest becomes $expectedCmd with no warning', ({ prefPkgManager, expectedCmd }) => {
    document.body.innerHTML = devDepHtml

    updateCopyToClipboardButton.fromCmdButton(prefPkgManager as availablePackageManagers)

    expect(document.querySelector('section > code > span')).toBeDefined()
    expect(document.querySelector('section > code > span')?.textContent).toEqual(expectedCmd)
    expect(document.querySelector('#dis-google-ext-warning')).toBeNull()
  })

  it.each([
    {
      prefPkgManager: 'yarn',
      expectedCmd: 'yarn add jest'
    },
    {
      prefPkgManager: 'npm',
      expectedCmd: 'npm i jest'
    },
    {
      prefPkgManager: 'bower',
      expectedCmd: 'bower install jest'
    },
    {
      prefPkgManager: 'pnpm',
      expectedCmd: 'pnpm add jest'
    }
  ])('for non dev dep readme and preferred package $prefPkgManager: npm install eslint becomes $expectedCmd and shows warning', ({ prefPkgManager, expectedCmd }) => {
    document.body.innerHTML = devDepWithNoReferenceInReadme

    updateCopyToClipboardButton.fromCmdButton(prefPkgManager as availablePackageManagers)

    expect(document.querySelector('section > code > span')).toBeDefined()
    expect(document.querySelector('section > code > span')?.textContent).toEqual(expectedCmd)
    expect(document.querySelector('#dis-google-ext-warning')).toBeDefined()
  })
})
