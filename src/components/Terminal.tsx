import {
    useState,
    useEffect,
    useMemo,
    useRef,
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

const createReducedMotionLatch = () => {
    let latched = false

    const readMatches = () =>
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia(REDUCED_MOTION_QUERY).matches

    return {
        subscribe: (callback: () => void) => {
            if (
                typeof window === 'undefined' ||
                typeof window.matchMedia !== 'function'
            ) {
                return () => {}
            }

            const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)
            if (mediaQuery.matches) {
                latched = true
            }

            const handleChange = () => {
                if (mediaQuery.matches && !latched) {
                    latched = true
                    callback()
                }
            }

            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        },
        getSnapshot: () => {
            if (latched) {
                return true
            }
            if (readMatches()) {
                latched = true
            }
            return latched
        },
        getServerSnapshot: () => false,
    }
}

interface TerminalProps {
    outputNodes: readonly TerminalNode[]
}

const Terminal = ({ outputNodes }: TerminalProps) => {
    const [step, setStep] = useState<0 | 1 | 2>(0) // 0: typing command, 1: loading, 2: typing output
    const [userSkipped, setUserSkipped] = useState(false)
    const [reducedMotionStore] = useState(createReducedMotionLatch)
    const skipButtonRef = useRef<HTMLButtonElement>(null)
    const outputRef = useRef<HTMLDivElement>(null)
    const skipButtonFocusedRef = useRef(false)
    const shouldFocusOutputRef = useRef(false)

    const skippedByReducedMotion = useSyncExternalStore(
        reducedMotionStore.subscribe,
        reducedMotionStore.getSnapshot,
        reducedMotionStore.getServerSnapshot
    )

    const isSkipped = userSkipped || skippedByReducedMotion
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

            if (
                event.target instanceof Element &&
                event.target.closest('a, button, input, textarea, select')
            ) {
                return
            }

            setUserSkipped(true)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isAnimationComplete])

    useEffect(() => {
        if (
            isAnimationComplete &&
            (shouldFocusOutputRef.current || skipButtonFocusedRef.current)
        ) {
            shouldFocusOutputRef.current = false
            skipButtonFocusedRef.current = false
            outputRef.current?.focus({ preventScroll: true })
        }
    }, [isAnimationComplete])

    const handleSkipButtonClick = () => {
        if (
            document.activeElement === skipButtonRef.current ||
            skipButtonFocusedRef.current
        ) {
            shouldFocusOutputRef.current = true
        }
        setUserSkipped(true)
    }

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

                {!isAnimationComplete && (
                    <div className="mb-4">
                        <button
                            ref={skipButtonRef}
                            type="button"
                            onFocus={() => {
                                skipButtonFocusedRef.current = true
                            }}
                            onBlur={() => {
                                skipButtonFocusedRef.current = false
                            }}
                            onClick={handleSkipButtonClick}
                            className="border-cat-surface1 bg-cat-mantle text-cat-subtext0 hover:bg-cat-surface0 hover:text-cat-text focus-visible:outline-cat-blue rounded border px-2.5 py-1 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Skip animation
                        </button>
                    </div>
                )}

                {/* Output */}
                {(effectiveStep === 1 || effectiveStep === 2) && (
                    <Output
                        outputRef={outputRef}
                        nodes={outputNodes}
                        visibleChars={visibleOutputChars}
                        showAll={isAnimationComplete}
                        isProcessing={effectiveStep === 1}
                        isTyping={effectiveStep === 2 && !outputComplete}
                    />
                )}
            </div>
        </TerminalFrame>
    )
}

export default Terminal
