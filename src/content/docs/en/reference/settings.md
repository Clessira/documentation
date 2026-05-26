---
title: Settings
description: All settings tabs at a glance — General, Organize, Data, Debug.
---

Open Settings with right-click on the menu bar icon → **"Settings"** (or <kbd>⌘,</kbd> with the app focused).

Settings are split into four tabs.

## General

The everyday options:

- **Tracking interval** — how often NowDoing prompts (5–60 min). See [Tracking interval](/en/features/tracking-interval/).
- **Menu bar display** — choose what appears next to the icon: icon only, icon + text, icon + time, or icon + text + time. See [Menu bar & popover](/en/features/menu-bar/).
- **Launch at login** — adds NowDoing to your login items.
- **Show notifications** — reminder notification when the prompt sits in the background.
- **Language** — follows the macOS system language (German or English). Details in [Language & localization](/en/reference/localization/).

## Organize

Activity management:

- Create, rename, color, archive.
- Drag-and-drop ordering.
- Show or hide archived activities.

See [Activities](/en/features/activities/).

## Data

Everything around your data file:

- **Reveal in Finder** — opens the folder. Default: `~/Library/Application Support/NowDoing/data.json`.
- **Export data** — full JSON file as backup.
- **Import data** — restore from a previous export.
- **Delete all data** — resets the app. **This action is irreversible.**

If a read or write error occurs, a banner with the error detail appears here.

## Debug

For developers and beta testers:

- **Short interval (seconds)** — for UI tests of tracking behaviour.
- **VS Code integration** — enable, show shared secret, configure port. See [VS Code](/en/integrations/vscode/).
- **Log level** — Standard, Verbose, Trace. Logs land locally under `~/Library/Logs/NowDoing/`.
- **Open logs** — opens the current log in Console.app.

In everyday use, leave Debug collapsed — no effect on normal operation.
