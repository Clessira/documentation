---
title: Timesheet window
description: Week, pivot, month and custom-range views in a dedicated window — with rounding, flextime balance and gap analysis.
---

The **Timesheet** is a dedicated window for any view that spans more than one day. Open it via right-click on the menu bar icon → **"Timesheet"**, or via the App Intent **"Open Timesheet"** (see [App Intents & Services](/en/integrations/app-intents/)). The popover's day view lives in [Day bar & views](/en/features/timeline/).

## Week view

Day-by-day breakdown with expandable rows, weekly total and target progress. Below that you see the week's **overtime balance** plus your cumulative **YTD flextime balance** (actual − target since the start of the year) — built for European teams with flexible working-time accounts. Configure target and weekly hours under [Working hours](/en/features/working-hours/).

## Pivot view

A classic timesheet grid: rows are activities **or** groups, columns are the weekdays, cells are hours. A toggle switches between activity and group level (see [Activities & groups](/en/features/activities/)). The grid scales responsively with window width — perfect for spreadsheet-style analysis.

```
                Mon   Tue   Wed   Thu   Fri   Σ
🛠️ Coding      3:42  4:10  2:30  3:15  4:00  17:37
📞 Calls       1:15  0:45  1:00  0:30  0:50   4:20
```

## Month view

A heatmap calendar with colour-coded days: intensity reflects hours logged, **green** marks days that hit the daily target, an **orange tint** marks holidays. The holiday name sits in the cell, the tooltip shows name plus hours. Click any day to open its detail view. A month summary lists working days and warns about gaps.

## Custom range

Custom range with from/to date pickers — for sprints, billing periods or any arbitrary span. You get a grouped breakdown plus the period total.

## Stats tab

Metrics, trends and distributions over longer periods live on their own page: [Insights & stats](/en/features/insights/).

## Toolbar features

| Feature | Effect |
|---|---|
| **Rounding** | Display-only picker: `exact` / `15 min` / `30 min`. Original entry times stay **untouched** — affects display and exports only. |
| **Week jump** | Type a week number into the text field to jump straight to that calendar week (German-style KW navigation). |
| **Flextime balance** | Cumulative delta (actual − target) per week and YTD in the week view. |
| **Gap analysis** | Untracked blocks of ≥ 1 min are highlighted in the day view with exact timestamps and total gap duration. |
| **CSV export ↑** | Exports **only the visible range**, not your full history. Details: [CSV export](/en/features/csv-export/). |

## Inline editing

In the day view, expand the **"Entries"** disclosure — every entry of the day appears. Click an entry's start or end time to open a date picker for editing, or use the trash button to delete it.
