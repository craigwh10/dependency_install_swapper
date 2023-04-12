export const message = (name: string, payload?: Record<string, any>) => {
    return {name, payload: payload};
}