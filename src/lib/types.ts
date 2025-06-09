export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  sourceUrl?: string;
  category?: string;
}

/**
 * Represents a blog post, including frontmatter and derived content.
 */
export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO date string e.g., YYYY-MM-DD
  tags: string[];
  excerpt?: string;
  coverImage?: string; // Path to image, e.g., /images/blog/my-post.jpg
  content: string; // The Markdown content itself
  readingTime?: string; // e.g., "5 min read"
  mdxSource?: any; // Holds the compiled MDX source from next-mdx-remote
} 