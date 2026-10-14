# damianpoole.com

Personal website built with Astro, React, TypeScript, and Tailwind CSS. Hosted on Netlify. Vite+ provides Vite/Rolldown, Oxlint, Oxfmt, and Vitest.

## Setup

Use Node.js 22.18+, 24.11+, or 26+ and pnpm 11.3.0, then run `pnpm install --frozen-lockfile`. No global Vite+ installation is required; use `pnpm exec vp` for the local CLI.

## Scripts

| Command               | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| `pnpm dev`            | Start the Astro dev server                                  |
| `pnpm build`          | Build the static site into `dist`                           |
| `pnpm preview`        | Preview the Astro production build                          |
| `pnpm typecheck`      | Check TypeScript and Astro templates                        |
| `pnpm lint`           | Run Vite+ linting (Oxlint) and Astro template linting       |
| `pnpm lint:astro`     | Run the Astro-only ESLint compatibility fallback            |
| `pnpm fmt`            | Format with Vite+ (Oxfmt), including Astro and Tailwind     |
| `pnpm fmt:check`      | Check formatting                                            |
| `pnpm check`          | Run Vite+ format/lint/type checks and Astro template checks |
| `pnpm test`           | Run the Vitest regression tests once                        |
| `pnpm prettier:write` | Compatibility alias for `pnpm fmt`                          |
| `pnpm prettier:check` | Compatibility alias for `pnpm fmt:check`                    |

Astro owns the framework pipeline. Use `pnpm exec vp run dev`, `pnpm exec vp run build`, and `pnpm exec vp run preview` to run it through Vite+'s task runner. The built-in `vp dev`, `vp build`, and `vp preview` run plain Vite instead and are not the site commands. Astro's internal Vite dependency resolves to Vite+ core via the pnpm override.

Tooling configuration is in `vite.config.ts`; site integrations and aliases remain in `astro.config.ts`. Astro template rules remain in `eslint.config.mjs` because Oxlint cannot run custom-parser rules yet; `pnpm lint` and `pnpm check` include this fallback. Netlify runs `pnpm build` on Node 24.11.0.

The migration preserves the supported TypeScript, React hook, and Astro lint rules. Oxlint does not support the old React Compiler `config` and `gating` rules; `component-hook-factories` is superseded by `react/static-components`. Strict mode replaces `no-dupe-args` and `no-octal`. No Vitest v4 or tsdown compatibility settings are needed because the repository had neither runner configured.
