'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// Consider moving to a constants file or types definition
const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
]

// Placeholder for a Mobile Menu Icon (e.g., Hamburger)
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
        />
    </svg>
)

// Close Icon for Mobile Menu
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
        />
    </svg>
)

// Sun Icon for Theme Toggle
const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM17.836 17.836a.75.75 0 00-1.06-1.06l-1.59 1.59a.75.75 0 101.06 1.06l1.59-1.59zM12 18a.75.75 0 00.75.75V21a.75.75 0 00-1.5 0v-2.25A.75.75 0 0012 18zM7.758 17.303a.75.75 0 00-1.06 1.06l-1.59-1.59a.75.75 0 00-1.06-1.06l1.59-1.59a.75.75 0 001.06 0zM6.25 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016.25 12zM6.106 5.106a.75.75 0 011.06 0l1.59 1.59a.75.75 0 01-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06z" />
    </svg>
)

// Moon Icon for Theme Toggle
const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.51 1.713-6.634 4.362-8.467a.75.75 0 01.819.162z"
            clipRule="evenodd"
        />
    </svg>
)

export default function Header() {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Simplified skeleton for pre-mount state to reduce duplication
    // and ensure it doesn't flash too differently.
    const SkeletonHeader = () => (
        <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
            <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-xl font-bold sm:text-2xl">
                    Damian Poole
                </Link>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="bg-muted/50 hidden h-8 w-48 animate-pulse rounded-md md:block"></div>{' '}
                    {/* Nav links placeholder */}
                    <div className="bg-muted/50 h-9 w-9 animate-pulse rounded-md"></div>{' '}
                    {/* Theme toggle placeholder */}
                    <div className="bg-muted/50 h-6 w-6 animate-pulse rounded-md md:hidden"></div>{' '}
                    {/* Mobile menu placeholder */}
                </div>
            </div>
        </header>
    )

    if (!mounted) {
        return <SkeletonHeader />
    }

    return (
        <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
            <nav className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="text-foreground hover:text-primary text-xl font-bold transition-colors sm:text-2xl"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Damian Poole
                </Link>

                <div className="flex items-center space-x-2 sm:space-x-4">
                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-1 md:flex">
                        {navLinks.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                (link.href !== '/' &&
                                    pathname.startsWith(link.href))
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                        className="text-muted-foreground hover:bg-muted/50 hover:text-foreground focus-visible:ring-ring ring-offset-background inline-flex items-center justify-center rounded-md p-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-muted-foreground hover:bg-muted/50 hover:text-foreground focus-visible:ring-ring ring-offset-background inline-flex items-center justify-center rounded-md p-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            aria-label="Toggle menu"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <CloseIcon className="h-6 w-6" />
                            ) : (
                                <MenuIcon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu Panel */}
            {mobileMenuOpen && (
                <div className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 absolute top-16 right-0 left-0 z-40 w-full border-b backdrop-blur md:hidden">
                    <div className="container mx-auto max-w-screen-2xl space-y-1 px-4 pt-2 pb-3 sm:px-6 lg:px-8">
                        {navLinks.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                (link.href !== '/' &&
                                    pathname.startsWith(link.href))
                            return (
                                <Link
                                    key={`mobile-${link.label}`}
                                    href={link.href}
                                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                                        isActive
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </header>
    )
}
