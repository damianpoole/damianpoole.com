import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    site: 'https://damianpoole.com',
    output: 'static',
    integrations: [react(), sitemap()],
    vite: {
        // Tailwind's Vite plugin is runtime-compatible here, but its published
        // types currently resolve against a different Vite version than Astro.
        plugins: [tailwindcss() as never],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    },
})
