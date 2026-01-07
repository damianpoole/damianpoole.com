'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useTypewriter } from '@/hooks/useTypewriter'
import { marked } from 'marked'

const Terminal = () => {
    const [step, setStep] = useState<0 | 1 | 2>(0) // 0: typing command, 1: loading, 2: typing output
    const commandText = 'prompt "Who is Damian Poole?"'

    // Terminal content to be typed out
    const outputText = `
# Summary
**Damian Poole** is a Software Engineer based in the UK.

# Skills
- **Languages:** TypeScript, JavaScript, Python, C#
- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Node.js, Express, .NET
- **Tools:** Git, Docker, AWS

# About
Damian is passionate about building **accessible**, **performant** web applications. 
He enjoys solving complex problems and learning new technologies. 
When not coding, he's likely exploring the outdoors or tinkering with new tech.

# Contact
- [github.com/damianpoole](https://github.com/damianpoole)
- [linkedin.com/in/damianpoole](https://linkedin.com/in/damianpoole)
- Email: damian.poole@gmail.com

> Ready for new challenges.
`

    // Typing hooks
    const { displayText: typedCommand, isComplete: commandComplete } =
        useTypewriter(commandText, 50, 500)
    const { displayText: typedOutput } = useTypewriter(
        step === 2 ? outputText : '',
        10,
        0
    )

    // Parse markdown safely
    // We use useMemo to avoid re-parsing on every single render if not changed,
    // though typedOutput changes every frame essentially.
    const htmlOutput = useMemo(() => {
        return marked.parse(typedOutput) as string
    }, [typedOutput])

    useEffect(() => {
        if (commandComplete && step === 0) {
            setStep(1)
            setTimeout(() => setStep(2), 800) // Simulate processing delay
        }
    }, [commandComplete, step])

    return (
        <div className="w-full font-mono text-lg text-[#c6d0f5] md:text-xl">
            {/* Terminal Body */}
            <div className="mx-auto w-full max-w-screen-lg p-4 md:p-8">
                {/* Prompt Line */}
                <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-bold text-[#8caaee]">~</span>
                    <span className="text-[#a5adce]">/</span>
                    <span className="font-bold text-[#ca9ee6]">
                        damianpoole.com
                    </span>
                    <span className="text-[#a5adce]">on</span>

                    {/* Git Branch Segment */}
                    <div className="flex items-center gap-1">
                        <svg
                            className="h-5 w-5 text-[#f4b8e4]"
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
                        <span className="font-bold text-[#f4b8e4]">main</span>
                    </div>

                    <span className="text-[#a5adce]">via</span>

                    {/* Node Version Segment */}
                    <div className="flex items-center gap-1">
                        <svg
                            className="h-5 w-5 text-[#a6d189]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                            {/* Simplified Hexagon/Node-ish shape */}
                            <path d="M21 7.5l-9-5.2-9 5.2v10l9 5.2 9-5.2v-10zm-9 13.7l-7.5-4.3v-8.6l7.5 4.3v8.6zm.5-9.8l-7.5-4.3 7.5-4.3 7.5 4.3-7.5 4.3z" />
                        </svg>
                        <span className="font-bold text-[#a6d189]">
                            v22.11.0
                        </span>
                    </div>

                    <span className="font-bold text-[#a6d189]">❯</span>
                </div>

                {/* Command Input */}
                <div className="mb-6 flex items-center gap-2">
                    <span className="font-bold text-[#8caaee]">❯</span>
                    <span className="text-[#c6d0f5]">{typedCommand}</span>
                    {step === 0 && (
                        <span className="inline-block h-6 w-3 animate-pulse bg-[#a5adce] align-middle"></span>
                    )}
                </div>

                {/* Output */}
                {(step === 1 || step === 2) && (
                    <div className="animate-in fade-in duration-300">
                        {step === 1 ? (
                            <div className="mb-4 flex items-center gap-2 text-[#a5adce]">
                                <span className="animate-spin">⟳</span>{' '}
                                Processing request...
                            </div>
                        ) : (
                            <>
                                <style>{`
                                    .terminal-output h1 {
                                        background-color: #ef9f76;
                                        color: #303446;
                                        font-size: 0.75rem;
                                        padding: 0.25rem 0.5rem;
                                        width: fit-content;
                                        font-weight: 800;
                                        text-transform: uppercase;
                                        letter-spacing: 0.05em;
                                        line-height: 1;
                                    }
                                    .terminal-output strong {
                                        color: #8caaee;
                                    }
                                    .terminal-output a {
                                        color: #8caaee;
                                        text-decoration: none;
                                    }
                                    .terminal-output a:hover {
                                        text-decoration: underline;
                                    }
                                    .terminal-output p, .terminal-output li {
                                        color: #c6d0f5;
                                        margin-top: 0.5rem;
                                        margin-bottom: 0.5rem;
                                    }
                                    .terminal-output ul, .terminal-output ol {
                                        margin-top: 0.5rem;
                                        margin-bottom: 0.5rem;
                                    }
                                    .terminal-output li {
                                        margin-top: 0.25rem;
                                        margin-bottom: 0.25rem;
                                    }
                                `}</style>
                                <div className="terminal-output">
                                    <div
                                        className="prose prose-invert prose-lg max-w-none leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: htmlOutput,
                                        }}
                                    />
                                    {step === 2 && (
                                        <span className="mt-4 inline-block h-6 w-3 animate-pulse bg-[#8caaee] align-middle"></span>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Terminal
