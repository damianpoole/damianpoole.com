import BlogPostPreview from '@/components/BlogPostPreview'
import { getAllBlogPosts } from '@/lib/markdownParser'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | Damian Poole',
    description:
        'Read the latest articles and thoughts from Damian Poole on web development, technology, and more.',
}

export default async function BlogPage() {
    const posts = getAllBlogPosts()

    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <header className="mb-12 text-center">
                <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Latest Posts
                </h1>
                <p className="text-muted-foreground mt-4 text-lg">
                    Exploring ideas in web development, software engineering,
                    and beyond.
                </p>
            </header>

            {posts.length === 0 ? (
                <div className="text-muted-foreground py-12 text-center">
                    <p className="text-xl">
                        No blog posts found yet. Check back soon!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                    {posts.map((post) => (
                        <BlogPostPreview key={post.slug} post={post} />
                    ))}
                </div>
            )}
        </div>
    )
}
