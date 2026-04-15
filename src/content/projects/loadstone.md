---
title: Loadstone
description: A RuneScape 3 wiki CLI for fast lookup, structured output, and LLM-friendly game data access.
order: 2
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

## Why I Built It

I wanted a sharper interface for exploring RS3 data from the terminal, especially for workflows where copying large wiki pages into an AI tool is wasteful. Loadstone focuses on getting the right slice of information quickly.
