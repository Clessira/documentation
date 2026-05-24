---
title: Spotlight
description: Find activities and notes via macOS Spotlight — fully local, no network.
---

NowDoing can index its activities and notes for the **macOS Spotlight search**. That makes notes like "PROJ-123" or "Standup" reachable directly via <kbd>⌘ Space</kbd> — without opening the app first.

## Enable

In the [welcome wizard](/en/getting-started/first-run/) at step 5 — or anytime under **Settings → Integrations → Index notes in Spotlight**.

When enabled, NowDoing builds a local index in `~/Library/Application Support/NowDoing`. Spotlight reads that index directly — there is no server communication.

## What gets indexed?

- **Activity names**, including emojis.
- **Notes** attached to activities (when present).
- **Ticket IDs** from [activity import](/en/features/import/) (e.g. `PROJ-123`).

Time entries, Timesheet data, and individual day logs are not indexed — Spotlight finds the activity record, not its time trail.

## What Spotlight shows

A hit opens the app and jumps straight to the matching activity. If a hit doesn't appear:

1. Toggle the indexing off and on again in Settings.
2. Check **System Settings → Spotlight** — make sure NowDoing is permitted as a source.

## Disable

Turn the toggle off → the index is removed. From the next reindex onward, Spotlight no longer finds the activities.

## Privacy

The index lives **strictly local**. Spotlight itself sends no content to Apple — see [Data & privacy](/en/reference/data-privacy/).
