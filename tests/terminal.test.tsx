// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { afterEach, describe, expect, test, vi } from 'vite-plus/test'
import Terminal from '@/components/Terminal'
import { terminalContent } from '@/data/terminalContent'
import { terminalOutputMarkdown } from '@/data/terminalOutput.server'
import { safeRenderMarkdownToNodes } from '@/utils/sanitizeHtml.server'
import { countTerminalChars } from '@/utils/terminalNodes'

const mockMatchMedia = (initialMatches: boolean) => {
    const listeners = new Set<() => void>()
    const mediaQueryList = {
        matches: initialMatches,
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
        setMatches(next: boolean) {
            mediaQueryList.matches = next
            for (const listener of listeners) {
                listener()
            }
        },
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
    const outputNodes = safeRenderMarkdownToNodes(terminalOutputMarkdown)

    test('reveals full content immediately when prefers-reduced-motion is enabled and keeps it revealed if toggled off', () => {
        const mediaQuery = mockMatchMedia(true)

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
        expect(
            screen.queryByRole('button', { name: /skip animation/i })
        ).toBeNull()

        // Disabling reduced motion later must not hide or rewind revealed content
        act(() => {
            mediaQuery.setMatches(false)
        })

        expect(screen.getByText(terminalContent.command)).toBeTruthy()
        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()
        expect(
            screen.queryByRole('button', { name: /skip animation/i })
        ).toBeNull()
    })

    test('latches revealed state when prefers-reduced-motion is enabled mid-animation', () => {
        vi.useFakeTimers()
        const mediaQuery = mockMatchMedia(false)

        render(<Terminal outputNodes={outputNodes} />)

        expect(
            screen.queryByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeNull()

        act(() => {
            mediaQuery.setMatches(true)
        })

        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()

        act(() => {
            mediaQuery.setMatches(false)
        })

        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()
    })

    test('skips animation via the focusable Skip animation button and terminal area clicks without intercepting links', () => {
        vi.useFakeTimers()
        mockMatchMedia(false)

        render(<Terminal outputNodes={outputNodes} />)

        // Clicking a navigation link does not trigger terminal skip
        const blogLink = screen.getByRole('link', { name: /blog/i })
        fireEvent.click(blogLink)
        expect(
            screen.queryByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeNull()

        // Clicking the native Skip animation button reveals full output
        const skipButton = screen.getByRole('button', {
            name: /skip animation/i,
        })
        fireEvent.click(skipButton)

        expect(screen.getByText(terminalContent.command)).toBeTruthy()
        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()
        expect(
            screen.queryByRole('button', { name: /skip animation/i })
        ).toBeNull()
    })

    test('skips animation on keydown while preserving Space default action and ignoring Tab/shortcuts', () => {
        vi.useFakeTimers()
        mockMatchMedia(false)

        render(<Terminal outputNodes={outputNodes} />)

        fireEvent.keyDown(window, { key: 'Tab' })
        fireEvent.keyDown(window, { key: 'c', ctrlKey: true })
        expect(
            screen.queryByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeNull()

        const spaceEvent = new KeyboardEvent('keydown', {
            key: ' ',
            cancelable: true,
        })
        act(() => {
            window.dispatchEvent(spaceEvent)
        })
        expect(spaceEvent.defaultPrevented).toBe(false)
        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()
    })

    test('renders image-only markdown and trailing void elements when completed', () => {
        mockMatchMedia(true)

        const imageOnlyNodes = safeRenderMarkdownToNodes(
            '![Demo screenshot](https://example.com/demo.png)'
        )
        const { unmount } = render(<Terminal outputNodes={imageOnlyNodes} />)
        const image = screen.getByRole('img', { name: 'Demo screenshot' })
        expect(image.getAttribute('src')).toBe('https://example.com/demo.png')
        unmount()

        const trailingHrNodes = safeRenderMarkdownToNodes('Final line\n\n---')
        const { container } = render(<Terminal outputNodes={trailingHrNodes} />)
        expect(screen.getByText('Final line')).toBeTruthy()
        expect(container.querySelector('hr')).toBeTruthy()
    })

    test('animates through partial command, processing, partial output, and completed states', () => {
        vi.useFakeTimers()
        mockMatchMedia(false)

        render(<Terminal outputNodes={outputNodes} />)

        // Partial command reveal
        act(() => {
            vi.advanceTimersByTime(400 + 125 * 6)
        })
        expect(screen.getByText('prompt')).toBeTruthy()
        expect(screen.queryByText(/processing request/i)).toBeNull()

        // Finish command typing and flush step 0 -> step 1 transition
        act(() => {
            vi.advanceTimersByTime(3500)
        })
        act(() => {
            vi.advanceTimersByTime(10)
        })
        expect(screen.getByText(/processing request/i)).toBeTruthy()

        // Advance past 800ms processing delay into partial output reveal
        act(() => {
            vi.advanceTimersByTime(850)
        })
        act(() => {
            vi.advanceTimersByTime(16 * 5)
        })
        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()
        expect(
            screen.queryByText(/The goal is to solve the problem/i)
        ).toBeNull()
        expect(
            screen.getByRole('button', { name: /skip animation/i })
        ).toBeTruthy()

        // Advance to full completion
        act(() => {
            vi.advanceTimersByTime(10000)
        })
        expect(
            screen.getByText(/The goal is to solve the problem/i)
        ).toBeTruthy()
        expect(
            screen.queryByRole('button', { name: /skip animation/i })
        ).toBeNull()
    })

    test('hydrates server-rendered markup cleanly without recoverable errors', () => {
        const html = renderToString(<Terminal outputNodes={outputNodes} />)
        const container = document.createElement('div')
        container.innerHTML = html
        document.body.appendChild(container)

        mockMatchMedia(true)
        const onRecoverableError = vi.fn()

        let root: ReturnType<typeof hydrateRoot> | undefined
        act(() => {
            root = hydrateRoot(
                container,
                <Terminal outputNodes={outputNodes} />,
                {
                    onRecoverableError,
                }
            )
        })

        expect(onRecoverableError).not.toHaveBeenCalled()
        expect(
            screen.getByRole('heading', { level: 1, name: 'Damian Poole' })
        ).toBeTruthy()

        act(() => {
            root?.unmount()
        })
        container.remove()
    })
})
