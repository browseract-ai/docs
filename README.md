# Browser-act Docs

This repository contains the Browser-act documentation site.

Browser-act is documented as a Skill-first browser automation CLI for AI agents:

- `Skill` is the first entry point for agents.
- `browser-act` CLI is the runtime that executes browser automation.
- Browser, session, profile, network, and security rules define the runtime model.

## Local Preview

Run the Mintlify preview from the repository root:

```bash
npx mintlify@latest dev
```

The local preview usually opens at `http://localhost:3000`.

## Information Architecture

- `Skill`: installation, quickstart, get-skills runtime, browser/runtime model, capabilities, and CLI reference.
- `Workflow`: task-oriented guides built from the real Browser-act CLI capabilities.

The root `skill.md` is an agent-ready capability summary for this documentation site. It is not the installable Browser-act product Skill.