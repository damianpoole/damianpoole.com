import {
    useState,
    useEffect,
    useMemo,
    useSyncExternalStore,
    type MouseEvent,
} from 'react'
import { useRevealCount, useTypewriter } from '@/hooks/useTypewriter'
import { terminalContent } from '@/data/terminalContent'
import { countTerminalChars, type TerminalNode } from '@/utils/terminalNodes'
import TerminalFrame from './TerminalFrame'
import { Prompt } from './terminal/Prompt'
import { Command } from './terminal/Command'
import { Output } from './terminal/Output'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const IGNORED_SKIP_KEYS = new Set([
    'Tab',
    'Shift',
    'Control',
    'Alt',
    'Meta',
    'CapsLock',
])

const subscribeReducedMotion = (callback: () => void) => {
    if (
        typeof window === 'undefined' ||
        typeof window.matchMedia !== 'function'
    ) {
        return () => {}
    }

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)
    mediaQuery.addEventListener('change', callback)
    return () => mediaQuery.removeEventListener('change', callback)
}

const getReducedMotionSnapshot = () =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches

const getReducedMotionServerSnapshot = () => false

interface TerminalProps {
    outputNodes: readonly TerminalNode[]
}

const Terminal = ({ outputNodes }: TerminalProps) => {
    const [step, setStep] = useState<0 | 1 | 2>(0) // 0: typing command, 1: loading, 2: typing output
    const [userSkipped, setUserSkipped] = useState(false)

    const prefersReducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionSnapshot,
        getReducedMotionServerSnapshot
    )

    const isSkipped = userSkipped || prefersReducedMotion
    const effectiveStep: 0 | 1 | 2 = isSkipped ? 2 : step
    const totalOutputChars = useMemo(
        () => countTerminalChars(outputNodes),
        [outputNodes]
    )

    // Typing hooks
    const { displayText: typedCommand, isComplete: commandComplete } =
        useTypewriter(terminalContent.command, 125, 400, isSkipped)
    const { count: visibleOutputChars, isComplete: outputComplete } =
        useRevealCount(totalOutputChars, 5, 0, effectiveStep === 2, isSkipped)

    const isAnimationComplete =
        isSkipped || (effectiveStep === 2 && outputComplete)

    useEffect(() => {
        if (isSkipped) {
            return
        }
        if (commandComplete && step === 0) {
            const timeoutId = setTimeout(() => setStep(1), 0)
            return () => clearTimeout(timeoutId)
        }
        if (step === 1) {
            const timeoutId = setTimeout(() => setStep(2), 800)
            return () => clearTimeout(timeoutId)
        }
    }, [commandComplete, step, isSkipped])

    useEffect(() => {
        if (isAnimationComplete) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.metaKey || event.ctrlKey || event.altKey) {
                return
            }
            if (IGNORED_SKIP_KEYS.has(event.key)) {
                return
            }

            if (event.key === ' ') {
                const target = event.target as Element | null
                if (!target?.closest('a, button, input, textarea, select')) {
                    event.preventDefault()
                }
            }

            setUserSkipped(true)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isAnimationComplete])

    const handleTerminalClick = (event: MouseEvent<HTMLDivElement>) => {
        if (isAnimationComplete) {
            return
        }

        const target = event.target as Element | null
        if (target?.closest('a, button')) {
            return
        }

        if (window.getSelection()?.toString()) {
            return
        }

        setUserSkipped(true)
    }

    return (
        <TerminalFrame activeTab="home">
            <div
                onClick={handleTerminalClick}
                className={[
                    'text-cat-text w-full font-mono text-lg md:text-xl',
                    !isAnimationComplete ? 'cursor-pointer' : '',
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {/* Prompt Line */}
                <Prompt {...terminalContent.prompt} />

                {/* Command Input */}
                <Command
                    command={typedCommand}
                    isTyping={effectiveStep === 0}
                />

                {/* Output */}
                {(effectiveStep === 1 || effectiveStep === 2) && (
                    <Output
                        nodes={outputNodes}
                        visibleChars={visibleOutputChars}
                        isProcessing={effectiveStep === 1}
                        isTyping={effectiveStep === 2 && !outputComplete}
                    />
                )}

                {!isAnimationComplete && (
                    <p className="text-cat-overlay1 mt-4 text-xs">
                        Click or press any key to skip animation
                    </p>
                )}
            </div>
        </TerminalFrame>
    )
}

export default Terminal
