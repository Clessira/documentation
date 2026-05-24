---
title: VS Code integration
description: Git branch switches in VS Code automatically open NowDoing's tracking prompt.
---

The **NowDoing VS Code extension** connects your editor to the Mac app. When you switch Git branches in any open repository, NowDoing opens its tracking prompt with the new branch name prefilled. All traffic stays local, over `127.0.0.1`.

## Setup

1. In the Mac app, open **Settings → Integrations → VSCode**, enable the integration, and approve the keychain prompt when macOS asks.
2. Click **Copy** next to the token. Note the port (default `39847`) if you changed it.
3. In VS Code, install the **NowDoing** extension (publisher `NowDoing`) from the Marketplace.
4. In VS Code, run **NowDoing: Set Token** (<kbd>⇧⌘P</kbd>) and paste the token.
5. Run **NowDoing: Test Connection** to verify — the status bar will show `✓ NowDoing`.

## Keychain access

When you enable the integration, NowDoing first shows a short info dialog titled "Schlüsselbund-Zugriff" (Keychain Access) — confirm with **Verstanden** (Got it). Right after, macOS itself asks for permission, because the token is stored encrypted in the **macOS Keychain**. Click **Always Allow** there, otherwise NowDoing will have to ask again on every launch.

If you deny the macOS prompt, the integration stays off and the status area shows "Schlüsselbund-Fehler" (Keychain error) with the macOS message. You can retry any time by toggling the switch off and on again.

## How it works

When the integration is enabled, the Mac app starts a small HTTP listener bound exclusively to `127.0.0.1`. The extension watches VS Code's Git API and sends a signed message to the app on branch changes. After a short debounce window (default 1.5 seconds, to avoid spam during rebases) NowDoing opens the tracking prompt with the new branch.

Every request is HMAC-SHA256-signed with the shared token and carries a timestamp and nonce. NowDoing rejects requests with more than 60 seconds of clock drift — if you see "expired timestamp" or "signature invalid" errors, check the system clock (NTP).

## Command Palette commands

| Command | What it does |
| --- | --- |
| `NowDoing: Set Token` | Stores the token in VS Code SecretStorage. |
| `NowDoing: Test Connection` | Checks whether the Mac app is reachable. |
| `NowDoing: Reconnect` | Retries the connection and surfaces errors. |
| `NowDoing: Start Activity` | Start an activity by search (creates one on demand). |
| `NowDoing: Show Output Log` | Opens the extension's diagnostic log. |
| `NowDoing: Open Settings` | Jumps straight to the extension's settings. |

## Extension settings

| Setting | Default | Description |
| --- | --- | --- |
| `nowdoing.enabled` | `true` | Master switch for branch-change notifications. |
| `nowdoing.port` | `39847` | Must match the port set in the Mac app. |
| `nowdoing.debounceMs` | `1500` | Quiet window after a branch change before notifying. |

The token lives in VS Code SecretStorage under the key `nowdoing.apiToken`. On the Mac side it is stored encrypted in the macOS Keychain.

## Data and privacy

The extension sends to the local listener: the repository folder basename, the absolute repository path, the new branch name, and the previous branch name. Nothing leaves your machine beyond `127.0.0.1`.
