import React from 'react'

interface CommandProps {
    command: string
    isTyping: boolean
}

export const Command = ({ command, isTyping }: CommandProps) => (
    <div className="mb-6 flex items-center gap-2">
        <span className="font-bold text-cat-blue">❯</span>
        <span className="text-cat-text">{command}</span>
        {isTyping && (
            <span className="inline-block h-6 w-3 animate-pulse bg-cat-subtext0 align-middle"></span>
        )}
    </div>
)
