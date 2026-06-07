---
title: VS Code integration
description: Git branch switches in VS Code open Clessira's tracking prompt.
---

The **Clessira VS Code extension** connects your editor to the Mac app. When you switch Git branches in any open repository, Clessira opens its tracking prompt with the new branch name prefilled. VS Code also shows the running activity in its status bar.

## Setup

1. In the Mac app, open **Einstellungen → Integrationen → VSCode** (Settings → Integrations → VSCode) and enable the integration.
2. Confirm the **"Schlüsselbund-Zugriff"** (Keychain Access) info dialog with **Verstanden** (Got it), then click **Always Allow** on the macOS prompt.
3. In VS Code, install the **Clessira** extension (publisher `Clessira`) from the Marketplace.
4. In VS Code, run **Clessira: Test Connection** (<kbd>⇧⌘P</kbd>). The status bar will show `✓ Clessira`.

## Keychain access

When you enable the integration, Clessira shows a short info dialog titled "Schlüsselbund-Zugriff" (Keychain Access) — confirm with **Verstanden** (Got it). Right after, macOS itself asks for permission, because the security token is stored encrypted in the **macOS Keychain**. Click **Always Allow** there, otherwise Clessira will have to ask again on every launch.

If you deny the macOS prompt, the integration stays off and the status area shows "Schlüsselbund-Fehler" (Keychain error) with the macOS message. You can retry any time by toggling the switch off and on again.

## Status bar in VS Code

When connected, the extension shows up to three items:

- **`✓ Clessira`** — connection status. Click to re-check the connection.
- **Current activity** — name of the running activity, with a `(Pause)` suffix when paused. Click to hide.
- **Elapsed time** — duration since the activity started (`<1m`, `42m`, `1h 5m`). Click to hide.

The values are polled from the Mac app every 10 seconds and ticked locally in between.

## Command Palette commands

| Command | What it does |
| --- | --- |
| `Clessira: Test Connection` | Checks whether the Mac app is reachable. |
| `Clessira: Reconnect` | Retries the connection and surfaces errors. |
| `Clessira: Start Activity` | Start an activity by search (creates one on demand). |
| `Clessira: Show Output Log` | Opens the extension's diagnostic log. |
| `Clessira: Open Settings` | Jumps straight to the extension's settings. |
| `Clessira: Toggle Current Activity in Status Bar` | Show/hide the current activity item. |
| `Clessira: Toggle Elapsed Time in Status Bar` | Show/hide the elapsed time item. |

## Extension settings

| Setting | Default | Description |
| --- | --- | --- |
| `clessira.enabled` | `true` | Master switch for branch-change notifications. |
| `clessira.debounceMs` | `1500` | Quiet window after a branch change before notifying. |
| `clessira.showCurrentActivity` | `true` | Show the current activity in the status bar. |
| `clessira.showElapsedTime` | `true` | Show elapsed time on the current activity in the status bar. |
| `clessira.currentPollSeconds` | `10` | How often to refresh the current activity from the Mac app. |

## Security

- The listener lives on a Unix domain socket inside the Mac app's sandbox container (mode `0600`, readable only by your own user). No TCP port is opened.
- Every request carries an HMAC-SHA256 signature, a timestamp, and a nonce. Requests with more than 60 seconds of clock drift are rejected.
- The token lives only in the capability file `api-endpoint.json` (also `0600`) and, on the Mac side, encrypted in the macOS Keychain — not in VS Code settings or SecretStorage.

## Data and privacy

The extension sends to the Mac app: the repository folder basename, the absolute repository path, the new branch name, and the previous branch name. There is no network communication.
