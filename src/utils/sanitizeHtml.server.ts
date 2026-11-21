import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import { renderMarkdown, sanitizerOptions } from './markdown'
import type { TerminalNode } from './terminalNodes'

const jsdomWindow = new JSDOM('').window
const DOMPurify = createDOMPurify(jsdomWindow)

const BLOCK_CONTAINERS = new Set(['body', 'ul', 'ol', 'blockquote'])
const ALLOWED_ATTR_SET = new Set(sanitizerOptions.ALLOWED_ATTR)

const serializeChildNodes = (
    parentTag: string,
    childNodes: NodeListOf<ChildNode>
): TerminalNode[] => {
    const result: TerminalNode[] = []

    for (const child of childNodes) {
        if (child.nodeType === jsdomWindow.Node.TEXT_NODE) {
            const text = child.textContent ?? ''
            if (text.length === 0) continue
            if (BLOCK_CONTAINERS.has(parentTag) && text.trim().length === 0) {
                continue
            }
            result.push({ type: 'text', text })
        } else if (child.nodeType === jsdomWindow.Node.ELEMENT_NODE) {
            const element = child as Element
            const tag = element.tagName.toLowerCase()
            const attrs: Record<string, string> = {}

            for (const attr of element.attributes) {
                if (ALLOWED_ATTR_SET.has(attr.name)) {
                    attrs[attr.name] = attr.value
                }
            }

            const children = serializeChildNodes(tag, element.childNodes)
            const node: TerminalNode =
                Object.keys(attrs).length > 0
                    ? { type: 'element', tag, attrs, children }
                    : { type: 'element', tag, children }

            result.push(node)
        }
    }

    return result
}

export const safeRenderMarkdown = (markdown: string): string => {
    const html = renderMarkdown(markdown)
    return DOMPurify.sanitize(html, sanitizerOptions)
}

export const safeRenderMarkdownToNodes = (markdown: string): TerminalNode[] => {
    const sanitizedHtml = safeRenderMarkdown(markdown)
    const template = jsdomWindow.document.createElement('template')
    template.innerHTML = sanitizedHtml
    return serializeChildNodes('body', template.content.childNodes)
}
