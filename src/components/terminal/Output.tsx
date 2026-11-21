import { createElement, type ReactNode } from 'react'
import { VOID_HTML_TAGS, type TerminalNode } from '@/utils/terminalNodes'

interface OutputProps {
    nodes: readonly TerminalNode[]
    visibleChars: number
    isProcessing: boolean
    isTyping: boolean
}

const renderTerminalNodes = (
    nodes: readonly TerminalNode[],
    budget: { remaining: number },
    keyPrefix: string
): ReactNode[] => {
    const rendered: ReactNode[] = []

    for (let index = 0; index < nodes.length; index++) {
        if (budget.remaining <= 0) break

        const node = nodes[index]
        const key = `${keyPrefix}-${index}`

        if (node.type === 'text') {
            if (node.text.length <= budget.remaining) {
                budget.remaining -= node.text.length
                rendered.push(node.text)
            } else {
                rendered.push(node.text.slice(0, budget.remaining))
                budget.remaining = 0
            }
            continue
        }

        if (VOID_HTML_TAGS.has(node.tag)) {
            rendered.push(createElement(node.tag, { key, ...node.attrs }))
            continue
        }

        const children = renderTerminalNodes(node.children, budget, key)
        if (children.length > 0 || node.children.length === 0) {
            rendered.push(
                createElement(node.tag, { key, ...node.attrs }, ...children)
            )
        }
    }

    return rendered
}

export const Output = ({
    nodes,
    visibleChars,
    isProcessing,
    isTyping,
}: OutputProps) => {
    if (isProcessing) {
        return (
            <div className="text-cat-subtext0 animate-in fade-in mb-4 flex items-center gap-2 duration-300">
                <span className="animate-spin">⟳</span> Processing request...
            </div>
        )
    }

    const renderedNodes = renderTerminalNodes(
        nodes,
        { remaining: visibleChars },
        'out'
    )

    return (
        <div className="terminal-output animate-in fade-in duration-300">
            <div className="prose prose-invert prose-lg max-w-none leading-relaxed">
                {renderedNodes}
            </div>
            {isTyping && (
                <span className="bg-cat-blue mt-4 inline-block h-6 w-3 animate-pulse align-middle"></span>
            )}
        </div>
    )
}
