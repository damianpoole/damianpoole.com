import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import { renderMarkdown, sanitizerOptions } from './markdown'

const DOMPurify = createDOMPurify(new JSDOM('').window)

export const safeRenderMarkdown = (markdown: string): string => {
    const html = renderMarkdown(markdown)
    return DOMPurify.sanitize(html, sanitizerOptions)
}
