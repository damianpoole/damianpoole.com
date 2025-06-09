import { getAllProjects, getProjectById } from '@/lib/projectsApi'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const projects = getAllProjects()
    return projects.map((project) => ({
        slug: project.id,
    }))
}

export async function generateMetadata({
    params,
}: ProjectDetailPageProps): Promise<Metadata> {
    const { slug } = await params
    const project = getProjectById(slug)

    if (!project) {
        return {
            title: 'Project Not Found | Damian Poole',
        }
    }

    return {
        title: `${project.title} | Projects | Damian Poole`,
        description: project.description.substring(0, 160),
        openGraph: project.imageUrl
            ? {
                  images: [{ url: project.imageUrl, alt: project.title }],
              }
            : undefined,
    }
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { slug } = await params
    const project = getProjectById(slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <Link
                    href="/projects"
                    className="text-primary hover:text-primary/80 inline-flex items-center text-sm font-medium transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-1.5 h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M17 10a.75.75 0 01-.75.75H5.56l2.72 2.72a.75.75 0 11-1.06 1.06l-4-4a.75.75 0 010-1.06l4-4a.75.75 0 011.06 1.06L5.56 9.25H16.25A.75.75 0 0117 10z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Back to all projects
                </Link>
            </div>

            <article className="prose prose-slate dark:prose-invert lg:prose-xl mx-auto w-full">
                <h1>{project.title}</h1>

                {project.imageUrl && (
                    <div className="border-primary relative my-8 aspect-video w-full overflow-hidden rounded-lg border shadow-xl">
                        <Image
                            src={project.imageUrl}
                            alt={`Cover image for ${project.title}`}
                            fill
                            className="not-prose object-cover"
                            priority
                        />
                    </div>
                )}

                <p className="lead">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                    <section className="my-8">
                        <h2>Technologies Used</h2>
                        <ul className="not-prose flex flex-wrap gap-2 pl-0">
                            {project.technologies.map((tech) => (
                                <li key={tech} className="list-none">
                                    <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 text-sm font-medium">
                                        {tech}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className="my-8">
                    <h2>Project Links</h2>
                    <ul className="list-none pl-0">
                        {project.liveUrl && (
                            <li className="mb-2">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 inline-flex items-center font-medium transition-colors"
                                >
                                    View Live Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="ml-1 h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        )}
                        {project.sourceUrl && (
                            <li className="mb-2">
                                <a
                                    href={project.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 inline-flex items-center font-medium transition-colors"
                                >
                                    View Source Code
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="ml-1 h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        )}
                        {!project.liveUrl && !project.sourceUrl && (
                            <li>
                                <p className="text-muted-foreground italic">
                                    No external links available for this
                                    project.
                                </p>
                            </li>
                        )}
                    </ul>
                </section>
            </article>
        </div>
    )
}
