---
title: OpenCode Session Search for Herdr
description: Fuzzy-search previous OpenCode conversations, preview their contents, and resume or fork them from Herdr.
order: 3
tech:
    - TypeScript
    - Bun
    - fzf
    - Herdr
githubUrl: https://github.com/damianpoole/herdr-opencode-sessions
---

OpenCode Session Search adds a temporary session picker to Herdr. It makes previous coding conversations searchable by title, project, original directory, date, and recent transcript text.

Conversation previews provide context before reopening a session, while keyboard shortcuts choose whether to continue in the current workspace, open a new workspace, or fork the conversation.

## Highlights

- Fuzzy search across session metadata and recent conversation excerpts
- Transcript previews alongside the result list
- Shortcuts to resume in a new tab or workspace, or fork a session
- Root sessions shown by default, with an option to include subagent sessions
- Reads session data through OpenCode's database command without writing to the database

## Project Scope

The plugin integrates Herdr, OpenCode, Bun, and fzf. It is a focused navigation tool for returning to existing agent conversations from the terminal workspace.
