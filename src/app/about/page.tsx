import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <article className="prose prose-slate dark:prose-invert lg:prose-xl mx-auto">
                <h1 className="mb-10 text-center sm:mb-12">About Me</h1>

                <section className="mb-12 flex flex-col items-center gap-8 md:flex-row md:items-start">
                    <div className="w-40 flex-shrink-0 sm:w-48 md:w-56">
                        <Image
                            src="/images/damian.jpg"
                            alt="Damian Poole"
                            width={224}
                            height={224}
                            className="aspect-square rounded-4xl object-cover shadow-xl"
                            priority
                        />
                    </div>
                    <div className="flex-grow">
                        <p className="lead mt-0">
                            Hello! I&apos;m Damian Poole, a passionate software
                            developer with a love for creating elegant and
                            efficient solutions to complex problems. This
                            website is my digital space to share my work,
                            thoughts, and experiments.
                        </p>
                        <p>
                            I believe in the power of technology to transform
                            ideas into reality and strive to continuously learn
                            and adapt in this ever-evolving field. My journey
                            into tech has been driven by a curiosity for how
                            things work and a desire to build tools that make a
                            difference.
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2>My Journey</h2>
                    <p>
                        (Placeholder: A brief narrative about your journey into
                        technology, key experiences, or what sparked your
                        interest. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.)
                    </p>
                </section>

                <section className="mb-12">
                    <h2>My Philosophy / What I Value</h2>
                    <p>
                        (Placeholder: Discuss your approach to development,
                        collaboration, learning, or any core values you bring to
                        your work. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.)
                    </p>
                </section>

                <section className="mb-12">
                    <h2>What I Do</h2>
                    <p>
                        (Placeholder: Briefly describe your main areas of
                        expertise, the types of projects you enjoy, or
                        technologies you specialize in. Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.)
                    </p>
                </section>

                <section>
                    <h2>Connect With Me</h2>
                    <p>You can find me on the following platforms:</p>
                    <ul className="list-none pl-0">
                        <li className="mb-3">
                            <Link
                                href="https://github.com/damianpoole"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 font-medium transition-colors"
                            >
                                GitHub
                            </Link>
                            <span className="text-muted-foreground">
                                {' '}
                                - Where I share my code and contribute to open
                                source.
                            </span>
                        </li>
                        <li className="mb-3">
                            <Link
                                href="https://linkedin.com/in/damianpoole"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 font-medium transition-colors"
                            >
                                LinkedIn
                            </Link>
                            <span className="text-muted-foreground">
                                {' '}
                                - For my professional profile and network.
                            </span>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    )
}
