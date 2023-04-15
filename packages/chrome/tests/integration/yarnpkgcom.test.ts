import { devDepHtml, devDepWithNoReferenceInReadme, nonDevDepHtml } from './yarnpkghtml'
import { shouldTransformToRegularDep } from './transformations/shouldTransformToRegularDep'
import { shouldTransformToDevDepCmd } from './transformations/shouldTransformToDevDepCmd'

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

  shouldTransformToRegularDep({
    html: nonDevDepHtml,
    packageName: 'cellular-automata-react',
    selector: 'section > code > span',
    withWarning: false,
  })

  shouldTransformToDevDepCmd({
    html: devDepHtml,
    packageName: 'eslint-plugin-jest',
    selector: 'section > code > span'
  })

  shouldTransformToRegularDep({
    html: devDepWithNoReferenceInReadme,
    packageName: 'jest',
    selector: 'section > code > span',
    withWarning: true
  })
})
