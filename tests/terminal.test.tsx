// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test, vi } from 'vite-plus/test'
import Terminal from '@/components/Terminal'
import { terminalContent } from '@/data/terminalContent'
import { safeRenderMarkdownToNodes } from '@/utils/sanitizeHtml.server'
import { countTerminalChars } from '@/utils/terminalNodes'

const mockMatchMedia = (matches: boolean) => {
    const listeners = new Set<() => void>()
    const mediaQueryList = {
        matches,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addEventListener: vi.fn((_event: string, listener: () => void) => {
            listeners.add(listener)
        }),
        removeEventListener: vi.fn((_event: string, listener: () => void) => {
            listeners.delete(listener)
        }),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
    }

    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue(mediaQueryList))

    return mediaQueryList
}

afterEach(() => {
    cleanup()
    vi.useRealTimers()
    vi.unstubAllGlobals()
})

describe('safeRenderMarkdownToNodes', () => {
    test('pre-renders and sanitizes markdown into structured nodes', () => {
        const nodes = safeRenderMarkdownToNodes(
            '# Hello\n\nVisit [Example](https://example.com) <script>alert(1)</script><a href="https://ok.test" onclick="evil()">Safe</a>'
        )

        expect(nodes.length).toBeGreaterThan(0)
        expect(countTerminalChars(nodes)).toBeGreaterThan(0)

        const serialized = JSON.stringify(nodes)
        expect(serialized).toContain('"tag":"h1"')
        expect(serialized).toContain('"href":"https://example.com"')
        expect(serialized).not.toContain('script')
        expect(serialized).not.toContain('onclick')
    })
})

describe('Terminal typewriter UX', () => {
    const outputNodes = safeRenderMarkdownToNodes(terminalContent.output)

    test('reveals full content immediately when prefers-reduced-motion is enabled', () => {
        mockMatchMedia(true)

        render(<Terminal outputNodes={outputNodes} />)

        expect(screen.getByText(terminalContent.command)).toBeTruthy()
        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()
        expect(
            screen
                .getByRole('link', { name: 'AND Digital' })
                .getAttribute('href')
        ).toBe('https://www.and.digital/')
        expect(screen.queryByText(/click or press any key to skip/i)).toBeNull()
    })

    test('skips animation when clicking the terminal area', () => {
        vi.useFakeTimers()
        mockMatchMedia(false)

        render(<Terminal outputNodes={outputNodes} />)

        expect(
            screen.queryByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeNull()

        const skipHint = screen.getByText(/click or press any key to skip/i)
        fireEvent.click(skipHint)

        expect(screen.getByText(terminalContent.command)).toBeTruthy()
        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()
        expect(screen.queryByText(/click or press any key to skip/i)).toBeNull()
    })

    test('skips animation on keydown while ignoring Tab and shortcut chords', () => {
        vi.useFakeTimers()
        mockMatchMedia(false)

        render(<Terminal outputNodes={outputNodes} />)

        fireEvent.keyDown(window, { key: 'Tab' })
        fireEvent.keyDown(window, { key: 'c', ctrlKey: true })
        expect(
            screen.queryByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeNull()

        fireEvent.keyDown(window, { key: 'Enter' })
        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()
    })

    test('animates through command, processing, and pre-rendered output steps', () => {
        vi.useFakeTimers()
        mockMatchMedia(false)

        render(<Terminal outputNodes={outputNodes} />)

        // Advance past command typing (400ms delay + 29 chars * 125ms = 4025ms)
        act(() => {
            vi.advanceTimersByTime(4100)
        })
        // Flush step 0 -> step 1 transition timeout
        act(() => {
            vi.advanceTimersByTime(10)
        })
        expect(screen.getByText(/processing request/i)).toBeTruthy()

        // Advance past 800ms processing delay
        act(() => {
            vi.advanceTimersByTime(850)
        })
        // Advance through output reveal
        act(() => {
            vi.advanceTimersByTime(10000)
        })
        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()
        expect(screen.queryByText(/click or press any key to skip/i)).toBeNull()
    })
})
