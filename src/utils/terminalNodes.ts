export type TerminalTextNode = {
    type: 'text'
    text: string
}

export type TerminalElementNode = {
    type: 'element'
    tag: string
    attrs?: Record<string, string>
    children: TerminalNode[]
}

export type TerminalNode = TerminalTextNode | TerminalElementNode

export const VOID_HTML_TAGS = new Set(['br', 'hr', 'img'])

export const countTerminalChars = (nodes: readonly TerminalNode[]): number => {
    let total = 0

    for (const node of nodes) {
        if (node.type === 'text') {
            total += node.text.length
        } else {
            total += countTerminalChars(node.children)
        }
    }

    return total
}
