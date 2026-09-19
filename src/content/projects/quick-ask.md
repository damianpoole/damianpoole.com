---
title: Quick Ask
description: A conversational desktop overlay for quick answers from your selected Omarchy AI agent.
order: 2
tech:
    - Python
    - QML
    - Omarchy
githubUrl: https://github.com/damianpoole/quick-ask
---

Quick Ask brings short AI conversations into an Omarchy desktop overlay. It uses an already authenticated Codex or Claude Code CLI, selected through Omarchy's default-agent setting, so questions and follow-ups fit into the current workspace.

Recent conversation context is kept in a bounded, in-memory transcript and cleared when the overlay closes or a new conversation starts.

## Highlights

- Conversational follow-ups without opening a separate chat application
- Markdown answer rendering, copying, and keyboard controls
- Restricted agent configuration by default, with a visible configuration indicator
- Explicit confirmation before opening links
- Optional global-shortcut helper that checks for conflicts and validates changes

## Project Scope

The plugin targets Omarchy Quattro and requires a supported, authenticated agent CLI. Agent installation, sign-in, and the optional desktop shortcut are separate setup steps.
