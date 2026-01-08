'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useTypewriter } from '@/hooks/useTypewriter'
import { marked } from 'marked'

const Terminal = () => {
    const [step, setStep] = useState<0 | 1 | 2>(0) // 0: typing command, 1: loading, 2: typing output
    const commandText = 'prompt "Who is Damian Poole?"'

    // Terminal content to be typed out
    const outputText = `
# Damian Poole
**Full Stack Engineer / DevOps / Allotment Novice**

Damian is a UK-based software engineer who has been building for the web since the **IE6 era**. He has survived the "Browser Wars," the rise and fall of jQuery, and more "revolutionary" JavaScript frameworks than he cares to admit. With 20 years in the game, he’s seen it all—and usually has the scars to prove it.

### The System Log
* **The Day Job:** Currently navigating the complexities of **Full Stack and DevOps** at [AND Digital](https://www.and.digital/). He spends his time orchestrating **Azure/AWS** infrastructure with **Terraform**, wrestling with **GitHub Actions**, and writing **TypeScript/React** that (mostly) works on the first try.
* **The Philosophy:** A **Stoic Pragmatist**. He believes a simple solution that ships is infinitely superior to a "perfect" one that lives forever in a Jira backlog. 
* **The Hot Take:** He maintains that modern Agile is largely a collection of expensive meetings that slows down real progress.
### Known Vulnerabilities & Interests
* **Neovim Obsession:** Spends an irrational amount of time "optimizing" a text editor that was already perfect in the 90s. He’s recently moved his entire life into **obsidian.nvim** because Notion felt too "user-friendly."
* **Side Projects:** Currently building an indie game in **PhaserJS**. It’s a humbling reminder that moving a sprite across a screen is sometimes more complex than managing a microservice.
* **The Great Outdoors:** When he isn't staring at a terminal, he's likely hiking in **Northumberland**, snowboarding, or losing a battle against weeds at his **allotment**.

### Technical Metadata
* **Modern:** React, Next.js, Svelte, Vitest, Azure, AWS, K8s, AI Tooling.
* **Vintage:** C#, .NET, MongoDB, Jenkins, and the dark art of CSS hacks for Internet Explorer.

### Contact
* [github.com/damianpoole](https://github.com/damianpoole)
* [linkedin.com/in/damianpoole](https://linkedin.com/in/damianpoole)
* Email: damian.poole@gmail.com

> The goal is to solve the problem, not to win an argument about the solution.
`

    // Typing hooks
    const { displayText: typedCommand, isComplete: commandComplete } =
        useTypewriter(commandText, 50, 500)
    const { displayText: typedOutput } = useTypewriter(
        step === 2 ? outputText : '',
        5,
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
            <div className="w-full max-w-screen-lg p-4 md:p-8">
                {/* Prompt Line */}
                <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-bold text-[#8caaee]">~</span>
                    <span className="text-[#a5adce]">/</span>
                    <span className="font-bold text-[#81c8be]">
                        damianpoole.com
                    </span>
                    <span className="text-[#a5adce]">on</span>

                    {/* Git Branch Segment */}
                    <div className="flex items-center gap-1">
                        <svg
                            className="h-5 w-5 text-[#8caaee]"
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
                        <span className="font-bold text-[#8caaee]">main</span>
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
                                    .terminal-output h1, .terminal-output h2, .terminal-output h3 {
                                        background-color: #f4b8e4;
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
                                        color: #f2d5cf;
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
