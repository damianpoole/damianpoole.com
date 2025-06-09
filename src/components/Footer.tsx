interface SocialLink {
    name: string
    href: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> // Optional icon component
}

export default function Footer() {
    const currentYear = new Date().getFullYear()

    // Placeholder for social links - can be populated later
    const socialLinks: SocialLink[] = [
        // { name: 'GitHub', href: 'https://github.com/damianpoole', icon: SVGComponentForGitHub },
        // { name: 'LinkedIn', href: 'https://linkedin.com/in/damianpoole', icon: SVGComponentForLinkedIn },
        // { name: 'Twitter', href: 'https://x.com/damianpoole', icon: SVGComponentForTwitter },
    ]

    return (
        <footer className="border-border bg-background text-muted-foreground border-t">
            <div className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-between px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-sm">
                    &copy; {currentYear} Damian Poole. All rights reserved.
                </p>

                {socialLinks.length > 0 ? (
                    <div className="mt-4 flex space-x-4 sm:mt-0">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.icon ? (
                                    <link.icon className="h-5 w-5" />
                                ) : (
                                    link.name
                                )}
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="mt-4 sm:mt-0">
                        <span className="text-xs italic">
                            {/* Connect with me soon! */}
                        </span>
                    </div>
                )}
            </div>
        </footer>
    )
}
