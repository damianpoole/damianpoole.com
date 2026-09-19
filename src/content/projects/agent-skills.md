---
title: Agent Skills
description: Reusable agent workflows for triaging npm and Yarn audit findings in React applications.
order: 4
tech:
    - Markdown
    - React
    - npm
    - Yarn
githubUrl: https://github.com/damianpoole/agent-skills
---

Agent Skills is a small collection of instructions for coding agents working on dependency security in React applications. It currently contains separate npm and Yarn audit workflows.

Each workflow guides the agent through understanding the findings, choosing a proportionate fix, and checking that dependency changes still work with the application's framework and tooling.

## Highlights

- Groups findings by package, severity, dependency type, and fix availability
- Prefers compatible patch and minor updates before considering major upgrades
- Covers overrides and resolutions for transitive dependency issues
- Calls for audit, test, type, lint, and build checks where available
- Requires a summary of changes, remaining findings, and upgrade risks

## Project Scope

These are reusable Markdown workflows for an agent to follow, rather than a standalone security scanner. The focus is on keeping React dependency maintenance deliberate and reviewable.
