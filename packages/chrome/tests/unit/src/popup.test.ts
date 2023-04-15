import { preferredPackageManager } from '@chrome/src/storage'
import { popupLogger } from '@chrome/src/utils'

import {
  fireEvent, getQueriesForElement, waitFor
} from '@testing-library/dom'

jest.mock('@chrome/src/storage')
const mockPreferredPackageManager = jest.mocked(preferredPackageManager)
jest.mock('@chrome/src/utils')
const mockPopupLoggger = jest.mocked(popupLogger)

describe('popup', () => {
  const originalDocument = document
  afterAll(() => {
    document = originalDocument
  })

  afterEach(() => {
    document = originalDocument
    document.body.innerHTML = ''
  })

  describe('when document contains the install field', () => {
    const mockQuery = jest.fn()
    beforeEach(() => {
      jest.isolateModules(() => {
        jest.clearAllMocks()
        chromeMock(mockQuery)
        mockPreferredPackageManager.set.mockResolvedValue();
        mockPreferredPackageManager.get.mockResolvedValue({ preferredPackageManager: 'npm' })
        document.body.innerHTML = `
        <div role="group" aria-label="select your preferred package manager">
            <label>
              <input type="radio" name="preferred-package-manager" value="yarn" required aria-describedby="select your preferred package manager as yarn" />
              <span>Yarn</span>
            </label>
            <label>
              <input type="radio" name="preferred-package-manager" value="npm" required aria-describedby="select your preferred package manager as npm" />
              <span>NPM</span>
            </label>
            <label>
              <input type="radio" name="preferred-package-manager" value="pnpm" required aria-describedby="select your preferred package manager as pnpm" />
              <span>PNPM</span>
            </label>
            <label>
              <input type="radio" name="preferred-package-manager" value="bower" required aria-describedby="select your preferred package manager as bower" />
              <span>Bower</span>
            </label>
        </div>
                `

        require('../../../src/popup')
      })
    })
    it('should call package manager setter & message query if select option changed to npm', async () => {
      const { getByLabelText } = getQueriesForElement(document.body)

      fireEvent.change(
        getByLabelText('NPM')!,
        {
          target: {
            selected: true
          }
        }
      )

      await waitFor(() => {
        expect(mockPreferredPackageManager.set).toBeCalled()
        expect(mockQuery).toBeCalled()
      })
    })
  })

  describe('when document does not contain install field', () => {
    beforeEach(() => {
      // isolate allows the require inside to not be added
      // to cache on run.
      // require('../...)
      jest.isolateModules(() => {
        jest.clearAllMocks()
        document.body.innerHTML = ''

        mockPreferredPackageManager.get.mockResolvedValue({ preferredPackageManager: 'npm' })
        // jest.resetModules();
        // to invalidate cache for require
        // as we are testing effects
        require('../../../src/popup')
      })
    })

    it('should throw a warning to client', async () => {
      await waitFor(() => {
        expect(mockPopupLoggger).toHaveBeenLastCalledWith('warn', 'cannot find preferred package manager select element from popup script')
      })
    })
  })

  describe('when the preferred package manager (i.e google extension store) fails', () => {
    beforeEach(() => {
      // isolate allows the require inside to not be added
      // to cache on run.
      // require('../...)
      jest.isolateModules(() => {
        jest.clearAllMocks()
        document.body.innerHTML = ''

        mockPreferredPackageManager.get.mockRejectedValue(new Error('some error'))
        // jest.resetModules();
        // to invalidate cache for require
        // as we are testing effects
        require('../../../src/popup')
      })
    })

    it('should throw a warning to client with error', async () => {
      await waitFor(() => {
        expect(mockPopupLoggger).toBeCalledWith('warn', 'some error')
      })
    })
  })
})

function chromeMock (mock: jest.Mock) {
  global.chrome = {
    tabs: {
      query: mock
    }
  } as any
}
