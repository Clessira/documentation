---
title: Widgets
description: NowDoing in macOS Notification Center and on the desktop — four widgets for overview and quick logging.
---

NowDoing ships four **WidgetKit widgets** you can place in macOS Notification Center, on the lock screen, or — since macOS Sonoma — directly on the desktop. All widgets read from an **AppGroup** container inside the app sandbox: they always show current data and never need a network connection.

## Add a widget

1. Right-click the desktop (or click the date in the top-right) → **Edit widgets…**
2. Search for **"NowDoing"**.
3. Pick a size and drag it where you want it.

You can place the same widget multiple times — e.g. a *Now Tracking* strip in Notification Center plus a *Heatmap* block on the desktop.

## The four widgets

### Today Total (small)

Shows today's **total tracked time** as a large number. Updates hourly and after every completed entry.

Good for: a quick daily glance without opening the popover.

### Now Tracking (small)

Shows the **current activity** and **elapsed time** as a live timeline. Refreshes every 60 seconds while an entry is running.

Tip: clicking the widget opens NowDoing directly with the popover.

### Quick Log (medium)

Shows your **five pinned activities** as tap buttons. A tap logs the activity immediately — the app is **not** brought to the foreground. Implemented via App Intents (see [App Intents & Services](/en/integrations/app-intents/)).

Which activities appear is controlled the same way as everywhere else, through [pinned quick-picks](/en/features/activities/).

### Heatmap (large)

Shows a **month calendar** with colour-coded days — intensity matches tracked hours, days that hit the daily target are highlighted in green, public holidays carry an orange tint.

Clicking a day opens its detail view in the timesheet.

## Refresh cadence

| Widget | Refresh |
|---|---|
| Today Total | Hourly + push after every entry |
| Now Tracking | Every second while an entry is running |
| Quick Log | On activity or pin changes |
| Heatmap | Several times a day + after logging |

macOS may throttle further if your Mac is on low-power mode or the widget has been off-screen for a while — that is a system policy, not NowDoing behaviour.

## Data & privacy

Widgets only read from the shared AppGroup container (`group.com.mattes.nowdoing`). No **network requests** are made, no telemetry is sent, no third-party services are involved. With iCloud sync enabled, data is read unchanged from the already-synced file.
