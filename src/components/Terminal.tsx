import { useState, useEffect, useMemo } from 'react'
import { useTypewriter } from '@/hooks/useTypewriter'
import { safeRenderMarkdown } from '@/utils/sanitizeHtml.client'
import { terminalContent } from '@/data/terminalContent'
import TerminalFrame from './TerminalFrame'
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
        if (step !== 2) {
            return ''
        }

        return safeRenderMarkdown(typedOutput)
    }, [step, typedOutput])

    useEffect(() => {
        if (commandComplete && step === 0) {
            const timeoutId = setTimeout(() => setStep(1), 0)
            return () => clearTimeout(timeoutId)
        }
        if (step === 1) {
            const timeoutId = setTimeout(() => setStep(2), 800)
            return () => clearTimeout(timeoutId)
        }
    }, [commandComplete, step])

    return (
        <TerminalFrame activeTab="home">
            <div className="text-cat-text w-full font-mono text-lg md:text-xl">
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
        </TerminalFrame>
    )
}

export default Terminal
