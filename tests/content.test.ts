import { describe, expect, test } from 'vite-plus/test'
import { formatDate, isHttpUrl, showEntry } from '../src/utils/content'

describe('content utilities', () => {
    test('showEntry hides drafts only in production', () => {
        expect(showEntry(false, true)).toBe(true)
        expect(showEntry(true, true)).toBe(false)
        expect(showEntry(false, false)).toBe(true)
        expect(showEntry(true, false)).toBe(true)
    })

    test('formatDate formats dates in en-GB long format', () => {
        expect(formatDate(new Date('2026-04-14T00:00:00Z'))).toBe(
            '14 April 2026'
        )
    })

    test('isHttpUrl accepts http and https URLs and rejects unsafe protocols', () => {
        expect(isHttpUrl('https://damianpoole.com/projects/')).toBe(true)
        expect(isHttpUrl('http://localhost:4321')).toBe(true)
        expect(isHttpUrl('javascript:alert(1)')).toBe(false)
        expect(isHttpUrl('data:text/html,<script>alert(1)</script>')).toBe(
            false
        )
        expect(isHttpUrl('file:///etc/passwd')).toBe(false)
        expect(isHttpUrl('mailto:test@example.com')).toBe(false)
        expect(isHttpUrl('not-a-url')).toBe(false)
    })
})
