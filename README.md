# damianpoole.com

Personal website built with Astro, React, TypeScript, and Tailwind CSS. Hosted on Netlify. Vite+ provides Vite/Rolldown, Oxlint, Oxfmt, and Vitest.

## Setup

Use Node.js 26.7.0 or later in the Node 26 series and Git 2.32+ with pnpm 11.3.0, then run `pnpm install --frozen-lockfile`. Older Node.js versions are no longer supported. No global Vite+ installation is required; use `pnpm exec vp` for the local CLI.

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

Tooling configuration is in `vite.config.ts`; site integrations and aliases remain in `astro.config.ts`. Astro template rules remain in `eslint.config.mjs` because Oxlint cannot run custom-parser rules yet; `pnpm lint` and `pnpm check` include this fallback. Netlify runs `pnpm build` on Node 26.7.0, as pinned in `netlify.toml`.

The migration preserves the supported TypeScript, React hook, and Astro lint rules. Oxlint does not support the old React Compiler `config` and `gating` rules; `component-hook-factories` is superseded by `react/static-components`. Strict mode replaces `no-dupe-args` and `no-octal`. No Vitest v4 or tsdown compatibility settings are needed because the repository had neither runner configured.

## Commit and push checks

`pnpm install` runs `prepare` to install Vite+'s hook dispatcher without rewriting agent instructions. Hook scripts in `.vite-hooks/` are committed; the generated `.vite-hooks/_/` directory is ignored. Run `pnpm exec vp hooks status` to inspect the current clone, or `pnpm exec vp hooks enable` to enable hooks explicitly. Existing hook setups and explicit local disable preferences are preserved.

- **Pre-commit:** check staged-file formatting, lint JavaScript/TypeScript with Oxlint, and lint Astro templates with ESLint. Checks do not automatically fix files; run `pnpm fmt` and stage the intended changes again when needed.
- **Pre-push:** run `pnpm check`, `pnpm test`, and `pnpm build`, stopping on the first failure.

Local hooks can be bypassed, so they are a local quality safeguard rather than a security boundary.

## Continuous integration

`.github/workflows/ci.yml` runs the same verification as the pre-push hook on pull requests targeting `main`, pushes to `main`, and manual dispatches:

- `pnpm check` — formatting, linting, and TypeScript/Astro checks.
- `pnpm test` — regression tests.
- `pnpm build` — the Astro production build (not the plain Vite `vp build` command).

The workflow uses `voidzero-dev/setup-vp` to select Node.js from `package.json`, resolve Vite+ from the project's catalog, and install dependencies with a frozen lockfile and package-manager caching. Actions are pinned to commit SHAs. The workflow has read-only repository permissions, does not retain checkout credentials, and does not deploy the site or require secrets.

After the first workflow run, select **Verify** as a required status check in the `main` branch ruleset. Keep the pull-request requirement enabled so changes must pass CI before you merge them. Netlify remains responsible for production deployments after a merge to `main`.
