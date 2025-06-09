import { notFound } from 'next/navigation'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/markdownParser'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

// Helper to format date, can be moved to a utils file later
function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export async function generateStaticParams() {
    const posts = getAllBlogPosts()
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const post = await getBlogPostBySlug(params.slug)

    if (!post) {
        return {
            title: 'Post Not Found | Damian Poole Blog',
        }
    }

    return {
        title: `${post.title} | Blog | Damian Poole`,
        description: post.excerpt || 'A blog post by Damian Poole.',
        openGraph: {
            title: post.title,
            description: post.excerpt || 'A blog post by Damian Poole.',
            type: 'article',
            publishedTime: post.date,
            authors: ['Damian Poole'],
            tags: post.tags,
            images: post.coverImage
                ? [
                      {
                          url: post.coverImage, // Assuming relative path, make sure it's absolute for OpenGraph if needed
                          // width: 1200, // Optional: Specify image dimensions
                          // height: 630,
                      },
                  ]
                : [],
        },
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getBlogPostBySlug(params.slug)

    if (!post || !post.mdxSource) {
        notFound() // Triggers 404 page if post or mdxSource is missing
    }

    return (
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <article className="prose prose-slate dark:prose-invert lg:prose-lg xl:prose-xl mx-auto w-full">
                <header className="not-prose mb-8">
                    <h1 className="text-foreground mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                        {post.title}
                    </h1>
                    <div className="text-muted-foreground text-sm">
                        <time dateTime={post.date}>
                            {formatDate(post.date)}
                        </time>
                        {post.readingTime && (
                            <>
                                <span className="mx-2">&bull;</span>
                                <span>{post.readingTime}</span>
                            </>
                        )}
                    </div>
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                {/* Render MDX content */}
                <MDXRemote {...post.mdxSource} />
            </article>
        </div>
    )
}
