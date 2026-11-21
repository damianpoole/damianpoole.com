interface CommandProps {
    command: string
    isTyping: boolean
}

export const Command = ({ command, isTyping }: CommandProps) => (
    <div className="mb-6 flex items-center gap-2">
        <span aria-hidden="true" className="text-cat-blue font-bold">
            ❯
        </span>
        <span className="text-cat-text">{command}</span>
        {isTyping && (
            <span
                aria-hidden="true"
                className="bg-cat-subtext0 inline-block h-6 w-3 animate-pulse align-middle"
            ></span>
        )}
    </div>
)
