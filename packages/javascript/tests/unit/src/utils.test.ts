import { popupLogger, contentLogger } from "@js/src/utils";

describe('utils', () => {
    describe('loggers', () => {
        const stored = console.log;
        const storedEnv = process.env;
        const mockConsoleLog = jest.fn();
        beforeEach(() => {
            console.log = mockConsoleLog;
            mockConsoleLog.mockReset();
        })

        afterAll(() => {
            console.log = stored;
            process.env = storedEnv;
        })

        const testCase = (
            level: 'info' | 'warn',
            message: string,
            result: string
        ) => {
            return {
                level, message, result
            }
        }

        it.each([
            testCase('info', 'message', '[info] popup - message'),
            testCase('warn', 'message', '[warn] popup - message'),
            testCase('info', 'message longer', '[info] popup - message longer')
        ])('popup logger: $level, $message results in $result', ({level, message, result}) => {
            process.env.NODE_ENV = "development";
            popupLogger(level, message);
            expect(console.log).toBeCalledWith(result)
        })

        it.each([
            testCase('info', 'message', '[info] content - message'),
            testCase('warn', 'message', '[warn] content - message'),
            testCase('info', 'message longer', '[info] content - message longer')
        ])('content logger: $level, $message results in $result', ({level, message, result}) => {
            process.env.NODE_ENV = "test";
            contentLogger(level, message);
            expect(console.log).toBeCalledWith(result)
        })

        it.each([
            testCase('info', 'message', '[info] content - message'),
            testCase('warn', 'message', '[warn] content - message'),
            testCase('info', 'message longer', '[info] content - message longer')
        ])('should not call if environment is prod', ({level, message, result}) => {
            process.env.NODE_ENV = "prod";
            contentLogger(level, message);
            expect(console.log).not.toBeCalled();
        })
    })
})