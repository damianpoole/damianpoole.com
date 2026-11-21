import { useEffect, useMemo, useState } from 'react'

const FRAME_MS = 16

interface RevealState {
    token: object
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
    const runToken = useMemo(
        () => ({ totalLength, speed, startDelay, active, skip, resetKey }),
        [totalLength, speed, startDelay, active, skip, resetKey]
    )
    const [state, setState] = useState<RevealState>({
        token: runToken,
        count: 0,
    })

    useEffect(() => {
        if (!active || skip || totalLength <= 0) {
            return
        }

        let cancelled = false
        let timeoutId: ReturnType<typeof setTimeout> | undefined
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
                setState({ token: runToken, count: currentIndex })
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
    }, [totalLength, speed, startDelay, active, skip, runToken])

    const currentCount = state.token === runToken ? state.count : 0
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
