---
title: "Insights"
description: Donut, heatmap and key metrics — the Insights dashboard shows what your work rhythm actually looks like.
---

The **Insights** dashboard lives as its own tab inside the [Timesheet window](/en/features/stundenzettel/). It condenses your tracked data into a single picture — over 30, 90 or 365 days, switchable via the picker at the top of the tab.

## Donut chart

The **donut** shows your **activity distribution** across the selected range. Each slice is an [activity or group](/en/features/activities/); slice area equals share of total time.

Good for: a feel for where your day actually goes — usually different from what you'd guess.

## Top activities

Below the donut sits a **ranked list** with percentage and hours per activity. It complements the donut with hard numbers — slivers that disappear in the chart show up here with a real value.

## Heatmap (weekday × hour)

A 7×24 matrix: **weekdays** on one axis, **hours** on the other. Darker cells = more hours booked in that slot.

Good for: spotting focus windows, planning deep-work blocks, honestly assessing where your meeting time sits.

## Metrics

| Metric | What it tells you |
|---|---|
| Most productive weekday | Day with the most booked hours in the range |
| Activity switches per day | Mean and median — indicator of context-switch load |
| Longest streak per activity | e.g. "Coding: 4 days in a row with ≥ 2 h" |
| Total hours in range | Sum of all logged entries |
| Holidays in range | Only shown when [holiday mode](/en/features/working-hours/) is active |

The switch count is also the lever that [adaptive intervals](/en/features/intelligenz/) react to — many switches = finer-grained tracking.

## Data & privacy

All calculations run **locally** on your Mac, straight against the tracking database. No telemetry, no cloud analytics, no third-party services.
