import { marked } from 'marked'

export const sanitizerOptions = {
    ALLOWED_TAGS: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'br',
        'hr',
        'a',
        'strong',
        'em',
        'del',
        'ins',
        'mark',
        's',
        'u',
        'ul',
        'ol',
        'li',
        'blockquote',
        'code',
        'pre',
        'img',
    ],
    ALLOWED_ATTR: ['href', 'src', 'title', 'alt'],
    FORBID_ATTR: ['onclick', 'onload', 'onerror'],
}

export const renderMarkdown = (markdown: string): string => {
    return marked.parse(markdown) as string
}
