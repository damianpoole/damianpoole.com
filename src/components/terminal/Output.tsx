interface OutputProps {
    html: string
    isProcessing: boolean
    isTyping: boolean
}

export const Output = ({ html, isProcessing, isTyping }: OutputProps) => {
    if (isProcessing) {
        return (
            <div className="text-cat-subtext0 animate-in fade-in mb-4 flex items-center gap-2 duration-300">
                <span className="animate-spin">⟳</span> Processing request...
            </div>
        )
    }

    return (
        <div className="terminal-output animate-in fade-in duration-300">
            <div
                className="prose prose-invert prose-lg max-w-none leading-relaxed"
                dangerouslySetInnerHTML={{
                    __html: html,
                }}
            />
            {isTyping && (
                <span className="bg-cat-blue mt-4 inline-block h-6 w-3 animate-pulse align-middle"></span>
            )}
        </div>
    )
}
