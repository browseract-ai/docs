---
title: "Overview"
---

Integrations let another automation platform start a tested BrowserAct Bot and use its results.

> **Naming note:** BrowserAct manages these automations as **Bots**. Some third-party integrations may still display labels such as `Workflow`, `My Workflows`, or `Run a Workflow`. In those interfaces, the Workflow refers to the corresponding BrowserAct Bot.

## Before You Connect a Bot

Confirm that:

- The Bot builds and runs successfully in BrowserAct
- Required inputs are clearly defined
- The output fields are stable
- You have copied the correct Bot ID
- You have an API Key when the connection requires one

## Available Integration Paths

- `Make`: build visual business automation scenarios.
- `n8n`: build technical workflows with branching and transformations.
- `Zapier`: connect a Bot to supported triggers and actions.
- `MCP`: connect BrowserAct to compatible MCP clients.
- `API Keys`: create and manage the credentials used by supported integrations.

API request examples, authentication headers, task status, results, callbacks, and endpoint definitions remain in the existing API Reference.

Connect BrowserAct with Make, n8n, Zapier, or MCP to build end-to-end automations around your Bots. For example, you can trigger a Bot from a schedule or external event, pass in dynamic inputs, receive structured results, and then send the data to Google Sheets or another downstream application.

For custom integrations using the BrowserAct API or Webhooks, see the existing API Reference.

## Integration Guides

- [Send BrowserAct Data to Google Sheets](./guides/google-sheets.mdx)
- [Schedule BrowserAct Bot Runs](./guides/scheduled-runs.mdx)
- [Import and Export Make Scenarios as JSON](./guides/make-json-import-export.mdx)
- [Import and Export n8n Workflows as JSON](./guides/n8n-json-import-export.mdx)

## Typical Flow

```text
External trigger
  -> Run BrowserAct Bot
  -> Check Task status
  -> Read structured result
  -> Send result to the next application
```
