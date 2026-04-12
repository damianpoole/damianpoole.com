import DOMPurify from 'dompurify'
import { marked } from 'marked'

export const safeRenderMarkdown = (markdown: string): string => {
    const html = marked.parse(markdown) as string
    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'br', 'hr',
            'a', 'strong', 'em', 'del', 'ins', 'mark', 's', 'u',
            'ul', 'ol', 'li',
            'blockquote', 'code', 'pre',
            'img',
        ],
        ALLOWED_ATTR: ['href', 'src', 'title', 'alt'],
        FORBID_ATTR: ['onclick', 'onload', 'onerror'],
    })
}
