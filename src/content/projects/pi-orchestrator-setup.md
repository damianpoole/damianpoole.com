---
title: Pi Orchestrator Setup
description: Portable Pi configuration that routes coding tasks to model-specific subagents by complexity.
order: 1
tech:
    - JavaScript
    - Node.js
    - Shell
    - Pi
githubUrl: https://github.com/damianpoole/pi-orchestrator-setup
---

Pi Orchestrator Setup packages a repeatable configuration for the Pi coding agent. A primary orchestrator coordinates work and delegates implementation to four roles, with model and reasoning settings matched to task complexity.

The setup provides separate OpenAI Codex and GitHub Copilot profiles, so the same workflow can be configured across machines while keeping provider choices explicit.

## Highlights

- Four task roles covering easy through very hard assignments
- Provider-qualified model routing and pinned package versions
- Repeatable installer with a dry-run preview and provider switching
- Managed settings that preserve unrelated local configuration
- Uninstall support that restores previous settings when managed values are unchanged

## Project Scope

This is a configuration and installation toolkit for Pi, with automated installer tests. Authentication happens separately on each machine; live provider access and macOS operation still need their own verification.
