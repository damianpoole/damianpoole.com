import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { isHttpUrl } from './utils/content'

const urlField = z.string().refine(isHttpUrl, {
    message: 'Must be a valid http(s) URL',
})

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        draft: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
    }),
})

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            order: z.number().int().nonnegative(),
            tech: z.array(z.string()),
            image: image().optional(),
            githubUrl: urlField.optional(),
            liveUrl: urlField.optional(),
            draft: z.boolean().default(false),
        }),
})

export const collections = { blog, projects }
