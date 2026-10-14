---
title: "Configure Schedule Emails"
sidebarTitle: "Schedule Emails"
description: "Choose when BrowserAct should email scheduled Bot results."
---

Schedule emails help you receive Bot results without manually checking every scheduled run.

Schedule result emails are sent to the email address linked to your BrowserAct account by default. You can check the recipient under `When to email results` when creating a schedule.

## Email Options

## When Results Change

Choose `When results change` when you only want to be notified after BrowserAct detects a result change.

The first successful scheduled run creates the baseline. Later successful runs are compared with the previous successful result.

Use this option when you want to monitor changes such as:

- Product price changes
- Product availability changes
- New listings or removed listings
- Updated lead or market data
- Changed search results

## After Every Successful Run

Choose `After every successful run` when you want to receive an email each time the schedule runs successfully.

Use this option when every scheduled result matters, even if the result is the same as the previous run.

## Don't Send Result Emails

Choose `Don't send result emails` when you do not want emails for successful scheduled runs.

The schedule can still run, and run records can still be reviewed from BrowserAct.

## When Results Meet a Condition

Choose `When results meet a condition` when you only want an email in a specific situation.

After selecting this option, describe the condition the result must meet.

Example conditions:

```text
Email me when the product price drops below 50 dollars.
```

```text
Email me when the item becomes available.
```

```text
Email me when a new job listing includes remote work.
```

BrowserAct evaluates the scheduled run result against the condition and sends an email only when the condition is met.

## Failure Emails

`Email me if a run fails` controls whether BrowserAct sends an email when a scheduled run fails.

This setting is separate from successful result emails. Turning off result emails does not necessarily mean failure emails are turned off.
