---
title: Accessibility
description: How NowDoing integrates with VoiceOver, keyboard navigation, dynamic text sizes and the macOS accessibility settings.
---

NowDoing is tuned to the built-in macOS accessibility features. Instead of inventing its own switches, the app follows what you configure under `System Settings → Accessibility` — set it once, NowDoing adapts.

## VoiceOver

All interactive elements — status icon, popover buttons, combobox, activity rows, timesheet tables, widgets — carry **descriptive labels and hints**. Where it makes sense, **VoiceOver custom actions** are wired up (e.g. "Start tracking", "Delete entry", "Toggle pin"), so you don't have to rotor through every row.

Turn VoiceOver on with <kbd>⌘F5</kbd> or under `System Settings → Accessibility → VoiceOver`.

## Keyboard navigation

Every workflow can be completed without a mouse — open the popover, pick an activity, type a note, confirm, open the timesheet, change settings. Tab order follows the visual reading order.

The full list of shortcuts lives at [Keyboard shortcuts](/en/reference/keyboard-shortcuts/); how to drive the tracking prompt is covered in [Prompt popover](/en/features/prompt-popover/).

## Focus indicators

The currently focused element is always visibly marked — the macOS system accent color is respected, so users with a custom accent can still spot the focus reliably.

## Dynamic text sizes

NowDoing respects the **macOS system text size** (`System Settings → Displays → Larger Text`). Tables, lists and popovers scale with it; the layout adapts without truncating content.

## Reduced motion

Animations — such as the popover slide-in or the notch drop — are automatically toned down when `System Settings → Accessibility → Display → "Reduce motion"` is on.

## Color & contrast

Activity colors are never the only signal — a name, symbol or position is always present alongside. With the "Increase contrast" option active, borders and text contrasts are strengthened. Light and Dark Mode are fully supported.

## Spoken hours

The **"Today's hours"** App Intent lets Siri read your daily total out loud — see [App Intents](/en/integrations/app-intents/).

## Accessibility settings at a glance

| macOS setting | Effect in NowDoing |
| :--- | :--- |
| VoiceOver (<kbd>⌘F5</kbd>) | Labels, hints and custom actions on every element. |
| Keyboard navigation | Full operation via Tab, arrow keys and shortcuts. |
| Larger Text | Popover, tables and lists scale with it. |
| Reduce motion | Animations and transitions are shortened or removed. |
| Increase contrast | Stronger borders and text contrasts. |
| System accent color | Used for focus rings and selection highlights. |

## Known gaps

The heatmap visualizations (month view in the timesheet, heatmap widget) remain primarily graphical. As an alternative, there is always a textual list with the same data — for instance the list view of the day or the pivot view in the timesheet.

Feedback on gaps or wishes: [hello@nowdoing.app](mailto:hello@nowdoing.app).

See also [Menu bar & popover](/en/features/menu-bar/) and the sibling page [Localization](/en/reference/localization/).
