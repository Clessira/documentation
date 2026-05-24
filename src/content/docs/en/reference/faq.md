---
title: FAQ
description: Frequently asked questions about NowDoing.
---

## General

### What does NowDoing cost?

During the beta, NowDoing is **free**. At general release it'll be a **one-time purchase** — not a subscription.

### Which platforms does NowDoing run on?

**macOS only** (version 26.4+). There is deliberately no iOS, Windows, or web version — NowDoing is built specifically for the macOS menu bar experience.

### Where is my data?

Locally on your Mac at `~/Library/Application Support/NowDoing/data.json`. See [Data & privacy](/en/reference/data-privacy/).

## Features

### Can I edit past days?

Yes. From the Timesheet window you can edit any entry (change activity, move start or end time, delete). The day total recalculates automatically.

### What happens when my Mac sleeps?

NowDoing detects sleep and ends the running entry. On wake, the next prompt appears — the gap stays visible as "not tracked."

### What if I miss the prompt?

The prompt stays open until you answer it. You can adjust the resulting entry's start time afterwards if you confirm, say, ten minutes late.

### Can I track multiple activities at once?

No. NowDoing is deliberately **single-task**: only one activity at a time. It mirrors the fact that your attention can only focus on one thing at a time, too.

### Is there a pomodoro mode / break reminder / reports?

Not built in. NowDoing does one thing: record what you do. Pomodoro apps, break reminders, and report tools already exist as solid standalone choices, and they pair well with NowDoing.

## Data & sync

### Can I sync across Macs?

Not built in. You can put `data.json` on iCloud Drive, Dropbox, etc. — the app re-reads the file on launch. **Warning:** simultaneous writes from two devices can cause conflicts.

### Can I export / migrate my data?

Yes. **Settings → Data → "Export data"** gives you the full JSON file. For spreadsheet exports see [CSV export](/en/features/csv-export/).

## Technical

### NowDoing isn't responding / the popover won't open.

First, quit the app from the context menu and relaunch. If the problem persists:

1. Open **Settings → Debug → Logs**.
2. Look for entries around the time of the problem.
3. Send us the log via [support / feedback](https://nowdoing.app).

### How do I disable the live label?

**Settings → General** → toggle off **"Live label in menu bar"**.

### Does NowDoing work with multiple Spaces / displays?

Yes. The menu bar icon is part of the macOS menu bar and is visible across all Spaces. The popover always opens on the active display.
