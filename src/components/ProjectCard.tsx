'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
    project: Project
}

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
        />
    </svg>
)

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group border-border bg-card text-card-foreground relative flex h-full flex-col overflow-hidden rounded-lg border shadow-md transition-all duration-300 ease-in-out hover:shadow-xl">
            {project.imageUrl && (
                <div className="relative h-48 w-full overflow-hidden sm:h-52 md:h-56">
                    <Image
                        src={project.imageUrl}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>
            )}
            <div className="flex flex-grow flex-col p-5 sm:p-6">
                <div className="mb-4 flex items-center">
                    <h3 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                        <Link href={`/projects/${project.id}`}>
                            <span
                                className="static after:absolute after:inset-0 after:z-0"
                                aria-hidden="true"
                            />
                            {project.title}
                        </Link>
                    </h3>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow text-sm">
                    {project.description}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                    <div className="relative z-10 mb-5">
                        <h4 className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
                            Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-secondary text-secondary-foreground rounded-full px-2.5 py-1 text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="border-border relative z-10 mt-auto flex items-center justify-between border-t pt-4 text-sm">
                    <span className="text-primary font-medium group-hover:underline">
                        View Details &rarr;
                    </span>
                    <div className="flex space-x-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-muted-foreground hover:text-primary inline-flex items-center transition-colors"
                                aria-label={`View live project: ${project.title}`}
                            >
                                Live{' '}
                                <ExternalLinkIcon className="ml-1 h-4 w-4" />
                            </a>
                        )}
                        {project.sourceUrl && (
                            <a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-muted-foreground hover:text-primary inline-flex items-center transition-colors"
                                aria-label={`View source code for: ${project.title}`}
                            >
                                Source{' '}
                                <ExternalLinkIcon className="ml-1 h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
