import { devDepHtml, devDepWithNoReferenceInReadme, nonDevDepHtml } from './npmjshtml'
import { shouldTransformToRegularDep } from './transformations/shouldTransformToRegularDep'
import { shouldTransformToDevDepCmd } from './transformations/shouldTransformToDevDepCmd'

describe('when on npmjs.com', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://npmjs.com/packages/package'
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
    selector: 'code > span',
    packageName: 'cellular-automata-react',
    withWarning: false
  })

  shouldTransformToRegularDep({
    html: devDepWithNoReferenceInReadme,
    selector: 'code > span',
    packageName: 'jest',
    withWarning: true
  })
  
  // should transform to dev dep command
  shouldTransformToDevDepCmd({
    html: devDepHtml,
    selector: 'code > span',
    packageName: 'eslint-plugin-jest'
  })
})
