// @vitest-environment jsdom
import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vite-plus/test'
import { useTypewriter } from '../src/hooks/useTypewriter'

afterEach(() => {
    cleanup()
    vi.useRealTimers()
})

describe('useTypewriter', () => {
    it('stays incomplete for empty text and types cleanly once text is provided', () => {
        vi.useFakeTimers()

        const { result, rerender } = renderHook(
            ({ text, speed, startDelay }) =>
                useTypewriter(text, speed, startDelay),
            {
                initialProps: { text: '', speed: 20, startDelay: 0 },
            }
        )

        expect(result.current).toEqual({ displayText: '', isComplete: false })

        act(() => {
            vi.advanceTimersByTime(50)
        })

        expect(result.current).toEqual({ displayText: '', isComplete: false })

        rerender({ text: 'Hi', speed: 20, startDelay: 0 })

        expect(result.current).toEqual({ displayText: '', isComplete: false })

        act(() => {
            vi.advanceTimersByTime(20)
        })

        expect(result.current).toEqual({ displayText: 'H', isComplete: false })

        act(() => {
            vi.advanceTimersByTime(20)
        })

        expect(result.current).toEqual({ displayText: 'Hi', isComplete: true })
    })

    it('resets progress and completion when text changes after completion', () => {
        vi.useFakeTimers()

        const { result, rerender } = renderHook(
            ({ text }) => useTypewriter(text, 20, 0),
            {
                initialProps: { text: 'ok' },
            }
        )

        act(() => {
            vi.advanceTimersByTime(40)
        })

        expect(result.current).toEqual({ displayText: 'ok', isComplete: true })

        rerender({ text: 'go!' })

        expect(result.current).toEqual({ displayText: '', isComplete: false })

        act(() => {
            vi.advanceTimersByTime(20)
        })

        expect(result.current).toEqual({ displayText: 'g', isComplete: false })

        act(() => {
            vi.advanceTimersByTime(40)
        })

        expect(result.current).toEqual({
            displayText: 'go!',
            isComplete: true,
        })
    })

    it('respects startDelay before typing characters', () => {
        vi.useFakeTimers()

        const { result } = renderHook(() => useTypewriter('ab', 20, 100))

        act(() => {
            vi.advanceTimersByTime(100)
        })

        expect(result.current).toEqual({ displayText: '', isComplete: false })

        act(() => {
            vi.advanceTimersByTime(20)
        })

        expect(result.current).toEqual({ displayText: 'a', isComplete: false })

        act(() => {
            vi.advanceTimersByTime(20)
        })

        expect(result.current).toEqual({ displayText: 'ab', isComplete: true })
    })
})
