import { execFileSync, spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { afterEach, expect, test } from 'vite-plus/test'

const directories: string[] = []
const vp = join(process.cwd(), 'node_modules/.bin/vp')

function fixture(name: string, content: string, owner = 'tests') {
    const directory = mkdtempSync(join(process.cwd(), owner, 'toolchain-'))
    directories.push(directory)
    const path = join(directory, name)
    writeFileSync(path, content)
    return path
}

afterEach(() => {
    for (const directory of directories.splice(0)) {
        rmSync(directory, { recursive: true, force: true })
    }
})

test('Oxfmt formats Astro templates and is idempotent', () => {
    const path = fixture(
        'page.astro',
        '---\nconst title="Hello";\n---\n<h1>{title}</h1>\n'
    )
    execFileSync(vp, ['fmt', path])
    expect(readFileSync(path, 'utf8')).toContain("const title = 'Hello'")
    execFileSync(vp, ['fmt', '--check', path])
})

test('Oxlint still rejects conditional React hooks', () => {
    const path = fixture(
        'Component.tsx',
        `import { useState } from 'react'
export function Component({ enabled }: { enabled: boolean }) {
    if (enabled) useState(0)
    return null
}
`
    )
    const result = spawnSync(vp, ['lint', path], { encoding: 'utf8' })
    expect(result.status).toBe(1)
    expect(result.stdout + result.stderr).toContain('rules-of-hooks')
    expect(result.stdout + result.stderr).not.toContain('TS2307')
    writeFileSync(
        path,
        `import { useState } from 'react'
export function Component() {
    useState(0)
    return null
}
`
    )
    execFileSync(vp, ['lint', path], { stdio: 'pipe' })
})

test('Astro template linting rejects conflicting directives', () => {
    const path = fixture(
        'page.astro',
        '---\nconst title: string = "Hello"\n---\n<div set:html={title} set:text={title} />\n',
        'src'
    )
    const result = spawnSync('pnpm', ['lint:astro'], { encoding: 'utf8' })
    expect(result.status).toBe(1)
    expect(result.stdout + result.stderr).toContain(
        'astro/no-conflict-set-directives'
    )
    writeFileSync(
        path,
        '---\nconst title: string = "Hello"\n---\n<div set:text={title} />\n'
    )
    execFileSync('pnpm', ['lint:astro'], { stdio: 'pipe' })
})
