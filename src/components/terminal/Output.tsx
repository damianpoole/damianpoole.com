import { createElement, type ReactNode, type Ref } from 'react'
import { VOID_HTML_TAGS, type TerminalNode } from '@/utils/terminalNodes'

interface OutputProps {
    nodes: readonly TerminalNode[]
    visibleChars: number
    showAll: boolean
    isProcessing: boolean
    isTyping: boolean
    outputRef?: Ref<HTMLDivElement>
}

const renderAllTerminalNodes = (
    nodes: readonly TerminalNode[],
    keyPrefix: string
): ReactNode[] => {
    return nodes.map((node, index) => {
        const key = `${keyPrefix}-${index}`

        if (node.type === 'text') {
            return node.text
        }

        if (VOID_HTML_TAGS.has(node.tag)) {
            return createElement(node.tag, { key, ...node.attrs })
        }

        const children = renderAllTerminalNodes(node.children, key)
        return createElement(node.tag, { key, ...node.attrs }, ...children)
    })
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
    showAll,
    isProcessing,
    isTyping,
    outputRef,
}: OutputProps) => {
    if (isProcessing) {
        return (
            <div
                key="processing"
                className="text-cat-subtext0 motion-safe:animate-fade-in mb-4 flex items-center gap-2"
            >
                <span aria-hidden="true" className="animate-spin">
                    ⟳
                </span>{' '}
                Processing request...
            </div>
        )
    }

    const renderedNodes = showAll
        ? renderAllTerminalNodes(nodes, 'out')
        : renderTerminalNodes(nodes, { remaining: visibleChars }, 'out')

    return (
        <div
            key="output"
            ref={outputRef}
            tabIndex={-1}
            className="terminal-output motion-safe:animate-fade-in focus:outline-none"
        >
            <div className="prose prose-invert prose-lg max-w-none leading-relaxed">
                {renderedNodes}
            </div>
            {isTyping && (
                <span
                    aria-hidden="true"
                    className="bg-cat-blue mt-4 inline-block h-6 w-3 animate-pulse align-middle"
                ></span>
            )}
        </div>
    )
}
