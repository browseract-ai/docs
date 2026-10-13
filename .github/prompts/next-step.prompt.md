---
mode: "agent"
description: "Use when: there is a task, blocker, or partial implementation and you need the single safest next step to move it forward."
tools: [read, search, edit, execute, todo]
---

Identify the most valuable next action for the current task and complete it with the smallest safe change.

Requirements:
- Start from the repository state and current task context.
- Decide whether the best next move is implementation, verification, research, or a narrow follow-up question.
- Keep scope tight and avoid unrelated cleanup or broad refactors.
- Validate the result with the smallest relevant command or check.
- Return a brief summary with objective, status, next action taken, evidence, and remaining risk.
