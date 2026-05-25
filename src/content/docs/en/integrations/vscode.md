---
title: VS Code integration
description: Git branch switches in VS Code automatically open NowDoing's tracking prompt.
---

The **NowDoing VS Code extension** connects your editor to the Mac app. When you switch Git branches in any open repository, NowDoing opens its tracking prompt with the new branch name prefilled. VS Code also shows the currently tracked activity directly in its status bar.

All traffic stays local, over a Unix domain socket inside the Mac app's sandbox container. No network port is opened.

## Setup

1. In the Mac app, open **Einstellungen → Integrationen → VSCode** (Settings → Integrations → VSCode) and enable the integration.
2. Confirm the **"Schlüsselbund-Zugriff"** (Keychain Access) info dialog with **Verstanden** (Got it), then click **Always Allow** on the macOS prompt.
3. In VS Code, install the **NowDoing** extension (publisher `NowDoing`) from the Marketplace.
4. In VS Code, run **NowDoing: Test Connection** (<kbd>⇧⌘P</kbd>) — the status bar will show `✓ NowDoing`.

That's it. There is no port to configure and no token to paste — the extension finds the socket path and token automatically through the capability file the Mac app writes on activation.

## Keychain access

The first time you enable the integration, NowDoing shows a short info dialog titled "Schlüsselbund-Zugriff" (Keychain Access) — confirm with **Verstanden** (Got it). Right after, macOS itself asks for permission, because the token is stored encrypted in the **macOS Keychain**. Click **Always Allow** there, otherwise NowDoing will have to ask again on every launch.

If you deny the macOS prompt, the integration stays off and the status area shows "Schlüsselbund-Fehler" (Keychain error) with the macOS message. You can retry any time by toggling the switch off and on again.

## How it works

When the integration is enabled, the Mac app starts a small HTTP listener on a Unix domain socket inside its sandbox container (`~/Library/Containers/com.mattes.nowdoing/Data/api.sock`, mode `0600`, readable only by your own user). Alongside it, the app writes a capability file `api-endpoint.json` containing the socket path, auth token, and PID.

The extension reads that file on every request — so the integration starts working the moment you flip the switch in the Mac app, with no separate setup step in VS Code.

Branch changes are picked up via VS Code's built-in Git API and, after a short debounce window (default 1.5 seconds, to avoid spam during rebases), signed and sent to the Mac app. Every request carries an HMAC-SHA256 signature, a timestamp, and a nonce as defense-in-depth on top. NowDoing rejects requests with more than 60 seconds of clock drift — if you see "expired timestamp" or "signature invalid" errors, check the system clock (NTP).

## Status bar in VS Code

When connected, the extension shows up to three items in the status bar:

- **`✓ NowDoing`** — connection status. Click to re-check the connection.
- **Current activity** — name of the running NowDoing activity (with `(Pause)` suffix when paused). Click to hide.
- **Elapsed time** — duration since the current activity started (`<1m`, `42m`, `1h 5m`). Click to hide.

The activity and elapsed time refresh every 10 seconds (`nowdoing.currentPollSeconds`) and tick locally every 30 seconds in between, so the readout stays fresh without hammering the Mac app.

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

The auth token is **not** stored in VS Code settings or SecretStorage. It lives only in the capability file (mode `0600`, readable only by your own user) written by the Mac app. On the Mac side it is additionally stored encrypted in the macOS Keychain.

## Data and privacy

The extension sends to the Mac app: the repository folder basename, the absolute repository path, the new branch name, and the previous branch name. There is no network communication — the socket lives inside the sandbox container and is scoped to your own user.
