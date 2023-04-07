const logger = (scope: 'popup' | 'content') => (level: 'info' | 'warn', message: string) => {
    console.log(`[${level}] ${scope} - ${message}`);
}

export const popupLogger = logger('popup');
export const contentLogger = logger('content');