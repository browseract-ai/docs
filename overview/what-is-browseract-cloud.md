---
title: "Introduction"
---

BrowserAct Cloud is a cloud-based AI web data extraction platform. Describe the target website, filters, and data fields in natural language, with no code or selectors required.

BrowserAct explores and tests the live website to build a reusable Bot that you can run with new inputs and improve as your requirements or the website changes.

Each run returns clean, structured data that you can export as CSV or JSON, access through the BrowserAct API, or send to Make, n8n, and Zapier.

**Build once. Run reliably. Improve continuously.**

BrowserAct manages the cloud browser environment, Bot runs, Tasks, and structured results, so you do not need to install a local Agent or maintain browser infrastructure.

## Ways to Build a Bot

BrowserAct Cloud provides two ways to build a Bot:

- **Agent Built:** Describe the website, records, fields, and conditions in natural language. BrowserAct explores and tests the live website, then builds the Bot for you.
- **Workflow Built:** Build the process in the visual Workflow Builder by configuring nodes for navigation, interaction, extraction, conditions, loops, and output.

Both methods create Bots that can be managed and run from BrowserAct Cloud. Their building experiences are different, so each method has its own documentation under **Build a Bot**.

## What You Can Build

BrowserAct Cloud is designed for repeatable data extraction from complex websites, including pages that use:

- JavaScript-rendered content
- Search forms and filters
- Pagination or load-more interactions
- Listing pages and detail pages
- Tabs, pop-ups, and multi-step navigation
- Region-specific content

Common examples include collecting product information, reviews, public posts, business listings, supplier data, job listings, or competitor information.

## Who BrowserAct Cloud Is For

BrowserAct Cloud is useful for:

- Operations and research teams that need structured web data
- Marketing and growth teams conducting market or competitor research
- Small businesses that do not have dedicated automation engineers
- Agencies building repeatable data workflows for clients
- Developers who want a hosted Bot instead of maintaining browser infrastructure

## What You Get

A published Bot can:

- Accept configurable input values
- Reuse the published data extraction process
- Return results using the Bot's defined output fields
- Keep a record of its tasks and results
- Connect to supported automation tools

## BrowserAct Cloud and Agent CLI

BrowserAct offers two ways to work with browser automation: fully managed execution in BrowserAct Cloud, or local browser control through Agent CLI as part of your own Agent workflow.

| Dimension | BrowserAct Cloud | Agent CLI |
| --- | --- | --- |
| Execution environment | Runs in BrowserAct's managed cloud environment | Runs on your local machine or in your own Agent environment |
| Local Chrome state | Does not reuse your local Chrome login state | Can reuse supported local Chrome profiles or browser sessions |
| Computing resources | Uses managed cloud browser resources | Uses your local machine and environment |
| Primary users | Business users and teams using BrowserAct directly or through Make, n8n, Zapier, and API integrations | Developers and AI Agents using commands, Skills, or developer tools |
| Primary workflow | Build and run reusable web data extraction Bots | Add browser control to a local development or Agent workflow |

Choose BrowserAct Cloud when you want BrowserAct to manage the browser environment and Bot execution for you. Choose Agent CLI when you want your own Agent workflow to control a local browser directly. See the [Agent CLI documentation](https://docs.browseract.com/agent-cli/introduction) to get started.

## Next Step

Go to [Core Capabilities](./core-capabilities.md) to learn why teams choose BrowserAct Cloud and which capabilities support reliable extraction.
