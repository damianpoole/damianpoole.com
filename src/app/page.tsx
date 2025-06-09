import Link from 'next/link'

export default function HomePage() {
    return (
        <main className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[calc(100vh-10rem)] md:py-16">
            {/* 
        min-h calculation: 100vh - header height (4rem or 64px) - footer height (approx 4-6rem or 64-96px, adjust as needed)
        Header is h-16 (4rem). Footer is not fixed height but py-8 (2rem top/bottom = 4rem content + borders). Let's estimate footer contribution to be around 4rem too for now for centering.
        So, 100vh - 4rem (header) - 4rem (footer space estimate) = 100vh - 8rem. 
        Adjust sm:min-h if header/footer heights change significantly or become dynamic.
      */}

            <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I&apos;m <span className="text-primary">Damian Poole</span>.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl text-lg sm:text-xl md:max-w-2xl md:text-2xl">
                I&apos;m a software developer, lifelong learner, and technology
                enthusiast. Welcome to my personal space on the web where I
                share my projects, thoughts, and experiments.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                    href="/projects"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center justify-center rounded-md px-8 py-3 text-base font-medium shadow transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                    Explore My Work
                </Link>
                <Link
                    href="/blog"
                    className="border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex items-center justify-center rounded-md border px-8 py-3 text-base font-medium shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                    Read My Thoughts
                </Link>
            </div>
        </main>
    )
}
