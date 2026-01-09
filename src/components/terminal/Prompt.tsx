import React from 'react'

interface PromptProps {
    path: string
    branch: string
    nodeVersion: string
}

export const Prompt = ({ path, branch, nodeVersion }: PromptProps) => (
    <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="font-bold text-cat-blue">~</span>
        <span className="text-cat-subtext0">/</span>
        <span className="font-bold text-cat-teal">{path}</span>
        <span className="text-cat-subtext0">on</span>

        {/* Git Branch Segment */}
        <div className="flex items-center gap-1">
            <svg
                className="h-5 w-5 text-cat-blue"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
            </svg>
            <span className="font-bold text-cat-blue">{branch}</span>
        </div>

        <span className="text-cat-subtext0">via</span>

        {/* Node Version Segment */}
        <div className="flex items-center gap-1">
            <svg
                className="h-5 w-5 text-cat-green"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                <path d="M21 7.5l-9-5.2-9 5.2v10l9 5.2 9-5.2v-10zm-9 13.7l-7.5-4.3v-8.6l7.5 4.3v8.6zm.5-9.8l-7.5-4.3 7.5-4.3 7.5 4.3-7.5 4.3z" />
            </svg>
            <span className="font-bold text-cat-green">{nodeVersion}</span>
        </div>

        <span className="font-bold text-cat-green">❯</span>
    </div>
)
