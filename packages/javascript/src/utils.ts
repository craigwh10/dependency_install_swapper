const logger = (scope: 'popup' | 'content') => (level: 'info' | 'warn', message: string) => {
    ['test', 'development'].includes(process.env.NODE_ENV as string) ? console.log(`[${level}] ${scope} - ${message}`) : null;
}

export const popupLogger = logger('popup');
export const contentLogger = logger('content');