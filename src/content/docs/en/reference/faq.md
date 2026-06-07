---
title: FAQ
description: Frequently asked questions about Clessira.
---

## General

### What does Clessira cost?

During the beta, Clessira is **free**. For current pricing and terms see [clessira.app](https://clessira.app).

### Which platforms does Clessira run on?

**macOS only** for now (version 26.0+). Companion apps for iPhone, iPad, and Apple Watch are in development but not yet available.

### Where is my data?

By default, locally on your Mac at `~/Library/Application Support/Clessira/data.json`. You can choose a custom location or optionally enable iCloud sync. See [Data & privacy](/en/reference/data-privacy/).

## Features

### Can I edit past days?

Yes. From the Timesheet window you can edit any entry (change activity, move start or end time, delete). The day total recalculates automatically.

### What happens when my Mac sleeps?

Clessira detects sleep and ends the running entry. On wake, the next prompt appears — the gap stays visible as "not tracked."

### What if I miss the prompt?

The prompt stays open until you answer it. You can adjust the resulting entry's start time afterwards if you confirm, say, ten minutes late.

### Can I track multiple activities at once?

No. Clessira is deliberately **single-task**: only one activity at a time. It mirrors the fact that your attention can only focus on one thing at a time, too.

### Is there a pomodoro mode / break reminder / reports?

Not built in. Clessira does one thing: record what you do. Pomodoro apps, break reminders, and report tools already exist as solid standalone choices, and they pair well with Clessira.

## Data & sync

### Can I sync across Macs?

Yes, optionally via **iCloud Drive**: **Settings → Storage & Backups → "Sync with iCloud"**. Sync runs exclusively through your private iCloud container, with no Clessira server. Details under [Data & privacy](/en/reference/data-privacy/).

Alternatively you can point **"Choose custom folder"** at a path inside Dropbox, OneDrive, or similar. **Warning:** these providers sync whole files, so simultaneous writes from two devices can cause conflicts or lost changes. iCloud sync is more robust — it merges changes entry by entry instead of replacing the file.

### Can I export / migrate my data?

Yes. **Settings → Data → "Export data"** gives you the full JSON file. For spreadsheet exports see [CSV export](/en/features/csv-export/).

## Technical

### Clessira isn't responding / the popover won't open.

First, quit the app from the context menu and relaunch. If the problem persists:

1. Open **Settings → Debug → Logs**.
2. Look for entries around the time of the problem.
3. Send us the log via [support / feedback](https://clessira.app).

### How do I hide the text and time next to the icon?

**Settings → General → Menu bar display** → set to **"Icon only"**.

### Does Clessira work with multiple Spaces / displays?

Yes. The menu bar icon is part of the macOS menu bar and is visible across all Spaces. The popover always opens on the active display.
