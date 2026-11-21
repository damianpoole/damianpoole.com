import { type ReactNode } from 'react'

type TabKey = 'home' | 'blog' | 'projects'

interface TerminalFrameProps {
    activeTab?: TabKey
    children: ReactNode
}

const tabs: Array<{
    key: TabKey
    label: string
    href: string
}> = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'blog', label: 'Blog', href: '/blog/' },
    { key: 'projects', label: 'Projects', href: '/projects/' },
]

const TerminalFrame = ({ activeTab, children }: TerminalFrameProps) => {
    return (
        <div className="bg-cat-base text-cat-text flex min-h-screen w-full flex-col font-mono text-lg md:text-xl">
            <nav
                aria-label="Primary"
                className="border-cat-surface1 bg-cat-crust/35 mb-5 flex w-full flex-wrap items-end gap-2 border-b px-4 pt-4 text-sm md:px-8 md:pt-4 md:text-base"
            >
                {tabs.map((tab) => {
                    const isActive = tab.key === activeTab

                    return (
                        <a
                            key={tab.key}
                            href={tab.href}
                            aria-current={isActive ? 'page' : undefined}
                            className={[
                                'border-cat-surface1 flex min-w-[8.5rem] items-center justify-center rounded-t-lg border border-b-0 px-4 py-2 transition-colors',
                                isActive
                                    ? 'bg-cat-base text-cat-green'
                                    : 'bg-cat-mantle text-cat-subtext0 hover:bg-cat-surface0 hover:text-cat-text',
                            ].join(' ')}
                        >
                            <span className="tracking-[0.12em]">
                                {tab.label}
                            </span>
                        </a>
                    )
                })}
            </nav>

            <main className="w-full px-4 pb-4 md:px-8 md:pb-8">
                <div className="w-full">
                    <div className="w-full">{children}</div>
                </div>
            </main>
        </div>
    )
}

export default TerminalFrame
