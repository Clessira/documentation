---
title: Menu bar & popover
description: How the status icon, popover, and context-sensitive display work.
---

NowDoing lives entirely in the macOS menu bar — no Dock icon, no Finder entry, no full-screen window breaking your flow.

## The status icon

The menu bar icon shows a small colored dot — the color of the currently running activity. At a glance, you see what you're tracked into without clicking.

**Hover:** tooltip with the current activity, elapsed time, and today's total.

## Left-click — open popover

A short click opens the popover. Inside:

- The active activity with a live counter.
- Quick-pick of your most-used activities.
- Three views of today (see [Timeline & views](/en/features/timeline/)).
- Buttons for **"Create activity"** and **"Open timesheet"**.

Click outside — the popover dismisses itself.

## Right-click — context menu

A right-click (or Ctrl-click) on the icon opens a classic macOS context menu:

- **Timesheet** — opens the day + week window.
- **Settings** — all options.
- **Pause** — pauses tracking until you actively confirm again.
- **Quit NowDoing**.

## Live label (optional)

By default, NowDoing shows only the icon. In **Settings → General** you can enable **"Live label"** — the activity name and live counter then appear next to the icon.

Handy if you often look at other displays. The trade-off: it costs space in the menu bar, so it's best on large monitors.

## The automatic prompt

When your tracking interval elapses, the popover **opens automatically** and takes focus. You don't need to reach for the mouse — type to filter, navigate with arrow keys, confirm with <kbd>Enter</kbd>.

Confirming the same activity again keeps the live counter running — the previous block is extended instead of ending and starting a new one.
