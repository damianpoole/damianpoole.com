import astro from 'eslint-plugin-astro'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

// Oxlint cannot run Astro's custom-parser template rules yet.
// Keep ESLint only for this framework-specific compatibility gap.
export default [
    { ignores: ['.astro/**', 'dist/**'] },
    ...astro.configs['flat/recommended'],
    {
        files: ['**/*.astro'],
        languageOptions: {
            parserOptions: { parser: tsParser },
            globals: { ...globals.browser, ...globals.node },
        },
    },
]
