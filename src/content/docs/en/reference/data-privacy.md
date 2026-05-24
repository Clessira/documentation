---
title: Data & privacy
description: Where your data lives, what the app sends, and what it doesn't — the core promise page.
---

**Your data stays on your Mac.** That's not a marketing slogan, it's the foundation NowDoing is built on.

## Where it lives

NowDoing stores everything in a single JSON file inside the app container:

```
~/Library/Application Support/NowDoing/data.json
```

The file contains:

- Your activities (names, colors, archived status)
- All time entries (activity, start, end)
- Personal app settings

That's all. No hidden tracking store, no telemetry caches.

## What NowDoing does **not** do

- ❌ No account, no sign-in.
- ❌ No cloud sync, no server.
- ❌ No analytics, no crash reporting to a third-party service.
- ❌ No access to screen content, keystrokes, or other apps.
- ❌ No outbound network calls — the app contains **no calls to any external server**.

## Loopback listener (optional)

If you enable the **VS Code integration**, the app opens a small HTTP listener on `127.0.0.1`. It binds **exclusively to the loopback interface** — not reachable from the network.

Messages to this listener are HMAC-signed, so only clients with the shared secret are accepted.

More under [VS Code integration](/en/integrations/vscode/).

## Backups

Since all data lives in one file, backups are trivial:

- **Time Machine** captures the file as part of your usual system backup.
- **Manual export** via **Settings → Data → "Export data"**.

Restoring an export replaces existing data — the app prompts before writing.

## Sandboxing & hardened runtime

NowDoing runs with **App Sandbox** and **Hardened Runtime** enabled. That means:

- The app has **no access** to files outside its own container.
- No access to other apps, screen contents, or keyboard events.
- Code injection and library loading are blocked at the system level.

The only permissions ever requested are **notifications** (for the reminder toast) and optionally **login items** (for "launch at login").

## Failure modes

If a write fails (e.g. disk full), a red banner appears in **Settings → Data** with the error detail. NowDoing uses **atomic writes**: either the whole file is replaced, or nothing changes — a half-written, broken file cannot occur.
