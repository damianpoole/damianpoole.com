Personal website built with React, TypeScript, Vite, and Tailwind CSS. Hosted on Netlify.

## Scripts

| Command               | Description              |
| --------------------- | ------------------------ |
| `pnpm dev`            | Start dev server         |
| `pnpm build`          | build for prod           |
| `pnpm typecheck`      | Type-check               |
| `pnpm preview`        | Preview production build |
| `pnpm lint`           | Run ESLint               |
| `pnpm prettier:write` | Format with Prettier     |
| `pnpm prettier:check` | Check formatting         |

Whenever a change is made to the codebase please run the following commands:

- `pnpm lint`
- `pnpm prettier:write`
- `pnpm typecheck`

## Commit and push policy

Use the repository's Vite+ hooks for commits and pushes. Do not bypass hooks with `--no-verify`, environment variables, or Git configuration, and do not disable or weaken checks to make a change pass without explicit user approval. Fix failures at their source and report checks you cannot run. Passing checks do not replace reviewing the diff or auditing new tests for meaningful behavior coverage.
