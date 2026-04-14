import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const urlField = z.string().refine((value) => URL.canParse(value), {
    message: 'Must be a valid URL',
})

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        draft: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
    }),
})

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.number().int().nonnegative(),
        tech: z.array(z.string()),
        image: z.string().optional(),
        githubUrl: urlField.optional(),
        liveUrl: urlField.optional(),
        draft: z.boolean().default(false),
    }),
})

export const collections = { blog, projects }
