---
title: Deep Research
description: An Astro reader that turns local Markdown reports into a site for desktop and mobile reading.
order: 5
tech:
    - Astro
    - TypeScript
    - Python
    - Tailscale
githubUrl: https://github.com/damianpoole/deep-research
---

Deep Research renders a local directory of Markdown reports as a static Astro site. It can point at research notes or an Obsidian vault export, making longer reports easier to read on desktop and mobile.

An optional Tailscale serving workflow makes the generated site available across a tailnet. A report watcher rebuilds the site after files change, with a quiet period to allow partially written reports to finish.

## Highlights

- Configurable report directory outside the application repository
- Report titles and dates derived from frontmatter, with content and file metadata fallbacks
- Static pages for individual reports
- Optional Tailscale Serve integration
- Managed watcher commands for automatically rebuilding updated reports

## Project Scope

The application presents existing reports; it does not generate research. Markdown files remain the source of truth, with the site providing a reading interface.
