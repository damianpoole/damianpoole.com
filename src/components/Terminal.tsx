'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useTypewriter } from '@/hooks/useTypewriter'
import { marked } from 'marked'
import { terminalContent } from '@/data/terminalContent'
import { Prompt } from './terminal/Prompt'
import { Command } from './terminal/Command'
import { Output } from './terminal/Output'

const Terminal = () => {
    const [step, setStep] = useState<0 | 1 | 2>(0) // 0: typing command, 1: loading, 2: typing output

    // Typing hooks
    const { displayText: typedCommand, isComplete: commandComplete } =
        useTypewriter(terminalContent.command, 50, 500)
    const { displayText: typedOutput, isComplete: outputComplete } =
        useTypewriter(step === 2 ? terminalContent.output : '', 5, 0)

    // Parse markdown safely
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
        <div className="w-full font-mono text-lg text-cat-text md:text-xl">
            {/* Terminal Body */}
            <div className="w-full max-w-screen-lg p-4 md:p-8">
                {/* Prompt Line */}
                <Prompt {...terminalContent.prompt} />

                {/* Command Input */}
                <Command command={typedCommand} isTyping={step === 0} />

                {/* Output */}
                {(step === 1 || step === 2) && (
                    <Output
                        html={htmlOutput}
                        isProcessing={step === 1}
                        isTyping={step === 2 && !outputComplete}
                    />
                )}
            </div>
        </div>
    )
}

export default Terminal

