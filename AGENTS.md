Personal website built with Astro, React, TypeScript, and Tailwind CSS. Hosted on Netlify. Vite+ provides Vite/Rolldown, Oxlint, Oxfmt, and Vitest.

## Scripts

| Command               | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| `pnpm dev`            | Start the Astro dev server                                  |
| `pnpm build`          | Build the static site into `dist`                           |
| `pnpm preview`        | Preview the Astro production build                          |
| `pnpm typecheck`      | Check TypeScript and Astro templates (`astro check`)        |
| `pnpm lint`           | Run Vite+ linting (Oxlint) and Astro template linting       |
| `pnpm lint:astro`     | Run the Astro-only ESLint compatibility fallback            |
| `pnpm fmt`            | Format with Vite+ (Oxfmt), including Astro and Tailwind     |
| `pnpm fmt:check`      | Check formatting                                            |
| `pnpm check`          | Run Vite+ format/lint/type checks and Astro template checks |
| `pnpm test`           | Run the Vitest regression tests once                        |
| `pnpm prettier:write` | Compatibility alias for `pnpm fmt`                          |
| `pnpm prettier:check` | Compatibility alias for `pnpm fmt:check`                    |

Whenever a change is made to the codebase please run the following commands:

- `pnpm fmt`
- `pnpm check`
- `pnpm test`
- `pnpm build`

## Commit and push policy

Use the repository's Vite+ hooks for commits and pushes. Do not bypass hooks with `--no-verify`, environment variables, or Git configuration, and do not disable or weaken checks to make a change pass without explicit user approval. Fix failures at their source and report checks you cannot run. Passing checks do not replace reviewing the diff or auditing new tests for meaningful behavior coverage.
