---
title: Intelligence
description: Auto-confirm, undo toast, adaptive intervals, and Focus detection — how NowDoing adapts to your rhythm.
---

NowDoing tries to stay out of the way when you are deep in a task and to ask only when there is something to ask about. The helpers below run quietly in the background. All toggles live under **Settings → Intelligence**.

## Auto-confirm

If you confirm the same activity three times in a row, NowDoing assumes you are in flow. The prompt popover is then **skipped** and the running block continues silently — no popover, no sound, no interruption.

- As soon as you act yourself (hotkey, menu bar click) or switch activity, the regular mode returns.
- Pause, snooze, and discard break the streak.
- Toggle under **Settings → Intelligence → Auto-confirm**.

## Adaptive intervals

The [tracking interval](/en/features/tracking-interval/) is not set in stone — with this toggle on, NowDoing tunes it to your behaviour:

| Situation | Effect |
|---|---|
| 3× the same activity in a row | Interval **doubles** (max. 1 hour) |
| Multiple activity switches in quick succession | Interval **halves** (min. 1 minute) |
| Activity switches after a longer phase | Interval drifts back toward your configured value |

You get quiet during focus sessions and stay fine-grained during reactive work. The base value (the one NowDoing returns to) is still set under **Tracking interval**.

## Undo toast

After every logged entry a small banner appears at the bottom of the popover for **8 seconds**, with an **"Undo"** button. One click (or <kbd>⌘Z</kbd> while the toast is visible) removes the just-created entry and restores the previous state.

Handy if you mistyped, picked the wrong activity, or hit the wrong quick-pick key. After 8 seconds the entry behaves like any other and can be edited — see [Day view](/en/features/day-view/).

## Focus & Do Not Disturb

If a **macOS Focus** is active on your Mac — *Do Not Disturb*, *Presentation*, *Sleep*, a custom Focus —, NowDoing suppresses the automatic prompt entirely. Neither popover nor sound interrupts you.

- Tracking still runs in the background — the current activity is not stopped.
- When the Focus ends, NowDoing asks again on the next regular interval.
- Manual paths stay open: the hotkey <kbd>⌃⌥⌘L</kbd> or a menu bar click logs at any time.

This detection uses the standard interface macOS exposes to every app — no data about your Focus modes is stored or transmitted.

## How they work together

The four helpers compose: adaptive intervals stretch the gap between prompts, auto-confirm skips them entirely, Focus pauses them temporarily, and the undo toast catches rare misclicks. Disable individual features under **Settings → Intelligence** if you prefer a strict cadence.
