interface MockGetSet {
    mockGet?: jest.Mock | (() => void)
    mockSet?: jest.Mock | (() => void)
}

export const mockGlobalChromeStoreLocal = ({
    mockGet = () => {},
    mockSet = () => {}
}: MockGetSet) => {
    global.chrome = {
    'storage': {
        'local': {
            'get': mockGet,
            'set': mockSet
        }
    }
} as any;
}