import { createRequire } from 'node:module'
import { expect, test } from 'vite-plus/test'

const require = createRequire(import.meta.url)
const requireFromAstro = createRequire(require.resolve('astro'))
const requireFromUnstorage = createRequire(
    requireFromAstro.resolve('unstorage')
)
const requireFromAnymatch = createRequire(
    requireFromUnstorage.resolve('anymatch')
)

type Picomatch = (pattern: string) => (path: string) => boolean

// Resolve the same transitive copies the site uses, rather than adding a direct dependency.
const matchers = [
    ['Astro', requireFromAstro('picomatch') as Picomatch],
    ['Anymatch', requireFromAnymatch('picomatch') as Picomatch],
] as const

test.each(matchers)(
    '%s rejects repeated extglobs before compiling them',
    (_consumer, picomatch) => {
        for (const pattern of ['+(draft).md', '*(draft).md']) {
            expect(() => picomatch(pattern)).toThrow(SyntaxError)
            expect(() => picomatch(pattern)).toThrow(
                'Repeated extglobs are disabled'
            )
        }
    }
)

test.each(matchers)(
    '%s still matches content globs and nonrepeating extglobs',
    (_consumer, picomatch) => {
        const markdown = picomatch('**/*.md')
        expect(markdown('posts/welcome.md')).toBe(true)
        expect(markdown('posts/welcome.json')).toBe(false)
        expect(picomatch('?(draft-)post.md')('draft-post.md')).toBe(true)
    }
)
