---
title: Tracking interval
description: How often NowDoing asks — and how to tune the interval to your rhythm.
---

The tracking interval controls how often NowDoing automatically asks: **"What did you just work on?"**

## Default: 20 minutes

On first launch the interval is **20 minutes** — a good middle ground between precision and quiet.

## Change the interval

Right-click the menu bar icon → **Settings → General** → **Tracking interval**.

Values from **5** to **60 minutes** are available.

| Interval | Effect |
|---|---|
| 5–10 min | Very fine-grained, frequent interruption |
| 15–20 min | Recommended — default for solo workflow |
| 30–45 min | Less interrupting, reminds you of the broad block |
| 60 min | Hourly overview, more of a background check-in |

## How is each entry calculated?

When you confirm an activity, NowDoing writes the entry **from the previous entry (or app start) up to now** into the database.

Example with a 20-minute interval:

```
09:00  App start → no entry yet
09:20  Prompt → you pick "Coding" → entry 09:00 – 09:20 (Coding)
09:40  Prompt → "Coding" again → block is extended to 09:00 – 09:40
10:00  Prompt → you pick "Calls" → new entry 09:40 – 10:00 (Calls)
```

Confirming the same activity keeps the menu bar live counter going — the existing block stretches, a new one is not created.

## Pause

For longer breaks (lunch, off-site meetings), you can **pause tracking**:

- Right-click → **"Pause"**

During pause the live counter stops and **no new entries are created**. When you resume, the next confirmation takes things from there.

## Debug interval

For developers and curious testers, the **Debug** tab in Settings exposes an additional short interval (5–30 seconds) to exercise tracking behaviour without long waits. Leave it off in daily use — it gets annoying fast.
