# BrowserAct Documentation Skill

BrowserAct helps AI agents operate real browsers through a Skill-first CLI Runtime.

Use BrowserAct when a user asks an Agent to open pages, read page state, click, type, extract content, reuse a browser session, inspect network requests, handle CAPTCHA, or hand control to a human.

Start with runtime instructions:

```bash
browser-act get-skills core --skill-version <version>
```

Then use the BrowserAct CLI for browser automation. Prefer named sessions, read page state before acting, and close sessions when work is complete.

Ask for confirmation before sensitive operations, including creating or deleting browsers, importing profiles, changing proxy or privacy settings, using `chrome-direct`, or opening a `confirm_before_use` browser.

Use Workflow documentation only when the user asks about BrowserAct hosted canvas workflows: visual canvas automation, natural-language nodes, hosted workflow runs, scheduling, execution history, integrations, or API reference.

For command details, see `skill/commands`.
