---
title: VS Code integration
description: Automatically log Git branch switches in VS Code as activities in NowDoing.
---

The **NowDoing VS Code extension** wires your editor to the Mac app. When you switch Git branches in VS Code, NowDoing can capture that as an activity automatically — no manual confirmation.

## Install

1. In VS Code, open the **Extensions** tab (<kbd>⇧⌘X</kbd>).
2. Search for **"NowDoing"** (publisher: `NowDoing`).
3. Click **"Install"**.

The extension only works in tandem with the **NowDoing Mac app** — it talks to the app locally over `127.0.0.1`.

## How it works

The Mac app runs a small **HTTP listener on the loopback interface**. The VS Code extension watches Git branch changes in the current workspace and sends a signed message to the app.

- **Local:** no data ever leaves your Mac.
- **Signed:** messages are HMAC-signed so only your own extension can talk to the app.
- **Loopback-only:** the listener binds to `127.0.0.1` exclusively — it's not reachable from the network.

## Configuration

In the NowDoing settings (**Settings → Debug** in the Mac app) you'll find:

- **Enable VS Code integration** — turns on the listener.
- **Shared secret** — the app generates a secret on first launch and shows it. Copy it into VS Code settings under `nowdoing.sharedSecret`.
- **Port** — default `52345`, adjustable if there's a conflict.

In VS Code: <kbd>⌘,</kbd> → search `nowdoing` and enter the secret and port.

## Palette commands

Alongside automatic tracking, the extension provides manual commands in the Command Palette (<kbd>⇧⌘P</kbd>):

- **NowDoing: Start Activity** — start an activity without opening the Mac app popover.
- **NowDoing: Stop Activity** — pause tracking.
- **NowDoing: Show Status** — show the current activity in the VS Code status bar.

## Branch change as activity

By default, the branch name is appended as a note; the activity stays whatever was last active (e.g. `🛠️ Coding`). If you'd rather log branches as full activities, enable `nowdoing.branchAsActivity` in VS Code settings.
