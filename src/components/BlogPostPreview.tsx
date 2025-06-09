'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/types'

interface BlogPostPreviewProps {
    post: BlogPost
}

// Helper to format date, can be moved to a utils file later
function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export default function BlogPostPreview({ post }: BlogPostPreviewProps) {
    return (
        <article className="group border-border bg-card flex h-full flex-col overflow-hidden rounded-lg border shadow-md transition-all duration-300 ease-in-out hover:shadow-xl">
            {post.coverImage && (
                <Link
                    href={`/blog/${post.slug}`}
                    className="block overflow-hidden"
                    aria-hidden="true" // Decorative image link, content is linked below
                    tabIndex={-1}
                >
                    <div className="relative h-52 w-full sm:h-56 md:h-60">
                        <Image
                            src={post.coverImage}
                            alt={`Cover image for ${post.title}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </Link>
            )}
            <div className="flex flex-grow flex-col p-5 sm:p-6">
                <div className="text-muted-foreground mb-3 flex items-center text-xs">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    {post.readingTime && (
                        <>
                            <span className="mx-2">&bull;</span>
                            <span>{post.readingTime}</span>
                        </>
                    )}
                </div>
                <h2 className="group-hover:text-primary mb-2 text-xl font-semibold sm:text-2xl">
                    <Link href={`/blog/${post.slug}`}>
                        {/* The span with after:absolute makes the H2 area part of the link target */}
                        <span
                            className="static after:absolute after:inset-0 after:z-0"
                            aria-hidden="true"
                        />
                        {post.title}
                    </Link>
                </h2>
                {post.excerpt && (
                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow text-sm">
                        {post.excerpt}
                    </p>
                )}
                {post.tags && post.tags.length > 0 && (
                    <div className="relative z-10 mb-4">
                        {' '}
                        {/* z-10 to be above the h2's ::after pseudo-element if used for full click area */}
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                // Consider making tags Link components later to /blog/tags/[tag]
                                <span
                                    key={tag}
                                    className="bg-secondary text-secondary-foreground rounded-full px-2.5 py-1 text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                <div className="text-primary relative z-10 mt-auto pt-4 text-sm font-medium group-hover:underline">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center"
                    >
                        Read post
                        <span aria-hidden="true" className="ml-1">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    )
}
