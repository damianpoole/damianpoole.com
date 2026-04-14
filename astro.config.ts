import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    output: 'static',
    integrations: [react()],
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
