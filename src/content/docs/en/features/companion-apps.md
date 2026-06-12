---
title: iPhone, iPad & Apple Watch
description: The companion app for iPhone and iPad plus an Apple Watch app — track, backfill and fix entries on the go, with live sync through your iCloud.
---

Clessira ships as a companion app for **iPhone and iPad**, with an **Apple Watch app** on top. You start and stop tracking on the go, backfill what you forgot and fix entries right on the device. When a session is running on the Mac, the iPhone shows it live — and the other way round. Sync runs through your own iCloud; the Mac remains the home base for reporting, exports and settings.

## How to set it up

1. Install the Clessira app on your iPhone or iPad — it is part of the same **TestFlight beta** as the Mac app.
2. Enable iCloud sync on the Mac: **Settings → Storage & Backups → "Sync with iCloud"**.
3. Enable iCloud sync in the companion app's settings as well. After the first sync your activities and entries appear on the device.

## What the app can do

- **Start and stop tracking** — tap an activity's play/stop button.
- **Backfill** — log a past time range with activity, start, end and note.
- **Create, rename, pin and archive activities** — pinned activities get their own section at the top.
- **Edit and delete entries** — tap a timesheet row to change activity, start, end and note; delete via swipe or from the edit sheet (with confirmation).
- **Per-activity stats** — tap an activity for hours today, this week, this month and all time, including weekly-goal progress.
- **Backups** — the app's settings let you browse backups, create one manually and restore.

These stay on the Mac: group, colour and billing configuration, the timesheet window with pivot and insights, exports and all integrations.

## Live sessions across devices

Every device publishes its running session through iCloud. Start tracking on the Mac and the iPhone shows a card with the activity, the device name and a live counter — start on the iPhone and the session appears as a banner on the Mac. You always see whether and where tracking is running.

Forgotten sessions are caught:

- If a session runs longer than a configurable threshold (default: 8 hours), the app asks on open: pick an end time, keep it running, or discard.
- A local notification ("Still tracking?") reminds you, with Stop/Continue actions.
- Sessions from other devices that look finished are dimmed and can be discarded without creating an entry.

## Interval reminders on iPhone & iPad

The Mac app's recurring prompt exists on iPhone and iPad as a local notification — off by default, enabled under **Settings → Reminders**:

1. Turn reminders on; the app asks once for notification permission.
2. Set the interval. Reminders only arrive within your working hours.
3. Respond straight from the notification: **Continue** resumes the last activity, **Stop** ends it — or tap the notification to backfill the gap since the last entry, pre-filled.

While a session is running, reminders stay silent. An active Focus mode can additionally suppress notifications.

## Apple Watch

The Watch app comes automatically with the iPhone app. It is a remote control: pinned activities show up as pills, one tap starts or stops them — straight from your wrist. The Watch talks to the iPhone, not to iCloud directly; the iPhone app must have been opened once after installation.

## Known limits

- iPhone and iPad sync on open and while in the foreground — new entries from other devices appear once the app comes to the foreground.
- The reminder notification's action titles are static; the name of the last tracked activity is in the notification text.
- The Watch needs a paired iPhone in range.
