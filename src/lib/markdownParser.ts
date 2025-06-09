import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from './types';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/blog');

/**
 * Calculates the estimated reading time for a given text.
 * @param text The text content.
 * @returns A string like "5 min read".
 */
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Parses a Markdown file and returns its data and content.
 * This is used by getAllBlogPosts for preview data and doesn't serialize MDX.
 */
function parseMarkdownFileForPreview(filePath: string, slug: string): BlogPost {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  if (!data.title || !data.date || !data.tags) {
    throw new Error(`Missing required frontmatter in ${filePath}: title, date, and tags are required.`);
  }

  return {
    slug,
    title: data.title as string,
    date: data.date as string, 
    tags: data.tags as string[],
    excerpt: data.excerpt as string | undefined,
    coverImage: data.coverImage as string | undefined,
    content, // Raw Markdown content
    readingTime: calculateReadingTime(content),
    // mdxSource is not populated here as it's not needed for previews
  };
}

/**
 * Fetches all blog posts, sorted by date in descending order (for previews).
 */
export function getAllBlogPosts(): BlogPost[] {
  let allPosts: BlogPost[] = [];
  try {
    const filenames = fs.readdirSync(POSTS_DIRECTORY);
    allPosts = filenames
      .filter(filename => /\.(md|mdx)$/.test(filename))
      .map(filename => {
        const slug = filename.replace(/\.(md|mdx)$/, '');
        const filePath = path.join(POSTS_DIRECTORY, filename);
        try {
          return parseMarkdownFileForPreview(filePath, slug);
        } catch (error) {
          console.error(`Error parsing ${filename} for preview:`, error);
          return null; 
        }
      })
      .filter((post): post is BlogPost => post !== null); 

    allPosts.sort((postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime());

  } catch (error) {
    console.warn('Could not read blog posts directory. Returning empty array. Error:', error);
    return []; 
  }
  return allPosts;
}

/**
 * Fetches a single blog post by its slug and serializes its MDX content.
 * @param slug The slug of the blog post to fetch.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const filenames = fs.readdirSync(POSTS_DIRECTORY);
  const targetFilename = filenames.find(filename => 
    filename.replace(/\.(md|mdx)$/, '') === slug
  );

  if (targetFilename) {
    const filePath = path.join(POSTS_DIRECTORY, targetFilename);
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      if (!data.title || !data.date || !data.tags) {
        throw new Error(`Missing required frontmatter in ${filePath}: title, date, and tags are required.`);
      }

      const mdxSource = await serialize(content, {
        mdxOptions: {
          rehypePlugins: [rehypeHighlight],
        },
        parseFrontmatter: false, // Frontmatter is already parsed by gray-matter
      });

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        tags: data.tags as string[],
        excerpt: data.excerpt as string | undefined,
        coverImage: data.coverImage as string | undefined,
        content, // Keep raw content available if needed
        readingTime: calculateReadingTime(content),
        mdxSource,
      };
    } catch (error) {
      console.error(`Error parsing or serializing blog post ${slug}:`, error);
      return undefined;
    }
  }
  return undefined;
}

/**
 * Fetches all unique tags from all blog posts.
 */
export function getAllPostTags(): string[] {
  const posts = getAllBlogPosts(); // Uses the preview version, which is fine for tags
  const tags = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
} 