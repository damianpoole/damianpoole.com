export const showEntry = (
    draft: boolean,
    isProd = import.meta.env.PROD
): boolean => !isProd || !draft

export const formatDate = (date: Date): string =>
    date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

export const isHttpUrl = (value: string): boolean => {
    try {
        const { protocol } = new URL(value)
        return protocol === 'http:' || protocol === 'https:'
    } catch {
        return false
    }
}
