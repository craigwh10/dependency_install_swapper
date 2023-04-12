import { handleInstallButton } from "@js/src/content/updateCopyToClipboardButton"
import { contentLogger } from "@js/src/utils"
import { preferredPackageManager } from "@js/src/storage"
import { waitFor } from "@testing-library/dom";

jest.mock('@js/src/content/handleInstallButton');
const mockhandleInstallButton = jest.mocked(handleInstallButton);
jest.mock('@js/src/utils');
const mockContentLogger = jest.mocked(contentLogger);
jest.mock('@js/src/storage');
const mockPreferredPackageManager = jest.mocked(preferredPackageManager);

describe('content script initialisation', () => {
    const mockAddEventListener = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
    })

    describe('Given the package manager initially brings back valid options from store', () => {
        it('it should call the logger and npm install button handler', () => {
            jest.isolateModules(async() => {
                mockChrome(mockAddEventListener);

                mockPreferredPackageManager.get.mockResolvedValue({preferredPackageManager: 'npm'});

                require('@js/src/content/index');

                await waitFor(() => {
                    expect(mockhandleInstallButton).toBeCalledWith('npm');
                    expect(mockContentLogger).toBeCalledWith('info', 'got preferred packaage manager - npm')
                })
            })
        })
    })
    describe('Given the package manager initially brings back an error (i.e google extensions store erroring)', () => {
        it('should call the logger with a warning containing the error', () => {
            jest.isolateModules(async () => {
                mockChrome(mockAddEventListener);
    
                mockPreferredPackageManager.get.mockRejectedValue(new Error('google extension store broken'));
    
                require('@js/src/content/index');
    
                await waitFor(() => {
                    expect(mockContentLogger).toBeCalledWith('warn', 'google extension store broken')
                })
            })
        })
    })

    describe('So that we can respond to changes from the popup select', () => {
        it('should apply the message listener', () => {
            jest.isolateModules(async () => {
                mockChrome(mockAddEventListener);
                mockPreferredPackageManager.get.mockResolvedValue({preferredPackageManager: 'npm'});
    
                require('@js/src/content/index');
    
                expect(mockAddEventListener).toBeCalledTimes(1);
            })
        })
    })
})

function mockChrome (mock: jest.Mock) {
    global.chrome = {
        runtime: {
            onMessage: {
                addListener: mock
            }
        }
    } as any;
}