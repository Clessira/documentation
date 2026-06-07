---
title: Tracking interval
description: How often Clessira asks — and how to tune the interval to your rhythm.
---

The tracking interval controls how often Clessira automatically asks: **"What did you just work on?"**

## Default: 45 minutes

On first launch the interval is **45 minutes** — a balance between precision and quiet. You set it directly in the welcome wizard.

## Change the interval

Right-click the menu bar icon → **Settings → General** → **Tracking interval**.

Available values: **5, 10, 15, 20, 30, 45, 60 minutes**.

| Interval | Effect |
|---|---|
| 5–10 min | Very fine-grained, frequent interruption |
| 15–20 min | Fine-grained capture for tactical days |
| 30–45 min | Recommended — default, less interrupting |
| 60 min | Hourly overview, more of a background check-in |

## How is each entry calculated?

When you confirm an activity, Clessira writes the entry **from the previous entry (or app start) up to now** into the database.

Example with a 45-minute interval:

```
09:00  App start → no entry yet
09:45  Prompt → you pick "Coding" → entry 09:00 – 09:45 (Coding)
10:30  Prompt → "Coding" again → block is extended to 09:00 – 10:30
11:15  Prompt → you pick "Calls" → new entry 10:30 – 11:15 (Calls)
```

Confirming the same activity keeps the menu bar live counter going — the existing block stretches, a new one is not created.

## Pause

For longer breaks (lunch, off-site meetings), you can **pause tracking**:

- Right-click → **"Pause"**

During pause the live counter stops and **no new entries are created**. When you resume, the next confirmation takes things from there.

## Debug interval

For developers and curious testers, the **Debug** tab in Settings exposes an additional short interval (5–30 seconds) to exercise tracking behaviour without long waits. Leave it off in daily use — it gets annoying fast.
