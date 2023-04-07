import { preferredPackageManager } from "../../../src/storage"
import { mockGlobalChromeStoreLocal } from "../../mocks/google";

describe('storage', () => {
    describe('get', () => {
        const mockGet = jest.fn();
        beforeEach(() => {
            mockGlobalChromeStoreLocal({mockGet});
        })
        it('should call get with the correct key using chrome extension API', () => {
            const chromeStorageSpy = jest.spyOn(chrome.storage.local, 'get');
            preferredPackageManager.get();
            expect(chromeStorageSpy).toBeCalledWith('preferredPackageManager');
        })
    })

    describe('set', () => {
        const mockSet = jest.fn();
        beforeEach(() => {
            mockGlobalChromeStoreLocal({mockSet})
        })
        it('should call set with the correct object using chrome extension API', () => {
            const chromeStorageSpy = jest.spyOn(chrome.storage.local, 'set');
            preferredPackageManager.set('val');
            expect(chromeStorageSpy).toBeCalledWith({
                preferredPackageManager: 'val'
            }) 
        })
    })
})