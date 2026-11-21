import { useEffect, useState } from 'react'

const FRAME_MS = 16

interface RevealState {
    key: string | number
    count: number
}

export const useRevealCount = (
    totalLength: number,
    speed: number = 50,
    startDelay: number = 0,
    active: boolean = true,
    skip: boolean = false,
    resetKey: string | number = totalLength
) => {
    const [state, setState] = useState<RevealState>({
        key: resetKey,
        count: 0,
    })

    useEffect(() => {
        let cancelled = false
        let timeoutId: ReturnType<typeof setTimeout> | undefined

        if (!active || skip || totalLength <= 0) {
            timeoutId = setTimeout(() => {
                if (!cancelled) {
                    setState({ key: resetKey, count: 0 })
                }
            }, 0)

            return () => {
                cancelled = true
                clearTimeout(timeoutId)
            }
        }

        const tickInterval = Math.max(speed, FRAME_MS)
        const charsPerTick = Math.max(1, Math.round(tickInterval / speed))

        const startTyping = () => {
            let currentIndex = 0

            const typeStep = () => {
                if (cancelled) return
                currentIndex = Math.min(
                    totalLength,
                    currentIndex + charsPerTick
                )
                setState({ key: resetKey, count: currentIndex })
                if (currentIndex < totalLength) {
                    timeoutId = setTimeout(typeStep, tickInterval)
                }
            }

            timeoutId = setTimeout(typeStep, tickInterval)
        }

        if (startDelay > 0) {
            timeoutId = setTimeout(() => {
                if (!cancelled) startTyping()
            }, startDelay)
        } else {
            startTyping()
        }

        return () => {
            cancelled = true
            clearTimeout(timeoutId)
        }
    }, [totalLength, speed, startDelay, active, skip, resetKey])

    const currentCount = state.key === resetKey ? state.count : 0
    const visibleCount = skip
        ? totalLength
        : active
          ? Math.min(currentCount, totalLength)
          : 0
    const isComplete = skip || (active && visibleCount >= totalLength)

    return { count: visibleCount, isComplete }
}

export const useTypewriter = (
    text: string,
    speed: number = 50,
    startDelay: number = 0,
    skip: boolean = false
) => {
    const { count, isComplete } = useRevealCount(
        text.length,
        speed,
        startDelay,
        text.length > 0,
        skip,
        text
    )

    return {
        displayText: isComplete ? text : text.slice(0, count),
        isComplete,
    }
}
