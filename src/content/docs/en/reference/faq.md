---
title: FAQ
description: Frequently asked questions about NowDoing.
---

## General

### What does NowDoing cost?

During the beta, NowDoing is **free**. For current pricing and terms see [nowdoing.app](https://nowdoing.app).

### Which platforms does NowDoing run on?

**macOS only** for now (version 26.4+). Versions for iPad, iPhone, or Apple Watch are conceivable but not on the current roadmap.

### Where is my data?

By default, locally on your Mac at `~/Library/Application Support/NowDoing/data.json`. You can choose a custom location or optionally enable iCloud sync. See [Data & privacy](/en/reference/data-privacy/).

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

Yes, optionally via **iCloud Drive**: **Settings → Data → "Sync with iCloud"**. Sync runs exclusively through your private iCloud container, with no NowDoing server. Details under [Data & privacy](/en/reference/data-privacy/).

Alternatively you can point **"Choose custom folder"** at a path inside Dropbox, OneDrive, or similar. **Warning:** simultaneous writes from two devices can cause conflicts — iCloud sync is the more robust option.

### Can I export / migrate my data?

Yes. **Settings → Data → "Export data"** gives you the full JSON file. For spreadsheet exports see [CSV export](/en/features/csv-export/).

## Technical

### NowDoing isn't responding / the popover won't open.

First, quit the app from the context menu and relaunch. If the problem persists:

1. Open **Settings → Debug → Logs**.
2. Look for entries around the time of the problem.
3. Send us the log via [support / feedback](https://nowdoing.app).

### How do I hide the text and time next to the icon?

**Settings → General → Menu bar display** → set to **"Icon only"**.

### Does NowDoing work with multiple Spaces / displays?

Yes. The menu bar icon is part of the macOS menu bar and is visible across all Spaces. The popover always opens on the active display.
