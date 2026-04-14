import createDOMPurify from 'dompurify'
import { renderMarkdown, sanitizerOptions } from './markdown'

let DOMPurify: ReturnType<typeof createDOMPurify> | undefined

const getDOMPurify = () => {
    if (!DOMPurify) {
        DOMPurify = createDOMPurify(window)
    }

    return DOMPurify
}

export const safeRenderMarkdown = (markdown: string): string => {
    const html = renderMarkdown(markdown)
    return getDOMPurify().sanitize(html, sanitizerOptions)
}
