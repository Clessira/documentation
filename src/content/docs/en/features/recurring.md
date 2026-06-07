---
title: Recurring activities
description: Templates for standups, daily checks, or meetings — Clessira fills in missing entries automatically.
---

Some activities happen every day or every week: the 9:15 standup, lunch, the weekly team sync. With **recurring templates** you define them once and apply them to days that are still missing the matching entries.

## Where it lives

**Management → Recurring** (or **Settings → Management → Recurring**). Everything happens inline in the UI — you add, edit, and delete templates directly. **No** JSON files, no configs.

## Create a template

For each template you define:

| Field | Description |
|---|---|
| **Activity** | from your list, see [Activities](/en/features/activities/) |
| **Weekdays** | e.g. Mon–Fri, or individual days |
| **Start / end time** | duration is derived from these |
| **Duration** | enter directly as an alternative |
| **Default note** | optional, copied into the entry |

Save and the template is live for the selected weekdays.

## Apply to a day

Templates are applied to a specific day and create the configured entries. Typical uses: standups, daily checks, recurring meetings, break slots — anything you'd otherwise type or pin every morning.

At prompt time, the template takes load off the [prompt popover](/en/features/prompt-popover/): the entry is already there, you just confirm.

## Idempotency

Templates only create **missing** entries. If an entry already exists at the same time, it stays untouched. You can apply the same template to the same day multiple times — no duplicates, no risk.

## Manage

Every template stays editable. Deleting a template **does not** affect entries it has already created — your history is untouched.

## Relationship to manual logging

Templates don't replace manual logging, they support it. If a standup is cancelled or runs twice as long, you log manually as usual — the template kicks in again the next day. For how this relates to your daily target, see [Working hours](/en/features/working-hours/).
