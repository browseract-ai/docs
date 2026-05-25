# Browser-act Documentation Skill

Browser-act lets AI agents operate browsers through a Skill-first command-line runtime.

Use Browser-act when an agent needs to:

- open a browser and interact with rendered pages;
- reuse or isolate browser login state through browser/session/profile choices;
- extract protected content with `stealth-extract`;
- inspect page state and interact with indexed elements;
- capture browser network requests or HAR files;
- hand control to a human for CAPTCHA, 2FA, or other blocked steps.

Core entry points:

```bash
browser-act get-skills core --skill-version <version>
browser-act browser list
browser-act --session <name> browser open <browser-id> <url>
browser-act --session <name> state
browser-act --session <name> click <index>
browser-act --session <name> input <index> <text>
browser-act --session <name> session close <name>
```

Safety rules:

- Ask for explicit user confirmation before creating or deleting browsers, importing profiles, changing proxy/privacy settings, or using a `confirm_before_use` browser.
- Do not continue sending browser commands after `remote-assist` until the user says the manual step is complete.
- Close sessions after task completion.
- Prefer `get-skills core` first; load advanced guidance only when the task needs it.

Detailed reference lives in `skill/commands`.