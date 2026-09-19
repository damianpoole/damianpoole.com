---
image: ../../assets/projects/loadstone.png
title: Loadstone
description: A RuneScape 3 wiki CLI for fast lookup, structured output, and LLM-friendly game data access.
order: 6
tech:
    - TypeScript
    - Bun
    - Turborepo
    - CLI
githubUrl: https://github.com/damianpoole/Loadstone
---

Loadstone is a command-line tool for querying RuneScape 3 Wiki content and related player data in a way that works well for both humans and automated agents.

The project is designed around structured output, fast lookups, and options that reduce noise when you only need a specific section or field.

## Highlights

- Search pages with rich snippets
- Inspect wiki content and structured data
- Filter specific sections to reduce context size
- Fetch RuneMetrics-backed player profile data
- Return JSON output for scripting and agent use
- Explore wiki categories and related pages
- Reduce output with headings-only views and JSON field selection
- Cache responses locally with configurable expiry

## Using Loadstone

The CLI is published on npm as `loadstone-rs3`. It supports focused player queries for skills and quest progress, alongside wiki searches and page inspection.

## Why I Built It

I wanted a sharper interface for exploring RS3 data from the terminal, especially for workflows where copying large wiki pages into an AI tool is wasteful. Loadstone focuses on getting the right slice of information quickly.
