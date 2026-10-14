---
title: "Schedule FAQ"
sidebarTitle: "Schedule FAQ"
description: "Answers to common questions about BrowserAct Bot schedules."
---

## Can I create multiple schedules for one Bot?

Yes. You can create multiple schedules for the same Bot.

Use this when you want to run the same Bot with different inputs, such as monitoring multiple products, pages, keywords, or URLs.

Each schedule keeps its own timing, inputs, email settings, retry settings, and run history.

## How do I set up monitors on multiple URLs at once? (Bulk Monitor)

If you want to monitor multiple URLs, products, or pages, create one schedule for each set of inputs.

For example, if your Bot tracks an Amazon product by `marketplace_url` and `asin`, create a separate schedule for each product and enter a different `asin` in the `Inputs` step.

This lets each monitored item keep its own schedule, notification rule, retry setting, and run history.

## Which frequencies are supported?

Schedules currently support `Hour`, `Day`, and `Week`.

## Do I need to update a schedule after the Bot is updated?

Usually, no. A schedule continues to run the published Bot with the timing, inputs, email settings, and retry settings saved in that schedule.

Review the schedule if the Bot update changes required inputs, removes an input, changes the meaning of an input, or changes the result structure used by a condition-based email rule.

If the updated Bot needs different values, open the schedule and update its `Inputs` and notification settings before the next run.

## Are schedules real-time monitoring?

No. Schedules run Bots based on the timing you configure. They are not real-time monitoring.

## Where are result emails sent?

Result emails are sent to the email address linked to your BrowserAct account by default.

You can check the recipient shown under `When to email results` when creating a schedule.

## Can I send emails only when a condition is met?

Yes, for Agent Built Bots.

Choose `When results meet a condition`, then describe the condition that should trigger an email. This option is currently supported only for schedules created from Agent Built Bots.

For example, you can ask BrowserAct to email you when a product price drops below a certain amount, when an item becomes available, or when a result includes a specific keyword.

## What happens if a scheduled run fails?

If `Retry failed runs once` is enabled, BrowserAct automatically creates one retry run after a scheduled run fails.

If `Email me if a run fails` is enabled, BrowserAct sends a failure email when a scheduled run fails.

## Will a schedule enter the queue if credits are insufficient?

No. If the schedule cannot create a run because credits are insufficient, the run is not added to the task queue.

Add credits or adjust your account setup before the next scheduled run can be created.

## Can I use schedules with both Agent Built Bots and Workflow Built Bots?

Yes. Schedules can be created for published BrowserAct Bots.

The available inputs and result behavior depend on the Bot you schedule.

## Can I still use Make scheduling?

Yes.

Use BrowserAct schedules when you want native scheduled Bot runs and result emails inside BrowserAct.

Use Make scheduling when you want a Make scenario to trigger BrowserAct and continue into other Make modules.
