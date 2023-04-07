import { preferredPackageManager } from "../../../src/storage";
import { popupLogger } from "../../../src/utils";

import {
    fireEvent, getQueriesForElement, waitFor
} from '@testing-library/dom'

jest.mock('../../../src/storage');
const mockPreferredPackageManager = jest.mocked(preferredPackageManager);
jest.mock('../../../src/utils');
const mockPopupLoggger = jest.mocked(popupLogger);

describe('popup', () => {
    const originalDocument = document;
    afterAll(() => {
        document = originalDocument;
    })

    afterEach(() => {
        document = originalDocument;
        document.body.innerHTML = ''
    })

    describe('when document contains the install field', () => {
        const mockQuery = jest.fn();
        beforeEach(() => {
            jest.isolateModules(() => {
                jest.clearAllMocks()
                chromeMock(mockQuery);

                mockPreferredPackageManager.get.mockResolvedValue({preferredPackageManager: 'npm'});
                document.body.innerHTML = `
                    <select name="preferred-package-manager">
                    <option value="yarn">Yarn</option>
                    <option value="npm">NPM</option>
                    </select>
                `;
    
                require('../../../src/popup');
            })
        })
        it('should call package manager setter & message query if select option changed to npm', async () => {
            const { getByRole } = getQueriesForElement(document.body);
            fireEvent.change(
                getByRole('combobox')!,
                {
                    target: {
                        value: 'npm'
                    }
                }
            );
            
            await waitFor(() => {
                expect(mockPreferredPackageManager.set).toBeCalled();
                expect(mockQuery).toBeCalled();
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
    
                mockPreferredPackageManager.get.mockResolvedValue({preferredPackageManager: 'npm'});
                // jest.resetModules();
                // to invalidate cache for require
                // as we are testing effects
                require('../../../src/popup');
            })
        })

        it('should throw a warning to client', async () => {
            await waitFor(() => {
                expect(mockPopupLoggger).toBeCalledWith('warn', 'missing select element')
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
    
                mockPreferredPackageManager.get.mockRejectedValue(new Error('some error'));
                // jest.resetModules();
                // to invalidate cache for require
                // as we are testing effects
                require('../../../src/popup');
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
    } as any;
}