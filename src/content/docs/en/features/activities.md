---
title: Activities & Groups
description: Create, arrange, color, group, pin and archive — the building blocks of your time tracking.
---

An **activity** in NowDoing is anything you want to track: `Coding`, `📞 Calls`, `Lunch`, `Reading`. Activities have a name (emojis are part of it), an optional color, and can be bundled into **groups** — one level deep, no nesting.

## Create an activity

You can create a new activity in two places:

- **From the popover** — type a name into the search field that doesn't exist yet and press <kbd>Enter</kbd>. On a past day you also need to enter a duration (`45m`, `1h30m`).
- **From Settings** — open **Settings → Activities**, in the footer select `Aktivität` (activity), type the name and press <kbd>Enter</kbd> or click the plus button.

**Tip:** a few meaningful activities beat many overly specific ones. Three to eight is a sweet spot. Better one `Coding` activity with a note "Feature X" than ten per-feature activities.

## Manage activities

**Settings → Activities** shows a tree list with three sections:

1. **Groups** — each group as a section with its members and a count badge.
2. **Ohne Gruppe** ("ungrouped") — every activity that isn't in a group.
3. **Archiv** ("archive") — collapsed section with archived activities and a per-row **restore** button.

Use **drag-and-drop** to move activities between sections — onto a group header, into a group section, or into the ungrouped area.

### Inline rename

Right-click an activity → **Umbenennen** (rename). The row turns into an editor: color picker on the left, name field in the middle, a green confirm and a grey cancel button on the right. <kbd>Enter</kbd> saves. The same works on a group header.

### Activity settings sheet

Right-click → **Einstellungen…** (settings) opens a sheet with every detail of an activity:

- **Allgemein** (general) — name, color, group (picker over all groups or "ungrouped"), **Angeheftet (Schnellauswahl)**: pinned activities show up as one-click chips in the prompt popover.
- **Ziele** (goals) — optional **weekly goal** in hours (0.25 – 168 h, 0.5 h steps).
- **Notizen & Verrechnung** (notes & billing) — optional **default note** that pre-fills the note field when you log this activity, plus an optional **billing code**.
- **Timer** — optional **per-activity prompt interval** in minutes (1 – 120). Without an override the global interval applies.
- Bottom: **Archivieren** (archive, red, closes the sheet).

`Speichern` (save) commits the sheet, `Abbrechen` (cancel) discards. The inline color picker in the rename row and the one in the sheet write straight to the activity — the save button does not undo them.

### Pin (quick pick)

Right-click → **Anheften** (pin) marks an activity as quick pick. It shows up prominently in the prompt popover. **Loslösen** (unpin) reverses it. A small pin icon on the row indicates the state.

### Assign an activity to a group

Two ways:

- **Drag-and-drop** onto the target group (or onto "Ohne Gruppe").
- **Right-click → Verschieben nach → \<group\> / Ohne Gruppe**.

## Groups

Groups bundle related activities and carry their own color plus an optional default note and billing code. They have **no time entries of their own** — totals come from summing their members' entries.

### Create a group

**Settings → Activities → footer**: pick `Gruppe` in the segmented picker, type the name, confirm.

### Edit a group

- **Right-click the group header → Umbenennen** — inline editor, same as for activities.
- **Right-click → Einstellungen…** — sheet with **Name**, **Farbe** (color), **Standard-Notiz verwenden** (use default note, optional), **Verrechnungsnummer** (billing code).

### Delete a group

**Right-click the group header → Gruppe löschen** (delete group). A confirmation dialog warns: *"Aktivitäten in 'Name' werden ungruppiert. Zeiteinträge bleiben erhalten."* — activities in the group become ungrouped, time entries are kept. The members move into the "Ohne Gruppe" section, keep all their entries, and can be reassigned to another group.

## Archive, don't delete

You **cannot delete an activity outright** while it still has entries attached — historical data should stay consistent. Instead you **archive** it (right-click → **Archivieren**, or from the activity sheet → **Archivieren**):

- It disappears from the quick picker and the activity lists in the popover.
- It stays visible in the **Archiv** section of the list and in old entries that still reference it.
- The **restore** button on the archive row brings it back.

## Edit existing entries

In the day view (popover and timesheet) you can **delete a single time entry**: hover the row and a small trash icon appears next to the time range. Clicking it removes the entry and recalculates the day total.

Inline editing of start/end time or reassigning an entry to a different activity is not available today — if you need to fix an entry, delete it and log a new one. For past days the popover has a **duration field** (`45m`, `1h30m`) for backfilling entries.
