import { useState, useEffect, useRef } from 'react'

export const useTypewriter = (
    text: string,
    speed: number = 50,
    startDelay: number = 0
) => {
    const [displayText, setDisplayText] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const cancelledRef = useRef(false)

    useEffect(() => {
        cancelledRef.current = false
        let timeoutId: ReturnType<typeof setTimeout>

        const startTyping = () => {
            setIsTyping(true)
            let currentIndex = 0

            const typeChar = () => {
                if (cancelledRef.current) return
                if (currentIndex < text.length) {
                    setDisplayText(text.slice(0, currentIndex + 1))
                    currentIndex++
                    timeoutId = setTimeout(typeChar, speed)
                } else {
                    setIsTyping(false)
                    setIsComplete(true)
                }
            }

            timeoutId = setTimeout(typeChar, speed)
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
    }, [text, speed, startDelay])

    return { displayText, isTyping, isComplete }
}
