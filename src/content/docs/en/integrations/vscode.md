---
title: VS Code integration
description: Git branch switches in VS Code open NowDoing's tracking prompt.
---

The **NowDoing VS Code extension** connects your editor to the Mac app. When you switch Git branches in any open repository, NowDoing opens its tracking prompt with the new branch name prefilled. VS Code also shows the running activity in its status bar.

## Setup

1. In the Mac app, open **Einstellungen → Integrationen → VSCode** (Settings → Integrations → VSCode) and enable the integration.
2. Confirm the **"Schlüsselbund-Zugriff"** (Keychain Access) info dialog with **Verstanden** (Got it), then click **Always Allow** on the macOS prompt.
3. In VS Code, install the **NowDoing** extension (publisher `NowDoing`) from the Marketplace.
4. In VS Code, run **NowDoing: Test Connection** (<kbd>⇧⌘P</kbd>). The status bar will show `✓ NowDoing`.

## Keychain access

When you enable the integration, NowDoing shows a short info dialog titled "Schlüsselbund-Zugriff" (Keychain Access) — confirm with **Verstanden** (Got it). Right after, macOS itself asks for permission, because the security token is stored encrypted in the **macOS Keychain**. Click **Always Allow** there, otherwise NowDoing will have to ask again on every launch.

If you deny the macOS prompt, the integration stays off and the status area shows "Schlüsselbund-Fehler" (Keychain error) with the macOS message. You can retry any time by toggling the switch off and on again.

## Status bar in VS Code

When connected, the extension shows up to three items:

- **`✓ NowDoing`** — connection status. Click to re-check the connection.
- **Current activity** — name of the running activity, with a `(Pause)` suffix when paused. Click to hide.
- **Elapsed time** — duration since the activity started (`<1m`, `42m`, `1h 5m`). Click to hide.

The values are polled from the Mac app every 10 seconds and ticked locally in between.

## Command Palette commands

| Command | What it does |
| --- | --- |
| `NowDoing: Test Connection` | Checks whether the Mac app is reachable. |
| `NowDoing: Reconnect` | Retries the connection and surfaces errors. |
| `NowDoing: Start Activity` | Start an activity by search (creates one on demand). |
| `NowDoing: Show Output Log` | Opens the extension's diagnostic log. |
| `NowDoing: Open Settings` | Jumps straight to the extension's settings. |
| `NowDoing: Toggle Current Activity in Status Bar` | Show/hide the current activity item. |
| `NowDoing: Toggle Elapsed Time in Status Bar` | Show/hide the elapsed time item. |

## Extension settings

| Setting | Default | Description |
| --- | --- | --- |
| `nowdoing.enabled` | `true` | Master switch for branch-change notifications. |
| `nowdoing.debounceMs` | `1500` | Quiet window after a branch change before notifying. |
| `nowdoing.showCurrentActivity` | `true` | Show the current activity in the status bar. |
| `nowdoing.showElapsedTime` | `true` | Show elapsed time on the current activity in the status bar. |
| `nowdoing.currentPollSeconds` | `10` | How often to refresh the current activity from the Mac app. |

## Data and privacy

All traffic runs locally over a Unix domain socket inside the Mac app's sandbox container. No network port is opened. The extension sends to the Mac app: the repository folder basename, the absolute repository path, the new branch name, and the previous branch name.
