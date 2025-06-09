import { getAllProjects } from '@/lib/projectsApi'
import ProjectCard from '@/components/ProjectCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects | Damian Poole',
    description:
        'Explore a collection of projects by Damian Poole, showcasing work in web development and other technology areas.',
}

export default function ProjectsPage() {
    const projects = getAllProjects()

    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <header className="mb-12 text-center">
                <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
                    My Projects
                </h1>
                <p className="text-muted-foreground mt-4 text-lg">
                    A collection of my work, experiments, and things I&apos;m
                    proud to share.
                </p>
            </header>

            {projects.length === 0 ? (
                <div className="text-muted-foreground text-center">
                    <p className="text-xl">
                        No projects to display at the moment. Please check back
                        soon!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    )
}
