const logger = (scope: 'popup' | 'content' | 'background') => (level: 'info' | 'warn', message: string) => {
  if (typeof process.env.NODE_ENV === 'string' && ['test', 'development'].includes(process.env.NODE_ENV)) {
    console.log(`[${level}] ${scope} - ${message}`)
  }
}

export const popupLogger = logger('popup')
export const contentLogger = logger('content')
export const backgroundLogger = logger('background')
