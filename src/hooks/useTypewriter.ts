import { useState, useEffect, useRef } from 'react'

const FRAME_MS = 16

export const useRevealCount = (
    totalLength: number,
    speed: number = 50,
    startDelay: number = 0,
    active: boolean = true,
    skip: boolean = false
) => {
    const [count, setCount] = useState(0)
    const cancelledRef = useRef(false)

    useEffect(() => {
        if (!active || skip || totalLength <= 0) {
            return
        }

        cancelledRef.current = false
        let timeoutId: ReturnType<typeof setTimeout>
        const tickInterval = Math.max(speed, FRAME_MS)
        const charsPerTick = Math.max(1, Math.round(tickInterval / speed))

        const startTyping = () => {
            let currentIndex = 0

            const typeStep = () => {
                if (cancelledRef.current) return
                currentIndex = Math.min(
                    totalLength,
                    currentIndex + charsPerTick
                )
                setCount(currentIndex)
                if (currentIndex < totalLength) {
                    timeoutId = setTimeout(typeStep, tickInterval)
                }
            }

            timeoutId = setTimeout(typeStep, tickInterval)
        }

        if (startDelay > 0) {
            timeoutId = setTimeout(() => {
                if (!cancelledRef.current) startTyping()
            }, startDelay)
        } else {
            startTyping()
        }

        return () => {
            cancelledRef.current = true
            clearTimeout(timeoutId)
        }
    }, [totalLength, speed, startDelay, active, skip])

    const visibleCount = skip
        ? totalLength
        : active
          ? Math.min(count, totalLength)
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
        skip
    )

    return {
        displayText: isComplete ? text : text.slice(0, count),
        isComplete,
    }
}
